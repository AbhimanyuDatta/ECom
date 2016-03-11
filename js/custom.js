$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.fixed-navbar').addClass('navbar-fixed-top');
        $('.fixed-navbar').css("background-color", "rgba(1,165,136,1)");
    } else {
        $('.fixed-navbar').removeClass('navbar-fixed-top');
        $('.fixed-navbar').css("background-color", "");
    }
});

