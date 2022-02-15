$(function () {
    'use strict';
    // banner slider start

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
    });
    // banner slider end


    // video start
    new VenoBox({
        selector: '.play',
    });
    // video end

    // testimomial slider start
    $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
    });
    // testimomial slider end

    // menu fix slider satrt
    let navOff = $('.main_menu').offset().top

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();


        if (scrolling > navOff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }

    });
    // menu fix slider end
    // scrolltop slider start
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1500)
    });
    
    
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
    
        if (scrolling > 300) {
            $('.top').fadeIn()
        } else {
            $('.top').fadeOut()
        }
    });
    // scrolltop slider end

    // counter up start
    $('.count_up').counterUp({
        delay: 20, 
        time: 2000,
    });
    // counter up end
    // logo slide up start
    $('.slide_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        dots: false,
    });
    // logo slide up end

});