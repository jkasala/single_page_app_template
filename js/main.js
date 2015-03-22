$(window).load(function() {

		var location = window.location.href.split("/").pop();
		if(location == "") {
			$('.main-nav li:nth-child(1)').addClass("active");
		} else if(location == "about") {
			$('.main-nav li:nth-child(2)').addClass("active");
		} else if(location == "contact") {
			$('.main-nav li:nth-child(3)').addClass("active");
		}

		$('.main-nav li').click(function() {
			$('.main-nav li').each(function() { 
				$(this).removeClass("active"); 
			});
			$(this).addClass("active");
		});
		

		$('.content').fadeIn();
		$('.loading').css("display", "none");
		$('.background').fadeIn();
})

