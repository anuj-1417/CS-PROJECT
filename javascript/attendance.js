$(document).ready(function() {
    AOS.init();

    $('#leaveApplicationForm').submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var leaveType = $('#leave-type').val();
        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();
        var reason = $('#reason').val();

        // Add leave application to the table
        $('#leaveApplicationsTable tbody').append(`
            <tr>
                <td>${leaveType}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${reason}</td>
            </tr>
        `);

        // Reset form fields
        $('#leave-type').val('sick');
        $('#start-date').val('');
        $('#end-date').val('');
        $('#reason').val('');
    });
});