
AOS.init({
    duration: 1000,
    once: true
});

// Message board functionality
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('message-input');
const messageBoard = document.getElementById('messageBoard');

messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        addMessage('You', message);
        messageInput.value = '';
        // Simulated teacher response
        setTimeout(() => {
            addMessage('Teacher', 'Thank you for your message. We will get back to you shortly.');
        }, 1000);
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `
        <p><strong>${sender}:</strong> ${text}</p>
    `;
    messageBoard.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: 'smooth' });
}

// Add new announcement functionality
function addAnnouncement(title, date) {
    const announcementList = document.querySelector('.list-group');
    const newAnnouncement = document.createElement('li');
    newAnnouncement.className = 'list-group-item';
    newAnnouncement.textContent = `${title} - ${date}`;
    announcementList.appendChild(newAnnouncement);
}

// Example usage: Add a new announcement
addAnnouncement('Science Fair', '10th June');

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
