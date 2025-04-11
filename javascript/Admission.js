AOS.init({
    duration: 1000,
    once: true
});

// Function to open a modal
function openModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitRequest">Submit</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.querySelector('#submitRequest').addEventListener('click', function() {
        const form = modal.querySelector('form');
        if (form.checkValidity()) {
            // Simulate form submission
            alert('Your request has been submitted. We will contact you soon!');
            modalInstance.hide();
        } else {
            form.reportValidity();
        }
    });

    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });
}

document.getElementById('requestTour').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Request campus tour button clicked');
    openModal('Request Campus Tour', `
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="date" class="form-label">Preferred Tour Date</label>
                <input type="date" class="form-control" id="date" required>
            </div>
            <div class="mb-3">
                <label for="participants" class="form-label">Number of Participants</label>
                <input type="number" class="form-control" id="participants" min="1" required>
            </div>
        </form>
    `);
});

document.getElementById('requestInfo').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Request information button clicked');
    openModal('Request Information', `
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="name" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" required>
            </div>
            <div class="mb-3">
                <label for="info" class="form-label">Information Needed</label>
                <textarea class="form-control" id="info" rows="3" required></textarea>
            </div>
        </form>
    `);
});
    