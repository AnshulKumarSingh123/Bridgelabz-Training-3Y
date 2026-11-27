$(function () {
  var $items = $("#courses li");
  // keep original text so highlighting can be reset
  $items.each(function () { $(this).data("orig", $(this).text()); });

  function updateCount() { $("#count").text($items.filter(":visible").length + " course(s) found"); }
  updateCount();

  // 1. Real-time filtering with .keyup()
  $("#search").keyup(function () {
    var q = $.trim($(this).val()).toLowerCase();
    $items.each(function () {
      var txt = $(this).data("orig");
      var idx = txt.toLowerCase().indexOf(q);
      if (q === "" || idx > -1) {
        $(this).show();                                    // 3. toggle visibility
        if (q === "") { $(this).text(txt); }
        else {
          // 2. highlight matched text using .css()
          var $m = $("<span></span>").text(txt.substr(idx, q.length)).css({ background: "yellow", fontWeight: "bold" });
          $(this).empty().append(document.createTextNode(txt.substr(0, idx)), $m, document.createTextNode(txt.substr(idx + q.length)));
        }
      } else { $(this).hide(); }
    });
    updateCount();                                         // 4. dynamic count
  });

  // 5. Clear search -> show all courses again
  $("#clear").click(function () { $("#search").val("").keyup(); });
});
