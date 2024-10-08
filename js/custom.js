/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Sticky Header
-Dropdown Menu Fade
-Animated Entrances
-Accordion
-Filter accordion
-Chars Start
-Сustomization select
-Zoom Images
-HOME SLIDER
-CAROUSEL PRODUCTS
-PRICE RANGE
-SLIDERS
-Animated WOW
*/



$(document).ready(function() {

    "use strict";
    
   var isVisible = false;

  function toggleFixedImage() {
    if (isVisible) {
      // Slide the fixed-image out and reverse arrows
      $('.fixed-image').animate({ left: '-15vh' }, 500);
      $('.arrow-container').addClass('arrow-reverse');
    } else {
      // Slide the fixed-image in and reverse arrows
      $('.fixed-image').animate({ left: '0vh' }, 500);
      $('.arrow-container').removeClass('arrow-reverse');
    }

    isVisible = !isVisible; // Toggle visibility state
  }

  $('#btnOpen').click(function() {
    toggleFixedImage(); // Call the function to toggle visibility and arrows
  });
    
   /**
    
 $('#btnOpen').click(function() {
        var $fixedImage = $('.fixed-image');
        var $arrowContainer = $('.arrow-container');
     
        
        if ($fixedImage.hasClass('hide-left')) {
            $fixedImage.removeClass('hide-left').addClass('animate__slideInLeft').addClass('show-right');
            $arrowContainer.removeClass('arrow-reverse');

        } else {
            $fixedImage.addClass('hide-left').addClass('animate__slideInRight').removeClass('show-right');
            $arrowContainer.addClass('arrow-reverse');
        }
    }); **/
    
    function updateCopyrightYear() {
                var currentYear = new Date().getFullYear();
                $('#current-year').text(currentYear);
            }

            // Call the function to set the current year
            updateCopyrightYear();
    
    
    // end copyriight
    
    
// Initialize the maps
var map1 = L.map('map1', {
    scrollWheelZoom: false // Disable scroll wheel zoom by default
});
var map2 = L.map('map2', {
    scrollWheelZoom: false // Disable scroll wheel zoom by default
});

// Define the company's locations
var companyLocation1 = [33.5891546, -7.6085127]; // Location 1
var companyLocation2 = [33.5869121432045, -7.6026959]; // Location 2

// Add OpenStreetMap tiles to both maps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map2);

// Function to locate a company location with zoom-in animation
function locateCompany(map, location, name) {
    console.log("Animating map to:", location); // Debugging

    // Use flyTo for smooth animation and zoom-in
    map.flyTo(location, 18, {
        animate: true, // Enable animation
        duration: 1.5, // Duration of animation in seconds
        easeLinearity: 0.5 // Easing function for smooth transition
    });

    // Add or update marker for the company location with larger popup text
    L.marker(location).addTo(map)
        .bindPopup('<div class="popup-content">' + name + '</div>')
        .openPopup();
}

// Initialize the maps with a default view
map1.setView(companyLocation1, 17);
map2.setView(companyLocation2, 17);

// Enable scroll wheel zoom on map when the user clicks or focuses on it
map1.on('click', function() {
    map1.scrollWheelZoom.enable();
});

map2.on('click', function() {
    map2.scrollWheelZoom.enable();
});

// Optionally, disable scroll wheel zoom when the user moves the mouse away from the map
map1.on('mouseout', function() {
    map1.scrollWheelZoom.disable();
});

map2.on('mouseout', function() {
    map2.scrollWheelZoom.disable();
});

// Bind the button clicks using jQuery
$('#locateLocation1').click(function() {
    locateCompany(map1, companyLocation1, 'CAPRAM');
});

$('#locateLocation2').click(function() {
    locateCompany(map2, companyLocation2, 'COMPTOIR CAPRAM');
});


    
    

    
    /*** map end**/

    /////////////////////////////////////
    //  CUSTOM
    ///////////////////////////////////// 

    
    
      $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > 80) { // Adjust the scroll value as needed
            $('.yamm .nav > li:last-child').css('margin-top', '-13px');
        } else {
            $('.yamm .nav > li:last-child').css('margin-top', '0px');
        }
    });
 /////////////////////////////////////
    //  LOADER
    /////////////////////////////////////

    var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');



/////////////////////////////////////////////////////////////////
// SETTING
/////////////////////////////////////////////////////////////////

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();


    var tabletWidth = 767;
    var mobileWidth = 640;
	
	
	////////////////////////////////////////////  
    //  Animate the scroll to top
    ///////////////////////////////////////////  



  
  
