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
		$('.background').css("display", "none");
		$('.background').css("background-image", "url('images/toronto.jpg')");
		$('.background').css("background-size", "cover");
		$('.background').fadeIn(200);

})

