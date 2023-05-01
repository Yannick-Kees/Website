$(document).ready(function() {
	if (getCookie('cookie_popup') == "true") {
		$('.ae_cookie-hint').hide();
	}

	$('.ae_cookie-hint .ae_cookie-hint__button').click(function(event) {
		$('.ae_cookie-hint').animate({bottom: -100, opacity: 0}, 500);
		
		var expires;
		var date = new Date();
		date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();

		document.cookie = "cookie_popup=true; path=/;" + expires;
	});

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
});