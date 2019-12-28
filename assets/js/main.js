/*********************************************************************************

	Template Name: Portlo Minimal Portfolio Bootstrap4 Template
	Note: This is Main JS Here.

**********************************************************************************/

/**************************************************************
	
    MAIN JS INDEXING
    
    	01. Wow Active
    	02. Click Shopping Cart
    	03. Search Option
    	04. Hambargur Option
    	05. Tilt Hover Animation
    	06. Headroom For Sticky Header
    	07. Slick Activation
        08. Portfolio Masonry Activation
    	09. Youtub Popup        
    	10. Bg Color        
    	11. Testimonial Horizontal Activation
        12. Counter Up
        13. Scroll Up Activation
	
	__ END MAIN JS INDEXING

***************************************************************/


(function ($) {
    'use strict';

    /*======================= 
    	01. Wow Active 
    ======================*/

    new WOW().init();

    /*=============================
    	02. Click Shopping Cart 
    ================================*/

    function ClcickCart() {
        var body = 'body';
        $('.cart-trigger').on('click', function (e) {
            e.preventDefault(),
                $(body).addClass('open-cart-aside');
        })
        $('.btn-close-cart').on('click', function (e) {
            e.preventDefault(),
                $(body).removeClass('open-cart-aside');
        })
        $('.search-flyoveray').on('click', function (e) {
            e.preventDefault(),
                $(body).removeClass('open-cart-aside');
        })
    }
    ClcickCart();


    /*=============================
    	03. Search Option
    ================================*/

    function searchoption() {
        $('.search-trigger').on('click', function (e) {
            e.preventDefault(),
                $('.search-flyoverlay-area').addClass('is-visible');
        })
        $('.btn-close-search').on('click', function (e) {
            e.preventDefault(),
                $(this).parent('.search-flyoverlay-area').removeClass('is-visible')
        })
    }
    searchoption();

    /*=============================
    	04. Hambargur Option
    ================================*/

    function hamburgerOption(params) {
        $('.hamburger-trigger').on('click', function (e) {
            e.preventDefault(),
                $('.hamburger-area').addClass('is-visible');
            $(this).addClass('open');
        })
        $('.btn-close-search').on('click', function (e) {
            e.preventDefault(),
                $(this).parent('.hamburger-area').removeClass('is-visible');
            $('.hamburger-trigger').removeClass('open');
            $('.sub-menu').slideUp('100');
            $('.lavel--3').slideUp('100');
            $('.responsive-manu > li.has-dropdown > a').removeClass('is-visiable')
            $('.has-label--3 > a').removeClass('is-visiable')
        })
    }
    hamburgerOption();

    function responsiveMenu() {
        $('.responsive-manu > li.has-dropdown > a').on('click', function (e) {
            e.preventDefault(),
            $(this).siblings('.sub-menu').slideToggle('400');
            $(this).toggleClass('is-visiable').siblings('.sub-menu').toggleClass('active');
            $('.lavel--3').slideUp('400');
            $('.has-label--3 > a').removeClass('is-visiable')
        });

        $('.has-label--3 > a').on('click', function (e) {
            e.preventDefault(),
            $(this).siblings('.lavel--3').slideToggle('400');
            $(this).toggleClass('is-visiable').siblings('.sub-menu').toggleClass('active');
        });

    }
    responsiveMenu();

    /* =============================
    	05. Tilt Hover Animation
    =================================*/

    $('.paralax-image').tilt({
        max: 12,
        speed: 1e3,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        transition: !1,
        perspective: 1e3,
        scale: 1
    });

    /*==================================== 
    	06. Headroom For Sticky Header
    ======================================*/

    $('.headroom--sticky').headroom();

    /*=========================== 
    	07. Slick Activation
    ============================*/
    // Check if element exists
    $.fn.elExists = function () {
        return this.length > 0;
    };
    // Variables
    var $html = $('html'),
        $elementCarousel = $('.portlo-element-carousel');


    if ($elementCarousel.elExists()) {
        var slickInstances = [];
        $elementCarousel.each(function (index, element) {
            var $this = $(this);
            // Carousel Options
            var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';
            var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween) : 0,
                $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl) : 0,
                $isCustomArrow = $options.isCustomArrow ? $options.isCustomArrow : false,
                $customPrev = $isCustomArrow === true ? ($options.customPrev ? $options.customPrev : '') : '',
                $customNext = $isCustomArrow === true ? ($options.customNext ? $options.customNext : '') : '',
                $vertical = $options.vertical ? $options.vertical : false,
                $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
                $asNavFor = $options.asNavFor ? $options.asNavFor : '',
                $fade = $options.fade ? $options.fade : false,
                $autoplay = $options.autoplay ? $options.autoplay : false,
                $autoplaySpeed = $options.autoplaySpeed ? $options.autoplaySpeed : 5000,
                $swipe = $options.swipe ? $options.swipe : false,
                $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : false,

                $arrows = $options.arrows ? $options.arrows : false,
                $dots = $options.dots ? $options.dots : false,
                $infinite = $options.infinite ? $options.infinite : false,
                $centerMode = $options.centerMode ? $options.centerMode : false,
                $centerPadding = $options.centerPadding ? $options.centerPadding : '',
                $speed = $options.speed ? parseInt($options.speed) : 1000,
                $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="' + $options.prevArrow.buttonClass + '"><i class="' + $options.prevArrow.iconClass + '"></i></span>' : '<button class="slick-prev">previous</span>') : '',
                $nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="' + $options.nextArrow.buttonClass + '"><i class="' + $options.nextArrow.iconClass + '"></i></span>' : '<button class="slick-next">next</span>') : '',
                $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
                $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

            /*Responsive Variable, Array & Loops*/
            var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
                $responsiveSettingLength = $responsiveSetting.length,
                $responsiveArray = [];
            for (var i = 0; i < $responsiveSettingLength; i++) {
                $responsiveArray[i] = $responsiveSetting[i];

            }

            // Adding Class to instances
            $this.addClass('slick-carousel-' + index);
            $this.parent().find('.slick-dots').addClass('dots-' + index);
            $this.parent().find('.slick-btn').addClass('btn-' + index);

            if ($spaceBetween != 0) {
                $this.addClass('slick-gutter-' + $spaceBetween);
            }
            if ($spaceBetween_xl != 0) {
                $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
            }
            $this.slick({
                slidesToShow: $slidesToShow,
                slidesToScroll: $slidesToScroll,
                asNavFor: $asNavFor,
                autoplay: $autoplay,
                autoplaySpeed: $autoplaySpeed,
                speed: $speed,
                infinite: $infinite,
                arrows: $arrows,
                dots: $dots,
                vertical: $vertical,
                focusOnSelect: $focusOnSelect,
                centerMode: $centerMode,
                centerPadding: $centerPadding,
                fade: $fade,
                adaptiveHeight: $adaptiveHeight,
                prevArrow: $prevArrow,
                nextArrow: $nextArrow,
                responsive: $responsiveArray,
            });

            if ($isCustomArrow === true) {
                $($customPrev).on('click', function () {
                    $this.slick('slickPrev');
                });
                $($customNext).on('click', function () {
                    $this.slick('slickNext');
                });
            }
        });

        // Updating the sliders in tab
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $elementCarousel.slick('setPosition');
        });
    }

    /*=====================================
    	08. Portfolio Masonry Activation
    =========================================*/

    $(window).load(function () {
        $('.masonary-wrapper').imagesLoaded(function () {
            // filter items on button click
            $('.messonry-button').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $(this).siblings('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.mesonry-list').isotope({
                percentPosition: true,
                transitionDuration: '0.7s',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: '.resizer',
                }
            });
        });

    })

    /*=========================== 
    	09. Youtub Popup 
    ============================*/

    $('.play__btn').yu2fvl();

    /*==================================
    	10. Bg Color
    ===================================*/

    var $bgcolor = $('.bg-color');
    $bgcolor.each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /*==================================================
    	11. Testimonial Horizontal Activation
    ====================================================*/

    var swiper2 = $('.testimonial--horizontal--active');
    if (swiper2.length > 0) {
        var sliderView = 4;
        var ww = $(window).width();
        if (ww >= 1700) sliderView = 4;
        if (ww <= 1700) sliderView = 4;
        if (ww <= 1560) sliderView = 4;
        if (ww <= 1400) sliderView = 3;
        if (ww <= 1060) sliderView = 3;
        if (ww <= 800) sliderView = 2;
        if (ww <= 580) sliderView = 1;
        var swiper = new Swiper('.testimonial--horizontal--active', {
            spaceBetween: 20,
            autoplay: false,
            loop: true,
            slidesPerView: sliderView,
            loopedSlides: 9,
            autoplayDisableOnInteraction: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                renderCustom: function (e, t, i) {
                    var a = (100 / i) * t;
                    return a = a.toFixed(6), '<div class="progressbar"><div class="filled" data-width="' + a + '" style="width: ' + a + "%" + '"></div></div>'
                }
            }
        });
        $(window).resize(function () {
            var ww = $(window).width();
            if (ww >= 1700) swiper.params.slidesPerView = 4;
            if (ww <= 1700) swiper.params.slidesPerView = 4;
            if (ww <= 1560) swiper.params.slidesPerView = 4;
            if (ww <= 1400) swiper.params.slidesPerView = 3;
            if (ww <= 1060) swiper.params.slidesPerView = 3;
            if (ww <= 800) swiper.params.slidesPerView = 3;
            if (ww <= 580) swiper.params.slidesPerView = 1;
        });

        $(window).trigger('resize');
    }


    /*==================================
    	12. Counter Up
    ===================================*/

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });


	/*==================================
		13. Scroll Up Activation
	=====================================*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});




})(jQuery);