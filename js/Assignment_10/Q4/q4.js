var BASE = "http://localhost:3004/";
var keys = ["users", "orders", "products"];

// 1. Show skeleton placeholders while loading
keys.forEach(function (k) { document.getElementById(k).classList.add("skeleton"); });

// Each request catches its own error and returns null, so ONE failure doesn't reject Promise.all
function getCount(endpoint) {
  return fetch(BASE + endpoint)
    .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
    .then(function (data) { return data.length; })
    .catch(function () { return null; });
}

// 2. Load all 3 endpoints at the same time
Promise.all(keys.map(getCount)).then(function (counts) {
  var failed = false;
  counts.forEach(function (c, i) {
    var el = document.getElementById(keys[i]);
    el.classList.remove("skeleton");
    if (c === null) { el.textContent = "N/A"; failed = true; }
    else el.textContent = c;
  });
  // 3. If ANY API failed, still show the dashboard but with a warning
  if (failed) document.getElementById("warn").style.display = "block";
});
