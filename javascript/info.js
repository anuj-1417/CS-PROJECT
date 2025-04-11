AOS.init({
    duration: 1000,
    once: true
});

// Personal Details Form Handling
const personalDetailsForm = document.getElementById('personal-details-form');
const personalDetailsTable = document.getElementById('personal-details-table').getElementsByTagName('tbody')[0];

personalDetailsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;

    addPersonalDetailsRow(name, dob, address);

    // Clear form fields
    this.reset();
});

function addPersonalDetailsRow(name, dob, address) {
    const newRow = personalDetailsTable.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${dob}</td>
        <td>${address}</td>
    `;
}
// Document Upload Form Handling
const documentUploadForm = document.getElementById('document-upload-form');
const documentList = document.getElementById('document-list');

documentUploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.getElementById('document').files[0];
    if (file) {
        addDocumentToList(file.name);
        // Clear form field
        this.reset();
    }
});

function addDocumentToList(fileName) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
        ${fileName}
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;
    documentList.appendChild(listItem);

    // Add delete functionality
    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        listItem.remove();
    });
}

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
