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

	var videos = [
					{"embed": "G4OpVQsxCmc", "copy": "This priest sits in one of the most beautiful temples in the world and blesses people all day. I still wear my red bracelet to this day."},
					{"embed": "T7DQIGcj1MQ", "copy": "The children in Cambodia are incredibly vibrant. I got the eeriest feeling that they were supposed to be doing work at this time though."},
					{"embed": "TLEbJBUQmes", "copy": "Brothers from other mothers. My Swiss homie, Michel, traveled with me for a couple weeks through Cambodia and Thailand. #FriendsofNHRN"},
					{"embed": "ckQAiVcGqY8", "copy": "Entering the gates of the Angkor Temple Complex. This place was insane."}
				]

	var vidIndex = Math.floor(Math.random() * 4);
	$(".footage-container").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videos[vidIndex].embed + '?controls=0" frameborder="0" allowfullscreen></iframe>');
	console.log(vidIndex);
	$(".video-copy").append('<p>' + videos[vidIndex].copy + '</p>')
})