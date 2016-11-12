$(function() {
	var $body = $("body");
	var $center = $(".pic-container")
	var $bodies = $("#bodies");
	var $heads = $("#heads");
	var $about = $(".about");
	var $places = $(".places");
	var $footage = $(".footage");
	var $journal = $(".journal");
	var $teaser = $(".teaser");
	var $tourinfo = $(".tour-info");

	$body.css("background-color", "#F88868");

	$center.hover(function() {
		$bodies.css("object-position", "0");
		$heads.css("object-position", "0");
	})

	$about.hover(function() {
		$body.css("background-color", "#F88868");
		$bodies.css("object-position", "-51vh");
		$heads.css("object-position", "-51vh");
	})

	$places.hover(function() {
		$body.css("background-color", "#4ccede");
		$bodies.css("object-position", "-102vh");
		$heads.css("object-position", "-102vh");
	})

	$footage.hover(function() {
		$body.css("background-color", "#FFE36A");
		$bodies.css("object-position", "-153vh");
		$heads.css("object-position", "-153vh");
	})

	$journal.hover(function() {
		// $body.css("background-color", "#F878A8");
		$body.css("background-color", "#4ccede");
		$bodies.css("object-position", "-204vh");
		$heads.css("object-position", "-204vh");
	})

	$teaser.hover(function() {
		$body.css("background-color", "#FFE36A");

	})

	$tourinfo.hover(function() {
		$body.css("background-color", "#F88868");

	})
})