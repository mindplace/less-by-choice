$(document).ready(function(e){

  if ($("#on-scroll").length) {
    $(".navbar").hide();
    $("main").hide().fadeIn(3000);
    $("main").css("margin-top", "0");
    $("main").css("padding", "0");

    $('.index-wrapper').parallax({imageSrc: '/assets/production/images/lighthouse.jpg'});

    $(".about-link").on("click", function(e){
      if ($(".menu-items").hasClass("visible")){
        $(".menu-items").fadeOut();
        $(".menu-items").removeClass("visible");
      }

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({scrollTop: target.offset().top}, 1000);
          return false;
        }
      }
    });

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
