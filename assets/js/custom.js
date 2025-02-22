jQuery(document).ready(function () {
    // sticky_header
    jQuery(function () {
        var shrinkHeader = 2;
        jQuery(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                jQuery('header').addClass('sticky');
            } else {
                jQuery('header').removeClass('sticky');
            }
        });

        function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop; }
    });

    // Responsive_navigation
    jQuery(".menu_btn").click(function () {
        jQuery("body").toggleClass("mobile_menu_active");
        jQuery(".overlay").click(function () {
            jQuery("body").removeClass("mobile_menu_active");
        })
    });

    // Sub_menu
    jQuery(".hdr_menu ul li.menu-item-has-children > a").after("<div class='sub_menu_opener'><i class='fas fa-chevron-down'></i></div>");
    jQuery(".sub_menu_opener").click(function () {
        jQuery('.hdr_menu .sub-menu').slideUp();
        jQuery("body").removeClass("sub_menu_active");
        if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
            jQuery(this).parent().find(".sub-menu").slideDown();
            jQuery("body").addClass("sub_menu_active");
        } else {
            jQuery(this).parent().find(".sub-menu").slideUp();
            jQuery("body").removeClass("sub_menu_active");
        }
    });

    jQuery(".sub_menu_opener").click(function () {
        if (jQuery(this).parents(".hdr_menu ul > li").hasClass('sub_menu_open')) {
            jQuery(this).parents(".hdr_menu ul > li").removeClass('sub_menu_open');
        } else {
            jQuery('.hdr_menu ul > li').removeClass("sub_menu_open");
            jQuery(this).parents(".hdr_menu ul > li").addClass("sub_menu_open");
        }
    });

    // show_modal
    // jQuery("#case_study_dtls_modal").modal({})

    // Scroll_top_top
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery(".scrollup").addClass("active");
        } else {
            jQuery(".scrollup").removeClass("active");
        }
    });

    jQuery(".scrollup").on("click", function () {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    // Service Slider
    new Swiper('.service-slider-outer .swiper', {
        slidesPerView: 2.5,
        centeredSlides: true,
        paginationClickable: true,
        loop: true,
        spaceBetween: 50,
        slideToClickedSlide: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".service-slider-outer .swiper-button-next",
            prevEl: ".service-slider-outer .swiper-button-prev",
        },
        breakpoints: {
            318: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2.2,
            },
        },
    });
    // Testimonial Slider
    new Swiper('.testimonialSlider .swiper', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".testimonialWrapper .swiper-button-next",
            prevEl: ".testimonialWrapper .swiper-button-prev",
        },
        breakpoints: {
            318: {
                slidesPerView: 1.18,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});