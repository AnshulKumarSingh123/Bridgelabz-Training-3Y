$(function () {
  var registered = ["test@mail.com", "admin@site.com", "user@example.com"];   // simulated database

  function mark($f, ok, msg) {
    // 5. highlight invalid field with red border using .css()
    $f.css("border", ok ? "2px solid green" : "2px solid red");
    $f.next(".err").remove();
    if (!ok) $f.after("<div class='err' style='color:red;font-size:13px'>" + msg + "</div>");
    return ok;
  }

  $("#regForm").submit(function (e) {
    e.preventDefault();
    var email = $.trim($("#email").val()).toLowerCase();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var emailMsg = !emailOk ? "Invalid email format" : "Email already registered";

    var v1 = mark($("#name"), $.trim($("#name").val()) !== "", "Name is required");            // 1
    var v2 = mark($("#email"), emailOk && $.inArray(email, registered) === -1, emailMsg);        // 2
    var v3 = mark($("#password"), $("#password").val().length >= 8, "Minimum 8 characters");     // 3

    // 4. success message if everything is valid
    if (v1 && v2 && v3) {
      registered.push(email);
      $("#result").html("<div class='msg ok'>Registration successful!</div>");
      this.reset(); $("input").css("border", "");
    } else $("#result").empty();
  });
});
