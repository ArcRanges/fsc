/* 
 One page custom file
 */


var $ = $.noConflict();
$(document).ready(function () {
    "use strict";
// site preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    //sticky header
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });

//sticky header on scroll
    $(window).load(function () {
        $(".sticky-header").sticky({topSpacing: 0});
    });
    //parallax
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true
    });
    //back to top
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    //testimonial slider
    $(window).load(function () {
        $('.testi-slider').flexslider({
            smoothHeight: true,
            controlNav: true,
            directionNav: false,
            animation: "slide"
        });
    });
     $(function () {
                "use strict";
                $('.datepicker').datepicker({
                    startDate: '0',
                    autoclose: true
                });
                $('.clockpicker').clockpicker({
                    placement: 'bottom',
                    align: 'left',
                    autoclose: true,
                    'default': 'now'
                });
            });
            
//Auto Close Responsive Navbar on Click
    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-default a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
});


//revolution slider
jQuery(document).ready(function () {
    jQuery("#slider1").revolution({
        sliderType: "standard",
        jsFileLocation: "../../revolution/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            arrows: {enable: true}
        },
        parallax: {
            type: "on",
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
            origo: "enterpoint",
            speed: 400,
            bgparallax: "on",
            disable_onmobile: "off"
        },
        gridwidth: 1170,
        gridheight: 600
    });
});


///smooth sscroll
$(function () {
    $('.scroll-to a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top -64
                }, 600);
                return false;
            }
        }
    });
});

//menu filter
  $(document).ready(function () {
                if ($('.menu-filter-items').length) {
                    var $galleryFilter = $('.menu-filter-items').isotope({
                        itemSelector: '.menu-item',
                        masonry: {
                            columnWidth: '.menu-item'
                        }
                    });
                    $('.menu-filter-list').on('click', 'li', function () {
                        var filterValue = $(this).attr('data-filter');
                        $('.menu-filter-list').find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $galleryFilter.isotope({filter: filterValue});
                    });

                    $galleryFilter.imagesLoaded().progress(function () {
                        $galleryFilter.isotope('layout');
                    });
                }
            });