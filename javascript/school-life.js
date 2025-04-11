
AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling
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

// Activate Bootstrap scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav'
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});

// Animate numbers
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Trigger number animation when element is in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const numberElement = entry.target;
            const endValue = parseInt(numberElement.getAttribute('data-end-value'));
            animateValue(numberElement, 0, endValue, 2000);
            observer.unobserve(numberElement);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.animate-number').forEach((numberElement) => {
    observer.observe(numberElement);
});

// Form validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
