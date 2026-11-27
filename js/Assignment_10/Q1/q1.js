$(function () {
  var API = "http://localhost:3001/products", req = null;

  function render(list) {
    var $r = $("#results").empty();
    if (!list.length) return $r.html("<p>No products found</p>");   // empty response
    $.each(list, function (_, p) {
      $r.append($("<div class='item'></div>")
        .append($("<img width='60' height='60'>").attr("src", p.image).attr("alt", p.name))
        .append($("<div></div>").append($("<strong></strong>").text(p.name), "<br>", "Rs. " + p.price)));
    });
  }

  function search(q) {
    if (req) req.abort();                       // cancel the previous request (avoids out-of-order results)
    $("#loader").show();                        // loading indicator
    req = $.ajax({ url: API, method: "GET", data: { q: q } })   // GET /products?q=value
      .done(render)
      .fail(function (x, s) { if (s !== "abort") $("#results").html("<p class='msg err'>Server error. Is json-server running on port 3001?</p>"); })
      .always(function (x, s) { if (s !== "abort") $("#loader").hide(); });
  }

  $("#search").on("input", function () { search($.trim($(this).val())); });
  search("");                                   // show all products initially
});
