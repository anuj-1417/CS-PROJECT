
AOS.init();

// Show/Hide Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get the exam results form
const examResultsForm = document.getElementById('exam-results-form');

// Get the exam results container
const examResultsContainer = document.getElementById('exam-results-container');

// Get the exam results table body
const examResultsTableBody = document.getElementById('exam-results-table-body');

// Get the student name element
const studentNameElement = document.getElementById('student-name');

// Array to store exam results for up to 10 students
const studentResults = [
{ id: 'S001', name: 'Adarsh Singh', results: [{ subject: 'Mathematics', marksObtained: '85', totalMarks: '100', grade: 'A' }, { subject: 'English', marksObtained: '72', totalMarks: '100', grade: 'B' }] },
{ id: 'S002', name: 'Ishant Pandey', results: [{ subject: 'Science', marksObtained: '90', totalMarks: '100', grade: 'A+' }, { subject: 'History', marksObtained: '78', totalMarks: '100', grade: 'B+' }] },
{ id: 'S003', name: 'Neema Bhandari', results: [{ subject: 'Mathematics', marksObtained: '80', totalMarks: '100', grade: 'A' }, { subject: 'English', marksObtained: '70', totalMarks: '100', grade: 'B' }] },
{ id: 'S004', name: 'Nikita Nailwal', results: [{ subject: 'Science', marksObtained: '85', totalMarks: '100', grade: 'A+' }, { subject: 'History', marksObtained: '75', totalMarks: '100', grade: 'B' }] },
{ id: 'S005', name: 'Harshit Kumar Rai', results: [{ subject: 'Mathematics', marksObtained: '90', totalMarks: '100', grade: 'A+' }, { subject: 'English', marksObtained: '78', totalMarks: '100', grade: 'B+' }] },
{ id: 'S006', name: 'Satvik Saxena', results: [{ subject: 'Science', marksObtained: '80', totalMarks: '100', grade: 'A' }, { subject: 'History', marksObtained: '68', totalMarks: '100', grade: 'C' }] },
{ id: 'S007', name: 'Kavita', results: [{ subject: 'Mathematics', marksObtained: '75', totalMarks: '100', grade: 'B' }, { subject: 'English', marksObtained: '82', totalMarks: '100', grade: 'A+' }] },
{ id: 'S008', name: 'Khyati Mishra', results: [{ subject: 'Science', marksObtained: '88', totalMarks: '100', grade: 'A+' }, { subject: 'History', marksObtained: '80', totalMarks: '100', grade: 'B' }] },
{ id: 'S009', name: 'Nitin Jaisawal', results: [{ subject: 'Mathematics', marksObtained: '65', totalMarks: '100', grade: 'C' }, { subject: 'English', marksObtained: '72', totalMarks: '100', grade: 'B' }] },
{ id: 'S010', name: 'Divyanshi Nigam', results: [{ subject: 'Science', marksObtained: '90', totalMarks: '100', grade: 'A+' }, { subject: 'History', marksObtained: '85', totalMarks: '100', grade: 'A+' }] }
];

// Function to add a new exam result row
function addExamResultRow(subject, marksObtained, totalMarks, grade) {
const newRow = document.createElement('tr');
newRow.innerHTML = `
<td>${subject}</td>
<td>${marksObtained}</td>
<td>${totalMarks}</td>
<td>${grade}</td>
`;
examResultsTableBody.appendChild(newRow);
}

// Add an event listener for form submission
examResultsForm.addEventListener('submit', function (event) {
event.preventDefault(); // Prevent the default form submission

const studentId = document.getElementById('studentId').value.trim();
const student = studentResults.find(s => s.id === studentId);

if (student) {
studentNameElement.textContent = `Name: ${student.name}`; // Display student's name
examResultsContainer.style.display = 'block';
examResultsTableBody.innerHTML = '';
student.results.forEach(result => {
    addExamResultRow(result.subject, result.marksObtained, result.totalMarks, result.grade);
});
} else {
alert('No results found for the given Student ID');
examResultsContainer.style.display = 'none';
}
});