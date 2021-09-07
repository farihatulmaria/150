(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".project-slider").slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 300,
    });
  });
})(jQuery);
