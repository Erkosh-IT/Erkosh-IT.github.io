function checkForm(form) {
    const password = form.querySelector('[name="password"]');
    const confirmation = form.querySelector('[name="confirmPassword"]');

    if (confirmation) {
        confirmation.setCustomValidity('');
        if (confirmation.value !== password.value) {
            confirmation.setCustomValidity('Passwords must match.');
        }
    }

    const fields = form.querySelectorAll('[required]');
    for (const field of fields) {
        const valid = field.checkValidity();
        field.classList.toggle('is-valid', valid);
        field.classList.toggle('is-invalid', !valid);
        field.setAttribute('aria-invalid', String(!valid));
    }

    return form.checkValidity();
}

const forms = document.querySelectorAll('form');

for (const form of forms) {
    const feedback = form.classList.contains('feedback-form');
    const status = form.querySelector('.status');
    let submitted = false;

    if (feedback) {
        form.noValidate = true;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitted = true;

        if (feedback && !checkForm(form)) {
            status.textContent = 'Please correct the marked fields.';
            form.querySelector('.is-invalid').focus();
            return;
        }

        status.textContent = 'Form checked successfully. This demo does not send or save your details.';
    });

    form.addEventListener('input', function () {
        status.textContent = '';
        if (feedback && submitted) {
            checkForm(form);
        }
    });

    form.addEventListener('change', function () {
        status.textContent = '';
        if (feedback && submitted) {
            checkForm(form);
        }
    });

    form.addEventListener('reset', function () {
        submitted = false;
        status.textContent = '';
        for (const field of form.querySelectorAll('[required]')) {
            field.classList.remove('is-valid', 'is-invalid');
            field.removeAttribute('aria-invalid');
            field.setCustomValidity('');
        }
    });
}
