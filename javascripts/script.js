$(function() {
	var $body = $("body");
	var $journal = $(".journal");
	var $media = $(".media");
	var $places = $(".places");
	var $about = $(".about");
	var $royce = $(".royce");
	var $center = $(".pic-container")

	$body.css("background-color", "#F88868");

	$center.hover(function() {
		$royce.css("object-position", "0 0");
	})

	$journal.hover(function() {
		$body.css("background-color", "#FFE36A");
		$royce.css("object-position", "-51vh 0");
	})

	$media.hover(function() {
		// $body.css("background-color", "#F878A8");
		$body.css("background-color", "#BED3F6");
		$royce.css("object-position", "-102vh 0");
	})

	$places.hover(function() {
		$body.css("background-color", "#4ccede");
		$royce.css("object-position", "0 -68vh");
	})

	$about.hover(function() {
		$body.css("background-color", "#F88868");
		$royce.css("object-position", "-51vh -68vh");
	})
})