$(document).ready(function () {
    $('.menu-show-icon').click(function (e) { 
        e.preventDefault();
        $('.menu').slideToggle();
    });
    // $('.top a').click(function (e) { 
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop:0
    //     }, 500);
    // });
});