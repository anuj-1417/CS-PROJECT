AOS.init({
    duration: 1000,
    once: true
});

// Route details popup
document.querySelectorAll('.view-route').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const stops = card.querySelector('.card-text').textContent;

        alert(`Route Details:\n\nRoute: ${title}\nStops: ${stops}`);
    });
});

// Transportation form submission
document.getElementById('transportationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentName = document.getElementById('student-name').value;
    const route = document.getElementById('route').value;

    if (studentName && route) {
        const table = document.getElementById('transportationTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = studentName;
        cell2.textContent = route;

        // Clear form
        this.reset();

        // Show success message
        alert('Transportation registration successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

// Add new route functionality
function addNewRoute(title, stops) {
    const routeHtml = `
        <div class="col-md-6 mb-4" data-aos="fade-up">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${stops}</p>
                    <a href="#" class="btn btn-primary view-route">View Details</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('routesList').insertAdjacentHTML('beforeend', routeHtml);
}

// Example usage: Add a new route
addNewRoute('Route 3', 'INDIRA NAGAR, HAZRATGANJ, ALIGANJ, GUDAMBA');

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

// Live search functionality for transportation records
document.getElementById('search-input').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let table = document.getElementById('transportationTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});

// Add bus stop functionality
function addBusStop(route, stop) {
    let routes = document.querySelectorAll('.card');
    routes.forEach(routeCard => {
        if (routeCard.querySelector('.card-title').textContent === route) {
            let stops = routeCard.querySelector('.card-text');
            stops.textContent += `, ${stop}`;
        }
    });
}

// Example usage: Add a new bus stop
addBusStop('Route 1', 'MAHANAGAR');

// Bus route visualization (simplified version)
function visualizeRoute(routeName) {
    let canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 200;
    let ctx = canvas.getContext('2d');

    // Draw a simple route visualization
    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(350, 100);
    ctx.stroke();

    // Add stops
    let stops = document.querySelector(`.card-title:contains('${routeName}')`).nextElementSibling.textContent.split(', ');
    stops.forEach((stop, index) => {
        let x = 50 + (300 / (stops.length - 1)) * index;
        ctx.beginPath();
        ctx.arc(x, 100, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillText(stop, x - 20, 120);
    });

    // Display the visualization
    let container = document.createElement('div');
    container.appendChild(canvas);
    document.querySelector(`#routesList .card-title:contains('${routeName}')`).closest('.card').appendChild(container);
}

// Example usage: Visualize a route
visualizeRoute('Route 1');
