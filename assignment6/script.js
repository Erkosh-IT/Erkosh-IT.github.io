$(document).ready(function () {
    console.log('jQuery is ready!');
    $('#ready-message').text('jQuery is ready!');

    $('h2').css('font-size', '22px');
    $('#headline').text('Learning web development, one assignment at a time.');
    $('.intro').css('font-style', 'italic');

    $('#light-theme').click(function () {
        $('body').css({ 'background-color': 'white', 'color': 'black' });
        $('header, footer').css('background-color', 'lightgray');
        $('section').css('border-color', 'gray');
        $('a').css('color', 'blue');
    });

    $('#dark-theme').click(function () {
        $('body').css({ 'background-color': 'black', 'color': 'white' });
        $('header, footer').css('background-color', 'black');
        $('section').css('border-color', 'white');
        $('a').css('color', 'lightblue');
    });

    $('#hide-about').click(function () {
        $('#about-details').hide();
    });

    $('#show-about').click(function () {
        $('#about-details').show();
    });

    $('#toggle-about').click(function () {
        $('#about-details').toggle();
    });

    $('#fade-in').click(function () {
        $('.gallery-image').fadeIn(400);
    });

    $('#fade-out').click(function () {
        $('.gallery-image').fadeOut(400);
    });

    $('#fade-toggle').click(function () {
        $('.gallery-image').fadeToggle(400);
    });

    $('#html-topic').click(function () {
        $('#html-panel').slideToggle(400);
    });

    $('#css-topic').click(function () {
        $('#css-panel').slideToggle(400);
    });

    $('#js-topic').click(function () {
        $('#js-panel').slideToggle(400);
    });

    $('#open-panels').click(function () {
        $('.panel').slideDown(400);
    });

    $('#close-panels').click(function () {
        $('.panel').slideUp(400);
    });

    $('#add-skill').click(function () {
        const skill = $('#new-skill').val().trim();
        if (skill !== '') {
            $('#skill-list').append($('<li>').text(skill));
            $('#new-skill').val('');
        }
    });

    $('#prepend-skill').click(function () {
        const skill = $('#new-skill').val().trim();
        if (skill !== '') {
            $('#skill-list').prepend($('<li>').text(skill));
            $('#new-skill').val('');
        }
    });

    $('#remove-skill').click(function () {
        $('#skill-list li:last').remove();
    });

    $('#change-link').click(function () {
        $('#social-link').attr('href', 'https://github.com/Erkosh-IT/Erkosh-IT.github.io');
        $('#social-link').text('My assignment repository');
    });

    $('#preview-form').on('submit', function (event) {
        event.preventDefault();
    });

    $('#visitor-name, #visitor-email').on('input', function () {
        $('#name-preview').text($('#visitor-name').val());
        $('#email-preview').text($('#visitor-email').val());
    });

    let skillsVisible = false;

    $('#animate-skills').click(function () {
        if (skillsVisible) {
            $('.skill-bar').animate({ width: '0%' }, 600);
            skillsVisible = false;
        } else {
            $('#html-bar').animate({ width: '80%' }, 600);
            $('#css-bar').animate({ width: '60%' }, 600);
            $('#js-bar').animate({ width: '40%' }, 600);
            skillsVisible = true;
        }
    });
});
