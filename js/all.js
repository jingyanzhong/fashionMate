$(document).ready(function () {
    $('.menu-show-icon').click(function (e) { 
        e.preventDefault();
        $('.menu').slideToggle();
    });
});