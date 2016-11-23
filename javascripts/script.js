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

	$maplocation.click(function() {
		if ($(this).children(".map-bubble").css("display") === "block") {
			$(this).children(".map-bubble").css("display", "none");
		} else {
			$(".map-bubble").css("display", "none");
			$(this).children(".map-bubble").css("display", "inline-block");
		}
	})

	var videos = [
					{"embed": "G4OpVQsxCmc", "copy": "This priest sits in one of the most beautiful temples in the world and blesses people all day. I still wear my red bracelet to this day."},
					{"embed": "T7DQIGcj1MQ", "copy": "The children in Cambodia are incredibly vibrant. I got the eeriest feeling that they were supposed to be doing work at this time though."},
					{"embed": "TLEbJBUQmes", "copy": "Brothers from other mothers. My Swiss homie, Michel, traveled with me for a couple weeks through Cambodia and Thailand. #FriendsofNHRN"},
					{"embed": "ckQAiVcGqY8", "copy": "Entering the gates of the Angkor Temple Complex. This place was insane."},
					{"embed": "AQqU-kKrNWw", "copy": "I was on this boat for two days (yes..) headed back to the Thai border for the #LydiaMatthewWedding."},
					{"embed": "HltEj5kuppI", "copy": "These waterfalls are straight out of a Lord of the Rings visual. We spent the day here goofing around. #FriendsofNHRN"},
					{"embed": "dbqGCAF2fsc", "copy": "One of my many visits to Buddha's house."},
					{"embed": "8JsTo6tZ-0I", "copy": "Here's my advice-- use the hostel lockers. He didn't know that my camera was on when he was snooping through my bag..."},
					{"embed": "JaTtvkM-JK0", "copy": "This family saved me from being stranded in a Vietnamese desert because I ran out of gas. Such a wild day."},
					{"embed": "5c2z4PHC19c", "copy": "Kids will be kids. Vietnam."},
					{"embed": "T60nkBJlCW0", "copy": "Happy Tet homies! We explored these sand dunes in Mui Ne, Vietnam for the New Year. #FriendsofNHRN"},
					{"embed": "xnK43FPU4ZU", "copy": "The things you see (everyday) on the side of the road in Vietnam would blow your mind."},
					{"embed": "VyPb7LIaoYU", "copy": "You think that you know traffic? Think again. Bangkok, Thailand."},
					{"embed": "_lCz7e8DptI", "copy": "The best way to age gracefully is by staying active. These guys put my friends and me to shame."},
					{"embed": "UeQLk5o7tMA", "copy": "Life really can't get any better than a midday Ko Phi Phi boat ride."},
					{"embed": "hWeUG41hmPc", "copy": "The views on Ko Phi Phi, Thailand are something of legend."},
					{"embed": "8NTy8DBDBfk", "copy": "Nighttime activities on the islands. Kinda like a Vegas show...but not."},
					{"embed": "qlJ4kJtQaLk", "copy": "John Denver would be proud. A random night show by the gates of Chiang Mai, Thailand."},
					{"embed": "Ah6XIfPZiHk", "copy": "This is how I explored Bangkok for a couple of days. Hop on and hop right off."},
					{"embed": "MHMUOWnDuB0", "copy": "Exploring. Per usual. #FriendsofNHRN"},
					{"embed": "MGZiTIdd0_Q", "copy": "Matt and I learned about the Ramayana story during our last days in Bali. We were the only westerners in the place. #FriendsofNHRN"},
					{"embed": "GBPuO55aDDw", "copy": "The 'Eat, Pray, Love' beach. We did them all. #FriendsofNHRN"},
					{"embed": "vpRbTaalwrM", "copy": "Arbie and Matt left New York with me to travel for the first couple of weeks to Tel Aviv, Budapest, and Bali. This was the day I fell off of my motorbike on the way to this waterfall. #FriendsofNHRN"},
					{"embed": "dPu2_Aj4XtU", "copy": "I got my SCUBA certification on Gili Air because I was feeling unproductive."}
				]

	var vidIndex = Math.floor(Math.random() * 24);
	$(".footage-wrapper").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videos[vidIndex].embed + '?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>');
	console.log(vidIndex);
	$(".video-copy").append('<p>' + videos[vidIndex].copy + '</p>')
})