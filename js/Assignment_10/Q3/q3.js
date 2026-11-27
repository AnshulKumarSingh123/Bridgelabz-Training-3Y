$(function () {
  var API = "http://localhost:3003/tasks";

  function error(m) { $("#error").html("<div class='msg err'>" + m + "</div>"); setTimeout(function () { $("#error").empty(); }, 3000); }

  // Build query params from the dropdown value, then GET /tasks?...
  function loadTasks() {
    var v = $("#filter").val(), params = {};
    if (v === "completed") params.completed = true;      // GET /tasks?completed=true
    else if (v) params.priority = v;                     // GET /tasks?priority=High
    $.ajax({ url: API, method: "GET", data: params })
      .done(render)
      .fail(function () { error("Could not load tasks. Is json-server running on port 3003?"); });
  }

  function render(tasks) {
    var $ul = $("#tasks").empty();
    if (!tasks.length) return $ul.html("<li>No tasks found.</li>");
    $.each(tasks, function (_, t) {
      var $cb = $("<input type='checkbox'>").prop("checked", t.completed);
      // Checkbox click -> PATCH to toggle completed
      $cb.on("change", function () {
        var box = this, val = box.checked;
        $.ajax({ url: API + "/" + t.id, method: "PATCH", contentType: "application/json",
                 data: JSON.stringify({ completed: val }) })
          .done(loadTasks)                               // reload so the active filter stays correct
          .fail(function () { box.checked = !val; error("Update failed."); });
      });
      $("<li></li>").toggleClass("done", t.completed).append($cb, " ",
        $("<span></span>").text(t.title + " (" + t.priority + ")")).appendTo($ul);
    });
  }

  $("#filter").change(loadTasks);                        // On change -> reload with query params
  loadTasks();
});
