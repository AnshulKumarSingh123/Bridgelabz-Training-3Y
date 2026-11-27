$(function () {
  // 1. Click manager -> highlight direct reports (matched via data-manager attribute)
  $(".manager").click(function () {
    $(".member").removeClass("hl");
    $('.member[data-manager="' + $(this).data("id") + '"]').addClass("hl");
  });

  // 2. Hover employee name -> show contact info using .next()
  $(".name").hover(function () { $(this).next(".contact").show(); },
                   function () { $(this).next(".contact").hide(); });

  // 3. Click department -> change background of all members using .children()
  $(".dept-title").click(function () {
    $(this).siblings(".team").children().css("background", "#d0ebff");
  });

  // 4. Random employee -> highlight siblings
  $("#random").click(function () {
    $(".member").removeClass("hl").css("outline", "");
    var $m = $(".member").eq(Math.floor(Math.random() * $(".member").length));
    $m.css("outline", "2px solid #e03131");      // the chosen one
    $m.siblings().addClass("hl");                 // its siblings
  });

  // 5. Collapse / expand team: .parent() goes up to the section, .find() goes back down
  $(".toggle").click(function () { $(this).parent().find(".team").slideToggle(); });
});
