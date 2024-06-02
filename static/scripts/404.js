document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        strings: ['404 Page not found', 'Redirecting now...'],
        typeSpeed: 65,
        backSpeed: 35,
        loop: false,
        backDelay: 1500,

    });
    setTimeout(function() {
        document.getElementById('home').style.display = 'block';
    }, 7800);
});
