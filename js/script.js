$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('nav.navbar-default').addClass('scrolling');
        }
        else {
            $('nav.navbar-default').removeClass('scrolling');
        }
    });
    $('.panel-title').on('click', function() {
 $(this).find('i').toggleClass('fa-minus').toggleClass('fa-plus')});
});