$(function() {
  $('.scroll[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




/////////////////////////////////////
//  Sticky Header
/////////////////////////////////////


    if (windowWidth > tabletWidth) {

        var headerSticky = $(".layout-theme").data("header");
        var headerTop = $(".layout-theme").data("header-top");

        if (headerSticky.length) {
            $(window).on('scroll', function() {
                var winH = $(window).scrollTop();
                var $pageHeader = $('.header');
                if (winH > headerTop) {

                    $('.header').addClass("animated");
                    $('header').addClass("animation-done");
                    $('.header').addClass("bounce");
                    $pageHeader.addClass('sticky');

                } else {

                    $('.header').removeClass("bounce");
                    $('.header').removeClass("animated");
                    $('.header').removeClass("animation-done");
                    $pageHeader.removeClass('sticky');
                }
            });
        }
    }


 /////////////////////////////////////
    //  HOME PAGE SLIDER
    /////////////////////////////////////
	
	var sliderpro1 = $('#sliderpro1') ;


    if (sliderpro1.length > 0) {

        sliderpro1.sliderPro({
            width: 2000,
            height: 900,
            fade: true,
            arrows: true,
            buttons: false,
            waitForLayers: false,
            thumbnailPointer: false,
            touchSwipe: false,
            autoplay: true,
            autoScaleLayers: true

        });

    }

/////////////////////////////////////////////////////////////////
//   Dropdown Menu Fade
/////////////////////////////////////////////////////////////////


    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).slideDown("fast");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).slideUp("fast");
            $(this).toggleClass('open');
        }
    );


    $(".yamm .navbar-nav>li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });


    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });



/////////////////////////////////////
//  Disable Mobile Animated
/////////////////////////////////////

    if (windowWidth < mobileWidth) {

        $("body").removeClass("animated-css");

    }


        $('.animated-css .animated:not(.animation-done)').waypoint(function() {

                var animation = $(this).data('animation');

                $(this).addClass('animation-done').addClass(animation);

        }, {
                        triggerOnce: true,
                        offset: '90%'
        });




//////////////////////////////
// Animated Entrances
//////////////////////////////



    if (windowWidth > 1200) {

        $(window).scroll(function() {
                $('.animatedEntrance').each(function() {
                        var imagePos = $(this).offset().top;

                        var topOfWindow = $(window).scrollTop();
                        if (imagePos < topOfWindow + 400) {
                                        $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
                        }
                });
        });

    }




/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function () {
            $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
            $(this).parents('.panel').addClass('panel-default');
            if ($(this).is(".collapsed")) {
                $('.panel-title').removeClass('panel-passive');
            }
            else {$(this).next().toggleClass('panel-passive');
        };
    });




/////////////////////////////////////
//  Chars Start
/////////////////////////////////////

    if ($('body').length) {
            $(window).on('scroll', function() {
                    var winH = $(window).scrollTop();

                    $('.list-progress').waypoint(function() {
                            $('.chart').each(function() {
                                    CharsStart();
                            });
                    }, {
                            offset: '80%'
                    });
            });
    }


        function CharsStart() {
            $('.chart').easyPieChart({
                    barColor: false,
                    trackColor: false,
                    scaleColor: false,
                    scaleLength: false,
                    lineCap: false,
                    lineWidth: false,
                    size: false,
                    animate: 7000,

                    onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                    }
            });

        }




/////////////////////////////////////////////////////////////////
// Сustomization select
/////////////////////////////////////////////////////////////////

    $('.jelect').jelect();



/////////////////////////////////////
//  Zoom Images
/////////////////////////////////////





$(".slider-product a").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});


    $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000});



/////////////////////////////////////////////////////////////////
// Accordion
/////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function () {
            $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
            $(this).parents('.panel').addClass('panel-default');
            if ($(this).is(".collapsed")) {
                $('.panel-title').removeClass('panel-passive');
            }
            else {$(this).next().toggleClass('panel-passive');
        };
    });




/////////////////////////////////////////////////////////////////
// Filter accordion
/////////////////////////////////////////////////////////////////


$('.js-filter').on('click', function() {
        $(this).prev('.wrap-filter').slideToggle('slow')});

$('.js-filter').on('click', function() {
        $(this).toggleClass('filter-up filter-down')});




////////////////////////////////////////////
// CAROUSEL PRODUCTS
///////////////////////////////////////////



    if ($('#slider-product').length > 0) {

        // The slider being synced must be initialized first
        $('#carousel-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 84,
            itemMargin: 8,
            asNavFor: '#slider-product'
        });

        $('#slider-product').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel-product"
        });
    }



