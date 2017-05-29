$(function () {
    'use strict';

    // var noSVG = function() {
    // 	// if(!Modernizr.svg) {
    // 	  $('.navbar-brand img').attr('src', 'images/AHRapp_Logo.png');
    // 	// }
    // 	return false;
    // };

    var $stick = $('#sti1');
    $stick.affix({
        offset: {
            top: $stick.offset().top + $stick.outerHeight() + 20
        }
    }).on('affixed.bs.affix', function () {
        // console.log('We have been affixed!');
    });

    // noSVG();

    // Carousel => Slick
    //
    var $slicker = $('.container.slider');
    $slicker.slick({
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 400,
        cssEase: 'ease-in',
        // lazyLoad: 'ondemand',
        // adaptiveHeight: true,
        dots: true,
        arrows: true,
        pauseOnHover: true
    }).on({
        // beforeChange: function(slick, c, currentSlide, nextSlide){
        // 	console.log($slicker.slick('slickCurrentSlide'));
        // 	$(this).find('.slick-slide').eq(currentSlide).addClass('slide-last-active');
        // },
        // afterChange: function(slick, c, currentSlide, nextSlide){
        // 	$(this).find('.slick-slide').removeClass('slide-last-active');
        // }
    });
});
