(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".counter span").counterUp({
      delay: 10,
      time: 1000,
    });
  });
})(jQuery);