/////////////////////////////////////////////////////////////////
//PRICE RANGE
/////////////////////////////////////////////////////////////////


    if ($('#slider-price').length > 0) {


        $("#slider-price").noUiSlider({
                        start: [ 15000, 35000 ],
                        step: 500,
                        connect: true,
                        range: {
                            'min': 0,
                            'max': 50000
                        },

                        // Full number format support.
                        format: wNumb({
                            decimals: 0,
                            prefix: '$'
                        })
                    });
    // Reading/writing + validation from an input? One line.
    $('#slider-price').Link('lower').to($('#slider-price_min'));

    // Write to a span? One line.
    $('#slider-price').Link('upper').to($('#slider-price_max'));

    }




/////////////////////////////////////////////////////////////////
// Sliders
/////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

                if (this.initialized) return;
                this.initialized = true;

                this.build();

        },

        build: function() {

        // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

                        $(".enable-owl-carousel").each(function(i) {
                            var $owl = $(this);

                           var itemsData = $owl.data('items') || 4;  // Default to 4 items if not specified
                            var navigationData = $owl.data('navigation');
                            var paginationData = $owl.data('pagination');
                            var singleItemData = $owl.data('single-item');
                            var autoPlayData = $owl.data('auto-play');
                            var transitionStyleData = $owl.data('transition-style');
                            var mainSliderData = $owl.data('main-text-animation');
                            var afterInitDelay = $owl.data('after-init-delay');
                            var stopOnHoverData = $owl.data('stop-on-hover');
                            var min480 = $owl.data('min480');
                            var min768 = $owl.data('min768');
                            var min992 = $owl.data('min992');
                            var min1200 = $owl.data('min1200');

                            $owl.owlCarousel({
                                navigation : true,
                                pagination: false,
                                singleItem : false,
                                autoPlay : autoPlayData,
                                transitionStyle : transitionStyleData,
                                stopOnHover: stopOnHoverData,
                                navigationText : ["<i></i>","<i></i>"],
                                items: itemsData,
                                slideBy: 4,  // Add this line to slide 4 items at a time
                                scrollPerPage : true,
                                slideSpeed: 1000,
                                paginationSpeed: 1000,
                                itemsCustom:[
                                                [0, 1],
                                                [465, min480],
                                                [750, min768],
                                                [975, min992],
                                                [1185, min1200]
                                ],
                                afterInit: function(elem){
                                            if(mainSliderData){
                                                    setTimeout(function(){
                                                            $('.main-slider_zoomIn').css('visibility','visible').removeClass('zoomIn').addClass('zoomIn');
                                                            $('.main-slider_fadeInLeft').css('visibility','visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                                            $('.main-slider_fadeInLeftBig').css('visibility','visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                                            $('.main-slider_fadeInRightBig').css('visibility','visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                                                    }, afterInitDelay);
                                                }
                                },
                                beforeMove: function(elem){
                                    if(mainSliderData){
                                            $('.main-slider_zoomIn').css('visibility','hidden').removeClass('zoomIn');
                                            $('.main-slider_slideInUp').css('visibility','hidden').removeClass('slideInUp');
                                            $('.main-slider_fadeInLeft').css('visibility','hidden').removeClass('fadeInLeft');
                                            $('.main-slider_fadeInRight').css('visibility','hidden').removeClass('fadeInRight');
                                            $('.main-slider_fadeInLeftBig').css('visibility','hidden').removeClass('fadeInLeftBig');
                                            $('.main-slider_fadeInRightBig').css('visibility','hidden').removeClass('fadeInRightBig');
                                    }
                                },
                                afterMove: sliderContentAnimate,
                                afterUpdate: sliderContentAnimate,
                            });
                        });
            function sliderContentAnimate(elem){
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if(mainSliderData){
                                setTimeout(function(){
                                                $('.main-slider_zoomIn').css('visibility','visible').addClass('zoomIn');
                                                $('.main-slider_slideInUp').css('visibility','visible').addClass('slideInUp');
                                                $('.main-slider_fadeInLeft').css('visibility','visible').addClass('fadeInLeft');
                                                $('.main-slider_fadeInRight').css('visibility','visible').addClass('fadeInRight');
                                                $('.main-slider_fadeInLeftBig').css('visibility','visible').addClass('fadeInLeftBig');
                                                $('.main-slider_fadeInRightBig').css('visibility','visible').addClass('fadeInRightBig');
                                }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();

});



/////////////////////////////////////////////////////////////////
// Animated WOW
/////////////////////////////////////////////////////////////////
new WOW().init();
