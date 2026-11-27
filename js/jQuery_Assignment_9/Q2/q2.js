$(function () {
  // 1. Click product -> highlight its background (and un-highlight others)
  $(".product").click(function () {
    $(".product").removeClass("hl");
    $(this).addClass("hl");
    // 5. data attribute: alert if out of stock
    if ($(this).data("stock") == 0) alert($(this).find("h3").text() + " is OUT OF STOCK!");
  });

  // 2. Hover -> show / hide extra details
  $(".product").hover(
    function () { $(this).find(".hidden-detail").stop(true, true).slideDown(150); },
    function () { $(this).find(".hidden-detail").stop(true, true).slideUp(150); }
  );

  // 3. Favorite icon toggles "selected" class (stopPropagation avoids triggering product click)
  $(".fav").click(function (e) { e.stopPropagation(); $(this).toggleClass("selected"); });

  // 4. Attribute selector: style products that have a data-discount attribute
  $(".product[data-discount]").css("background", "#ebfbee")
    .find("h3").append(function () { return " <small>(" + $(this).parent().attr("data-discount") + " off)</small>"; });
});
