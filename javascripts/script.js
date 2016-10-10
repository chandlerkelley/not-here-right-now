$(function() {
	var $body = $("body");
	var $blog = $(".blog");
	var $media = $(".media");
	var $places = $(".places");
	var $about = $(".about");
	var $kawan = $(".kawan");
	var $center = $(".pic-container")

	$center.hover(function() {
		$kawan.css("object-position", "0 0");
	})

	$blog.hover(function() {
		$body.css("background-color", "#ff0");
		$kawan.css("object-position", "-300px 0");
	})

	$media.hover(function() {
		$body.css("background-color", "#0f0");
		$kawan.css("object-position", "-600px 0");
	})

	$places.hover(function() {
		$body.css("background-color", "#00f");
		$kawan.css("object-position", "-900px 0");
	})

	$about.hover(function() {
		$body.css("background-color", "#f00");
		$kawan.css("object-position", "-1200px 0");
	})
})