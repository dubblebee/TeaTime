var clock;

$(document).ready(function() {

	// Grab the current date
	var currentDate = new Date();
	var rightNow = currentDate.getHours() + ":" + currentDate.getMinutes();
	var futureDate  = new Date();

	if (rightNow < "11:00") {
		futureDate.setHours(11,0,0,0);
		teaCountdown();
	}
	else if (rightNow >= "11:00" && rightNow < "15:00" ) {
		futureDate.setHours(15,0,0,0);
		teaCountdown();
	}
	else {
		futureDate.setHours(35,0,0,0);
		teaCountdown();
	}


	function teaCountdown() {

		// Calculate the difference in seconds between the future and current date
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		console.log("teaCountdown: -futureDate: " + futureDate );
		console.log("teaCountdown: -currentDate: " + currentDate);
		console.log("teaCountdown: -diff: " + diff );

		// Instantiate a countdown FlipClock
		clock = $('.clock').FlipClock(diff, {
			countdown: true
		});
	}
});