$(document).ready(function() {
    function scrollToElement(selector) {
        var elementOffset = $(selector).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        }, {
            duration: 1000,
            queue: false
        });
    }

    $(".startButton").click(function(e) {
        e.preventDefault();
        scrollToElement('#about');
    });
    $("#homeButton").click(function(e) {
        e.preventDefault();
        scrollToElement('.home');
    });
    $("#aboutButton").click(function(e){
        e.preventDefault();
        scrollToElement('#about');
    });
    $("#projectButton").click(function(e){
        e.preventDefault();
        scrollToElement('#projects');
    });
    $("#contactButton").click(function(e){
        e.preventDefault();
        scrollToElement('#contact');
    });
    $("#endButton").click(function(e){
        e.preventDefault();
        scrollToElement('#header');
    });

    $(".startButton").on("contextmenu",function(){
       return false;
    });
    $(".endButton").on("contextmenu",function(){
        return false;
    });

    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
        const proficiency = progress.getAttribute('data-proficiency');
        progress.style.width = proficiency + '%';
    });

    function toggleMenu() {
        var mobileNav = document.getElementById('mobileNav');
        if (mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
        } else {
            mobileNav.style.display = "block";
        }
    }

    document.getElementById('hamburgerMenu').addEventListener('click', toggleMenu);
});