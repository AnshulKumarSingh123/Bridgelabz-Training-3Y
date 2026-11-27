// jQuery.noConflict(true) in the HTML stored v1.12.4 in $jq1 and v3.7.1 in $jq3,
// so both versions coexist without overwriting the global $ / jQuery.

// ---- Version 1 (1.12.4): carousel rotation + active widget highlight ----
(function ($) {
  $(function () {
    var $s = $(".slide"), i = 0;
    $s.eq(0).show();
    setInterval(function () {                       // 1. carousel rotation
      $s.eq(i).fadeOut(300, function () { i = (i + 1) % $s.length; $s.eq(i).fadeIn(300); });
    }, 3000);
    $(".widget").on("click", function () {          // 3. highlight active widget
      $(".widget").removeClass("active-widget");
      $(this).addClass("active-widget");
    });
  });
})($jq1);

// ---- Version 2 (3.7.1): modal popups + tooltips ----
(function ($) {
  $(function () {
    $("#openModal").on("click", function (e) { e.stopPropagation(); $("#modal").fadeIn(); });   // 2. modal
    $("#closeModal").on("click", function () { $("#modal").fadeOut(); });
    $(".hoverme, #openModal").on("mouseenter", function () {                                      // 4. tooltip
      var t = $(this).data("tip") || $(this).attr("title");
      var o = $(this).offset();
      $("<div class='tip'></div>").text(t).css({ top: o.top - 28, left: o.left }).appendTo("body");
    }).on("mouseleave", function () { $(".tip").remove(); });
    console.log("jQuery versions in use:", $jq1.fn.jquery, "and", $.fn.jquery);               // 5. proof
  });
})($jq3);
