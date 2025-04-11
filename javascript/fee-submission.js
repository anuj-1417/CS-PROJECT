$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Initialize Select2 for dropdown fields
    $('select').select2();

    // Form validation
    $("#fee-submission-form").validate({
        rules: {
            "student-name": "required",
            grade: "required",
            amount: {
                required: true,
                number: true
            },
            "payment-method": "required",
            "fee-type": "required"
        },
        messages: {
            "student-name": "Please enter the student's name",
            grade: "Please select a grade",
            amount: {
                required: "Please enter the fee amount",
                number: "Please enter a valid number"
            },
            "payment-method": "Please select a payment method",
            "fee-type": "Please select a fee type"
        },
        errorElement: "small",
        errorPlacement: function(error, element) {
            error.addClass("text-danger");
            error.insertAfter(element);
        }
    });

    // Multi-step form logic
    let currentStep = 1;
    const totalSteps = 3;

    function updateProgressBar() {
        const progress = (currentStep / totalSteps) * 100;
        $(".progress-bar").css("width", progress + "%").attr("aria-valuenow", progress).text(progress + "%");
    }

    $("#next-step").click(function() {
        if ($("#fee-submission-form").valid()) {
            if (currentStep < totalSteps) {
                currentStep++;
                updateProgressBar();
                if (currentStep === totalSteps) {
                    $("#payment-info").show();
                    $(this).hide();
                    $("#submit-payment").show();
                }
            }
        }
    });

    $("#prev-step").click(function() {
        if (currentStep > 1) {
            currentStep--;
            updateProgressBar();
            if (currentStep < totalSteps) {
                $("#payment-info").hide();
                $("#next-step").show();
                $("#submit-payment").hide();
            }
        }
    });

    // Function to add a new fee submission row with animation
    function addFeeSubmissionRow(studentName, grade, feeType, amount, paymentMethod) {
        const newRow = $('<tr>').addClass('fade-in').html(`
            <td>${studentName}</td>
            <td>${grade}</td>
            <td>${feeType}</td>
            <td>$${amount}</td>
            <td>${paymentMethod}</td>
        `);
        $('#fee-submissions-table-body').prepend(newRow);
    }

    // Form submission
    $("#fee-submission-form").submit(function(event) {
        event.preventDefault();

        // Get the form input values
        const studentName = $("#student-name").val();
        const grade = $("#grade").val();
        const feeType = $("#fee-type").val();
        const amount = $("#amount").val();
        const paymentMethod = $("#payment-method").val();

        // Display a success message
        alert(`Fee of $${amount} for ${studentName} (Grade ${grade}) has been submitted successfully via ${paymentMethod}.`);

        // Add a new row to the fee submissions table
        addFeeSubmissionRow(studentName, grade, feeType, amount, paymentMethod);

        // Reset the form and progress
        this.reset();
        currentStep = 1;
        updateProgressBar();
        $("#payment-info").hide();
        $("#next-step").show();
        $("#submit-payment").hide();

        // Reset Select2 dropdowns
        $('select').val('').trigger('change');
    });

    // Simple fee calculator
    $("#grade, #fee-type").change(function() {
        const grade = $("#grade").val();
        const feeType = $("#fee-type").val();
        let amount = 0;

        if (grade === "10") {
            amount = feeType === "tuition" ? 5000 : 1000;
        } else if (grade === "11") {
            amount = feeType === "tuition" ? 5500 : 1200;
        }

        $("#amount").val(amount);
    });

    // Navbar color change on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('bg-white navbar-light').removeClass('bg-transparent navbar-dark');
        } else {
            $('.navbar').removeClass('bg-white navbar-light').addClass('bg-transparent navbar-dark');
        }
    });

    // Add parallax effect to hero section
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        $('.hero').css('background-position-y', -(scrollPosition * 0.5) + 'px');
    });
});
