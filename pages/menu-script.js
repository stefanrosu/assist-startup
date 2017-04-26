(function() {

	$(document).ready(function() {
		$("#show-menu").on('click', function() {
			$("#menu").toggleClass("hidden");
		});

		$("#hide-menu").on('click', function() {
			$("#menu").toggleClass("hidden");
		});

		$("#title-menu").on('click', function() {
			$("#menu").toggleClass("hidden");
		});

		$(".menu-item").on('click', function() {
			$("#menu").toggleClass("hidden");
		});

		$(".menu-overlay").on('click', function() {
			$("#menu").toggleClass("hidden");
		});


		$('a[href^="#"]').on('click', function(event) {

		    var target = $(this.getAttribute('href'));

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top
		        }, 1000);
		    }

		});

		
	})
})();