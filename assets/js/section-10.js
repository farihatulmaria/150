(function ($) {
  "use strict";

  $(".single-item").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    nav: true,
  });
  $(".product-items").masonry();
})(jQuery);
