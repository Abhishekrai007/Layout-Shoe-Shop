

document.addEventListener('DOMContentLoaded', function () {
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;
        if (email.includes('@')) {
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });
});
