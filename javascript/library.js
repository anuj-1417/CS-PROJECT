AOS.init({
    duration: 1000,
    once: true
});

// Catalog search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const bookRows = document.querySelectorAll('#book-catalog tbody tr');
    
    bookRows.forEach(row => {
        const title = row.cells[0].textContent.toLowerCase();
        const author = row.cells[1].textContent.toLowerCase();
        if (title.includes(searchQuery) || author.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Book reservation form submission
document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const bookTitle = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const studentName = prompt("Please enter your name:");

    if (studentName) {
    // Add reserved book to the table
    const reservedBooksTable = document.getElementById('reserved-books-table').getElementsByTagName('tbody')[0];
    const newRow = reservedBooksTable.insertRow();
    newRow.innerHTML = `
        <td>${bookTitle}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td>${studentName}</td>
    `;

    // Reset form fields
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Show success message
    alert('Book reserved successfully!');
}
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
if (window.scrollY > 100) {
    document.querySelector('.navbar').classList.add('bg-white', 'navbar-light');
    document.querySelector('.navbar').classList.remove('bg-transparent', 'navbar-dark');
} else {
    document.querySelector('.navbar').classList.remove('bg-white', 'navbar-light');
    document.querySelector('.navbar').classList.add('bg-transparent', 'navbar-dark');
}
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
var scrollPosition = window.pageYOffset;
document.querySelector('.hero').style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

// Animate cards on hover
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
});
card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
});

// Display current date in the footer
const footerDate = document.createElement('p');
footerDate.textContent = `Current Date: ${new Date().toLocaleDateString()}`;
document.querySelector('footer .container').appendChild(footerDate);

// Add a back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '&uarr;';
backToTopBtn.setAttribute('id', 'backToTopBtn');
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.display = 'none';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.backgroundColor = 'var(--primary-color)';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
} else {
    backToTopBtn.style.display = 'none';
}
});

backToTopBtn.addEventListener('click', function() {
window.scrollTo({top: 0, behavior: 'smooth'});
});

// Add a simple loading animation
window.addEventListener('load', function() {
const loader = document.createElement('div');
loader.setAttribute('id', 'loader');
loader.style.position = 'fixed';
loader.style.top = '0';
loader.style.left = '0';
loader.style.width = '100%';
loader.style.height = '100%';
loader.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
loader.style.display = 'flex';
loader.style.justifyContent = 'center';
loader.style.alignItems = 'center';
loader.style.zIndex = '9999';
loader.innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>';
document.body.appendChild(loader);

setTimeout(function() {
    loader.style.display = 'none';
}, 1000);
});

// Add book return functionality
function returnBook(button) {
const row = button.closest('tr');
row.remove();
alert('Book returned successfully!');
}

// Add overdue book highlighting
function highlightOverdueBooks() {
const today = new Date();
const reservedBooks = document.querySelectorAll('#reserved-books-table tbody tr');
reservedBooks.forEach(row => {
    const reservationDate = new Date(row.dataset.reservationDate);
    const daysOverdue = Math.floor((today - reservationDate) / (1000 * 60 * 60 * 24));
    if (daysOverdue > 14) {
        row.classList.add('table-danger');
    }
});
}

// Call the function to highlight overdue books
highlightOverdueBooks();

// Refresh overdue highlighting every day
setInterval(highlightOverdueBooks, 24 * 60 * 60 * 1000);

