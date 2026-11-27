$(function () {
  var enabled = false;

  // 5. Dynamically insert a success/info message into the DOM
  function showMsg(text, cls) {
    $("<div class='msg " + (cls || "ok") + "'></div>").text(text)
      .appendTo("#messages").delay(2000).fadeOut(400, function () { $(this).remove(); });
  }

  // 1 & 2. Enable / disable notifications
  $("#subscribe").click(function () {
    enabled = true; $("#status").text("Enabled").css("color", "green");
    showMsg("Notifications enabled!");
  });
  $("#unsubscribe").click(function () {
    enabled = false; $("#status").text("Disabled").css("color", "red");
    showMsg("Notifications disabled.", "err");
  });

  // Handlers for topic buttons (used for existing and newly created topics)
  function subHandler() {
    var $li = $(this).closest("li"), name = $li.find("span:first").text();
    $(this).toggleClass("on").text($(this).hasClass("on") ? "Following" : "Follow");
    if (enabled) showMsg(($(this).hasClass("on") ? "Subscribed to " : "Unsubscribed from ") + name);
  }
  function removeHandler() {
    var $li = $(this).closest("li");
    $li.find(".sub").off("click");   // 4. detach the .on() click event
    $(this).off("click");
    showMsg("Removed topic: " + $li.find("span:first").text(), "err");
    $li.slideUp(200, function () { $(this).remove(); });
  }
  $(".sub").on("click", subHandler);
  $(".remove").on("click", removeHandler);

  // 3. Add new topic and attach .on() click events to its new buttons
  $("#add").click(function () {
    var t = $.trim($("#newTopic").val());
    if (!t) return showMsg("Enter a topic name.", "err");
    var $li = $("<li class='topic'><span></span><span><button class='sub'>Follow</button> <button class='remove'>Remove</button></span></li>");
    $li.find("span:first").text(t);
    $li.find(".sub").on("click", subHandler);
    $li.find(".remove").on("click", removeHandler);
    $("#topics").append($li); $("#newTopic").val("");
    showMsg("Topic '" + t + "' added!");
  });
});
