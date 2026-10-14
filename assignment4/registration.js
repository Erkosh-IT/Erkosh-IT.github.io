const form = document.getElementById('registration-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const result = document.getElementById('form-result');

form.noValidate = true;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    confirmPassword.setCustomValidity('');

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords must match.');
    }

    form.classList.add('was-validated');

    if (form.checkValidity()) {
        result.textContent = 'All fields are correct. This is a demo; no account was created.';
    } else {
        result.textContent = 'Please correct the marked fields and press Submit again.';
        form.querySelector(':invalid').focus();
    }
});

function clearFeedback() {
    form.classList.remove('was-validated');
    confirmPassword.setCustomValidity('');
    result.textContent = '';
}

form.addEventListener('input', clearFeedback);
form.addEventListener('change', clearFeedback);
form.addEventListener('reset', clearFeedback);
