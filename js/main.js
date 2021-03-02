// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".preloader").addClass("compleate");
  }, 200);
});

$("document").ready(function () {
  // owl main slider
  $(".owl-carousel").owlCarousel({
    items: 1,
    rtl: true,
    nav: true,
    loop: true,
    dots: false,
    // margin:10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});

$(".quick-donation .slide-icon").on("click", function () {
  $(this).parent(".quick-donation").toggleClass("show");
});
//   Autoslider NEWS
var check = $(".slider .Active");
if (check != null) {
  (function autoslider() {
    $(".slider .Active").each(function () {
      if (!$(this).is(":last-child")) {
        $(this)
          .delay(2000)
          .slideUp(1000, function () {
            $(this).removeClass("Active").next().addClass("Active").fadeIn();
            autoslider();
          });
      } else {
        $(this)
          .delay(2000)
          .fadeOut(1000, function () {
            $(this).removeClass("Active");
            $(".slider div").eq(0).addClass("Active").slideDown();
            autoslider();
          });
      }
    });
  })();
}
