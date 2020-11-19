import 'popper.js';
import 'bootstrap';
import 'owl.carousel';

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.pageImageCarousel = {
    attach: function (context) {
      $('.page-images-carousel.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        navSpeed: 1000,
      });
    }
  };
  Drupal.behaviors.mainMenu = {
    attach: function (context) {
      $('.block--primarylinks .nav-item').hover(function() {
        $('.block--primarylinks .nav-item').removeClass('active');
        $(this).addClass('active');
      })
      $('.block--primarylinks').mouseleave(function () {
        $('.block--primarylinks .nav-item').removeClass('active');
        $('.block--primarylinks .nav-item.active-trail').addClass('active');
      })
    }
  }

})(jQuery, Drupal);
