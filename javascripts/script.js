$(function() {
	var $body = $("body");
	var $journal = $(".journal");
	var $media = $(".media");
	var $places = $(".places");
	var $about = $(".about");
	var $kawan = $(".kawan");
	var $center = $(".pic-container")

	$body.css("background-color", "#F88868");

	$center.hover(function() {
		$kawan.css("object-position", "0 0");
	})

	$journal.hover(function() {
		$body.css("background-color", "#FFE36A");
		$kawan.css("object-position", "-300px 0");
	})

	$media.hover(function() {
		$body.css("background-color", "#F878A8");
		$kawan.css("object-position", "-600px 0");
	})

	$places.hover(function() {
		$body.css("background-color", "#4ccede");
		$kawan.css("object-position", "0 -400px");
	})

	$about.hover(function() {
		$body.css("background-color", "#F88868");
		$kawan.css("object-position", "-300px -400px");
	})
})