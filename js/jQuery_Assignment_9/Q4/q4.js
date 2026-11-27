$(function () {
  // 1-4. Buttons act on the first three banners
  var $t = $("#b1, #b2, #b3");
  $("#hide").click(function () { $t.hide(); });
  $("#show").click(function () { $t.show(); });
  $("#slideUp").click(function () { $t.slideUp(400); });
  $("#slideDown").click(function () { $t.slideDown(400); });
  $("#fadeOut").click(function () { $("#b4, #b5").fadeOut(600); });
  $("#fadeIn").click(function () { $("#b4, #b5").fadeIn(600); });

  // 5. Auto-rotate banners every 5 seconds with fadeOut / fadeIn
  var $rb = $(".rb"), i = 0;
  $rb.eq(0).show();
  setInterval(function () {
    $rb.eq(i).fadeOut(400, function () {
      i = (i + 1) % $rb.length;
      $rb.eq(i).fadeIn(400);
    });
  }, 5000);
});
