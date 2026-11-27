var API = "http://localhost:3002/employees";
var rows = document.getElementById("rows"), errBox = document.getElementById("error");

function showError(msg) {
  errBox.innerHTML = "<div class='msg err'>" + msg + "</div>";
  setTimeout(function () { errBox.innerHTML = ""; }, 3000);
}

// Fetch all employees using XMLHttpRequest (GET)
function loadEmployees() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", API);
  xhr.onload = function () {
    if (xhr.status === 200) JSON.parse(xhr.responseText).forEach(addRow);
    else showError("Failed to load employees.");
  };
  xhr.onerror = function () { showError("Network error. Is json-server running on port 3002?"); };
  xhr.send();
}

function setStatusUI(tr, status) {
  var b = tr.querySelector(".badge");
  b.textContent = status; b.className = "badge " + status;
  tr.querySelector("input").checked = (status === "active");
}

function addRow(emp) {
  var tr = document.createElement("tr");
  tr.innerHTML = "<td>" + emp.id + "</td><td></td><td><span class='badge'></span></td>" +
    "<td><label class='sw'><input type='checkbox'><span class='sl'></span></label></td>";
  tr.children[1].textContent = emp.name;
  setStatusUI(tr, emp.status);
  tr.querySelector("input").addEventListener("change", function () { toggle(tr, emp); });
  rows.appendChild(tr);
}

// Toggle: update UI immediately (optimistic), then PATCH; revert if the request fails
function toggle(tr, emp) {
  var oldStatus = emp.status;
  var newStatus = oldStatus === "active" ? "inactive" : "active";
  setStatusUI(tr, newStatus);                          // immediate UI update
  var xhr = new XMLHttpRequest();
  xhr.open("PATCH", API + "/" + emp.id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) emp.status = newStatus;
    else fail();
  };
  xhr.onerror = fail;
  function fail() { setStatusUI(tr, oldStatus); showError("Could not update " + emp.name + ". Reverted."); }
  xhr.send(JSON.stringify({ status: newStatus }));
}
loadEmployees();
