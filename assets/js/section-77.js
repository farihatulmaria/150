(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".comments").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });
  });
})(jQuery);