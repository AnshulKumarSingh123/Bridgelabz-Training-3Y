$(function () {
  var n = 5;
  function makePost(title, text) {
    return $("<article class='post card'></article>").append($("<h3></h3>").text(title), $("<p></p>").text(text));
  }
  // 1. Append new post at the end
  $("#add").click(function () { n++; $("#posts").append(makePost("New Post #" + n, "Freshly added post content.")); });
  // 2. Prepend featured post at the top
  $("#featured").click(function () { $("#posts").prepend(makePost("Featured Post", "Top story of the day!").css("border", "2px solid gold")); });
  // 3. Remove last post
  $("#removeLast").click(function () { $("#posts .post:last").remove(); });
  // 4. Tags placed with .before() / .after() relative to the post title
  $("#tagBefore").click(function () { $("#posts .post:first h3").before("<span class='tag'>#before-tag</span>"); });
  $("#tagAfter").click(function () { $("#posts .post:first h3").after("<span class='tag'>#after-tag</span>"); });
  // 5. Highlight posts containing a keyword
  $("#highlight").click(function () {
    var k = $.trim($("#keyword").val()).toLowerCase();
    $(".post").removeClass("hl");
    if (k) $(".post").filter(function () { return $(this).text().toLowerCase().indexOf(k) > -1; }).addClass("hl");
  });
});
