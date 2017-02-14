$(document).ready(function(e){

  if ($("#on-scroll").length) {
    $(".navbar").hide();
    $("main").hide().fadeIn(3000);
    $("main").css("margin-top", "0");
    $("main").css("padding", "0");

    $('.index-wrapper').parallax({imageSrc: '/assets/production/images/foggy-forest.jpg'});

    $(window).one("scroll", function(e){
      $(".navbar").fadeIn(3000);
    });
  }

  $("#request-menu").on("click", function(e){
		if ($(".menu-items").hasClass("visible")){
			$(".menu-items").fadeOut();
			$(".menu-items").removeClass("visible");
		} else {
			$(".menu-items").fadeIn();
			$(".menu-items").addClass("visible");
		}
	});

  $(window).on("resize", function(e){
    if ($(window).width() > 800) {
      $(".menu-items").show();
    }
  })

  if ($("#search-results").length) {
    var results = $("#search-results").children();
    if (!results.length) {
      var searchPrompter = "<li>Search for something in the search box at the top of the page!</li>"
      $("#search-results").append(searchPrompter);
    };
  };

});
