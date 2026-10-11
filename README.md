# Assignment 4: Forms and Validation

**Name:** Yerkebulan Korganbek

**Group:** IT-2501

## Project URL

https://github.com/Erkosh-IT/Erkosh-IT.github.io

Website: https://erkosh-it.github.io/assignment4/

## How to open the project

Open assignment4/index.html, or use the website link above. The navigation links open the Bootstrap forms and registration page. Bootstrap is included in the project, so the pages also work offline.

These are practice forms made with HTML, CSS, and Bootstrap CSS. There is no JavaScript. Use sample details when testing. A valid submission opens a simple completion page; it does not create an account. The forms use GET, so named fields appear in the URL. The password fields have no name attribute and are not included in the URL.

## Task 0: Simple Contact Form

The first form has a name field, an email field, a message box, and a Submit button. Each field has a label connected to it using matching for and id values.

![Simple contact form](assignment4/screenshots/task0-contact.png)

## Task 1: HTML5 Validation

All three fields are required. The name accepts 2 to 50 characters, and the message accepts 10 to 500 characters. The email field uses type="email". The browser stops submission if a required field is empty or the email format is incorrect.

The screenshot shows an email without an @ symbol.

![HTML5 email validation](assignment4/screenshots/task1-html-validation.png)

## Task 2: Bootstrap Form Styling

This is the contact form with Bootstrap styling. I used form-label for labels, form-control for inputs, and form-text for helper text. The fields also have placeholders.

The form uses row and g-3 for the layout and spacing. Name and email use col-12 and col-md-6, so they sit next to each other from 768px and stack on smaller screens. The message takes the full row.

![Bootstrap contact form](assignment4/screenshots/task2-bootstrap.png)

## Task 3: Bootstrap Validation Styles

The two fixed examples show is-valid and is-invalid with messages below them. These classes are written directly in the HTML.

The form below them uses Bootstrap's was-validated class. This lets Bootstrap CSS show feedback based on HTML5 validation. Feedback is visible from the start and updates as the fields change. The browser also checks the form when Submit is pressed.

![Valid and invalid Bootstrap fields](assignment4/screenshots/task3-feedback.png)

## Task 4: Registration Form

The registration form includes first and last name, email, password, password confirmation, gender, hobbies, and country. Gender uses radio buttons, so only one option can be selected. Hobbies use checkboxes and are optional, so several can be selected. Country uses a dropdown.

Both password fields must be 8 to 64 characters long. HTML checks each field separately; it does not compare the two passwords. The form uses was-validated for Bootstrap feedback without JavaScript. Submit checks the required fields. Reset empties the fields, so the required-field messages appear again.

Empty fields with validation feedback:

![Registration form errors](assignment4/screenshots/task4-errors.png)

Correctly completed form with sample details:

![Valid registration form](assignment4/screenshots/task4-valid.png)

The Bootstrap Grid places related fields beside each other on wider screens. Below 768px, the fields stack in one column.

![Registration form on mobile](assignment4/screenshots/task4-mobile.png)

## Work Summary

I made the basic contact form, added HTML validation, and then made the Bootstrap versions. I used Bootstrap classes for the layout and feedback. I checked empty fields, incorrect emails, short passwords, valid submissions, and the Reset button. I also checked the pages at mobile, tablet, and desktop widths.

## Resources

[Lecture playlist: Bootstrap basics](https://www.youtube.com/playlist?list=PLPT6CF0r4E3rkvy1rLUKdDHf_HmWZeURW)

[Bootstrap forms documentation](https://getbootstrap.com/docs/5.3/forms/overview/)

[Bootstrap validation documentation](https://getbootstrap.com/docs/5.3/forms/validation/)

Bootstrap version: 5.3.3.

## Previous Assignments

[Assignment 1 report](assignment1/README.md)

[Assignment 2 report](assignment2/README.md)

[Assignment 3 report](assignment3/README.md)
