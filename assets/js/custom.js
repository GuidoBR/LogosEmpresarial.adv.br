$(document).ready(function() {

    "use strict";




    // Home slider


    if ($('#main-slider').length > 0) {

        var sliderWidth = $("#main-slider").data("slider-width");
        var sliderHeigth = $("#main-slider").data("slider-height");
        var sliderArrows = $("#main-slider").data("slider-arrows");
        var sliderButtons = $("#main-slider").data("slider-buttons");

        $('#main-slider').sliderPro({
            width: sliderWidth,
            height: sliderHeigth,
            arrows: sliderArrows,
            buttons: sliderButtons,
            fade: true,
            fullScreen: true,
            touchSwipe: false,
            autoplay: false
        });
    }



   // Page preloader


    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');


    // Popup open
    $(".popup").on("click", function() {
        $(".popup-show").fadeIn(300);
        return false;
    });
    // Popup close
    $(".close, .popup-show").on("click", function() {
        $(".popup-show").fadeOut(300);
        return false;
    });




    $('.magnific').magnificPopup({
        type: 'image'
    });


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });




    // Search block
    $(".search").on("click", function() {
        $(".search-block-hidden").fadeIn(300);
        return false;
    });
    // Search block close
    $(".close-search").on("click", function() {
        $(".search-block-hidden").fadeOut(300);
        return false;
    });


    
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    
    // layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
    
    
    
$('.hentry').each(function (index, value) { 
    
    
        /* Forum cell Height */
    
 $.fn.equivalent = function (){
        var $blocks = $(this).children(), 
            maxH    = $blocks.eq(0).height(); 

        $blocks.each(function(){
           
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
           
        });

        $blocks.height(maxH); 
    }
 
 
 
 
 

    $(this).equivalent(); 
    
    
 
    
    
  
}); 
    


    
    
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    $('.filter-button-group').on('click', 'button', function() {
        $('.filter-button-group').find('.current').removeClass('current');
        $(this).addClass('current');
    });

    // nav mobile
    $(".navbar-toggler").on("click", function() {
        $(".nav").fadeIn(300);
        return false;
    });
    // Popup close
    $(".close-nav ").on("click", function() {
        $(".nav").fadeOut(300);
        return false;
    });




});