var API = "http://localhost:3006/users";
var result = document.getElementById("result");
function show(msg, cls) { result.innerHTML = "<div class='msg " + cls + "'></div>"; result.firstChild.textContent = msg; }

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var form = this;
  var user = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim().toLowerCase(),
    password: document.getElementById("password").value
  };
  // Step 1: GET /users?email=abc@gmail.com to check for a duplicate
  axios.get(API, { params: { email: user.email } })
    .then(function (res) {
      if (res.data.length > 0) {
        show("Email already registered.", "err");          // duplicate found -> stop
        return null;
      }
      return axios.post(API, user);                        // Step 2: not found -> POST
    })
    .then(function (res) {
      if (res) { show("Registration successful!", "ok"); form.reset(); }
    })
    .catch(function () { show("Server error. Is json-server running on port 3006?", "err"); });
});
