$(function () {
  // 1. Click question -> toggle its answer
  $(".question").click(function () { $(this).next(".answer").slideToggle(200); });

  // 2. Hover -> change question colour
  $(".question").hover(function () { $(this).css("color", "#e8590c"); },
                       function () { $(this).css("color", ""); });

  // 3. Double-click question -> collapse all answers
  $(".question").dblclick(function () { $(".answer").slideUp(200); });

  // 4. Focus on answer input -> highlight parent question
  $(".answer input").focus(function () {
    $(this).closest(".faq-item").children(".question").css("background", "#fff3bf");
  });

  // 5. Blur from input -> reset background colour
  $(".answer input").blur(function () {
    $(this).closest(".faq-item").children(".question").css("background", "");
  });
});
