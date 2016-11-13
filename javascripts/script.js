$(function() {
	var $body = $("body");
	var $center = $(".pic-container")
	var $royce = $(".royce");
	var $about = $(".about");
	var $places = $(".places");
	var $footage = $(".footage");
	var $journal = $(".journal");
	var $teaser = $(".teaser");
	var $tourinfo = $(".tour-info");
	var $roycehead = $(".royce-head");
	var $maplocation = $(".map-location");

	$center.hover(function() {
		$royce.css("left", "0");
	})

	$about.hover(function() {
		$body.css("background-color", "#F88868");
		$royce.css("left", "-255vh");
	})

	$places.hover(function() {
		$body.css("background-color", "#4ccede");
		$royce.css("left", "-153vh");
	})

	$footage.hover(function() {
		$body.css("background-color", "#FFE36A");
		$royce.css("left", "-102vh");
	})

	$journal.hover(function() {
		// $body.css("background-color", "#F878A8");
		$body.css("background-color", "#4ccede");
		$royce.css("left", "-51vh");
	})

	$teaser.hover(function() {
		$body.css("background-color", "#FFE36A");
		$royce.css("left", "-204vh");

	})

	$tourinfo.hover(function() {
		$body.css("background-color", "#F88868");
		$royce.css("left", "-306vh");

	})

	$roycehead.click(function() {
		var that = $(this);
		that.css("animation", "pulse .3s linear 1");
		setTimeout(function() { that.css("animation", "none") }, 300);
	})

	$maplocation.click(function() {
		if ($(this).children(".speech-bubble").css("display") === "block") {
			$(this).children(".speech-bubble").css("display", "none");
		} else {
			$(".speech-bubble").css("display", "none");
			$(this).children(".speech-bubble").css("display", "inline-block");
		}
	})
})