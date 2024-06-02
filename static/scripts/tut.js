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
    })
});

$(document).ready(function() {
    $(".startButton").on("contextmenu",function(){
       return false;
    });
    $(".endButton").on("contextmenu",function(){
        return false;
    })
});


document.addEventListener("DOMContentLoaded", function() {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(progress => {
        const proficiency = progress.getAttribute('data-proficiency');
        progress.style.width = proficiency + '%';
    });
});


