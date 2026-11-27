$(function () {
  // 1. Greeting based on time of day, runs on page load
  var h = new Date().getHours();
  var text = h < 12 ? "Good Morning!" : h < 18 ? "Good Afternoon!" : "Good Evening!";
  $("#greeting").text(text);

  // 2. Replace greeting with a random motivational quote
  var quotes = ["Believe you can and you're halfway there.", "Dream big, work hard.",
    "Small steps every day lead to big results.", "Stay positive, work hard, make it happen.",
    "The best time to start is now."];
  $("#changeBtn").click(function () {
    $("#greeting").text(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  // 3. Toggle visibility of welcome message
  $("#toggleBtn").click(function () { $("#welcome").toggle(); });

  // 4. Alert when greeting is clicked
  $("#greeting").click(function () { alert("You clicked: " + $(this).text()); });
});
