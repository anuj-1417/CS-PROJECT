AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling for the "Choose Course" button
document.querySelector('a[href="#courses"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
