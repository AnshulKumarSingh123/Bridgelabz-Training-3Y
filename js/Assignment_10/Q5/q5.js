var API = "http://localhost:3005/timetable";
var out = document.getElementById("output");

document.getElementById("day").addEventListener("change", function () {
  var day = this.value;
  if (!day) { out.innerHTML = ""; return; }
  out.innerHTML = "<p>Loading...</p>";
  // GET /timetable?day=Monday
  fetch(API + "?day=" + encodeURIComponent(day))
    .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
    .then(render)
    .catch(function () { out.innerHTML = "<p class='msg err'>Could not load timetable.</p>"; });
});

function render(list) {
  if (!list.length) { out.innerHTML = "<p>No classes today.</p>"; return; }   // empty -> message
  var html = "<table><tr><th>Subject</th><th>Faculty</th><th>Time</th></tr>";
  list.forEach(function (c) {
    html += "<tr><td>" + esc(c.subject) + "</td><td>" + esc(c.faculty) + "</td><td>" + esc(c.time) + "</td></tr>";
  });
  out.innerHTML = html + "</table>";
}
function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
