
AOS.init({
    duration: 1000,
    once: true
});

// Course details popup
document.querySelectorAll('#coursesList .btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const grade = card.querySelector('.card-subtitle').textContent;
        const description = card.querySelector('.card-text').textContent;
        const instructor = card.querySelector('small').textContent;

        alert(`Course Details:\n\nTitle: ${title}\nGrade: ${grade}\nDescription: ${description}\nInstructor: ${instructor}`);
    });
});
// Transcript download
document.querySelector('.card .btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.card-body');
    const name = card.querySelector('.card-title').textContent;
    const studentId = card.querySelector('.card-text:first-of-type').textContent.replace('Student ID: ', '');
    const grade = card.querySelector('.card-text:last-of-type').textContent.replace('Grade: ', '');

    alert(`Student Transcript:\n\nName: ${name}\nStudent ID: ${studentId}\nGrade: ${grade}\n\nTranscript download initiated.`);
});

// Add new course functionality
function addNewCourse(title, grade, description, instructor) {
    const courseHtml = `
        <div class="col-md-6 mb-4" data-aos="fade-up">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${grade}</h6>
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">Instructor: ${instructor}</small></p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('coursesList').insertAdjacentHTML('beforeend', courseHtml);
}

// Example usage: Add a new course
addNewCourse('Computer Science', 'Grade 10', 'Introduction to programming concepts and algorithms.', 'Alice Johnson');

// Add new grade functionality
function addNewGrade(subject, marksObtained, totalMarks, grade) {
    const gradeHtml = `
        <tr>
            <td>${subject}</td>
            <td>${marksObtained}</td>
            <td>${totalMarks}</td>
            <td>${grade}</td>
        </tr>
    `;
    document.getElementById('gradesTableBody').insertAdjacentHTML('beforeend', gradeHtml);
}

// Example usage: Add a new grade
addNewGrade('Computer Science', 92, 100, 'A+');

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
