(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".features-items").masonry({});
    $(".sliders").slick({
      dots: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 2000,
    });
  });
})(jQuery);
