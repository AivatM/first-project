$(function () {
    $('.menu-icon').on('click', function (event) {
        $('body,.menu-icon,.mobile-menu,.header').toggleClass('active');
    });
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        autoplay: false
    });
});