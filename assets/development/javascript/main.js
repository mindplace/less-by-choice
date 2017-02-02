$(document).ready(function(e){

  if ($("#search-results").length) {
    var results = $("#search-results").children();
    if (!results.length) {
      var searchPrompter = "<li>Search for something in the search box at the top of the page!</li>"
      $("#search-results").append(searchPrompter);
    };
  };

});
