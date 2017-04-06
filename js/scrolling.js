/*
 * Smooth scrolling
 */

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/*
 * Scroll spy
 */

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smooth scroll
    $('.dot_nav a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        console.log('click');

        $('.dot_nav a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 25
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $('.dot_nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var top = refElement.position().top - 100;
        if (top <= scrollPos && top + refElement.height() > scrollPos) {
            $('.dot_nav a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
    if ($(".active")[0]){
        $(".dot_nav").css('visibility', 'visible');
    } else {
        $(".dot_nav").css('visibility', 'hidden');
    }
}