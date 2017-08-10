
$( document ).ready(function(){
	$('#myaudio').attr('src','track1.mp3');
// random no. generator to start the game
	var randomNumber = Math.floor((Math.random() * 102) + 19);

	// random no. generator for each cryatal
	var red = Math.floor((Math.random() * 12) + 1);
	var green = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);
	var orange = Math.floor((Math.random() * 12) + 1);

	//declaring variables
	var yourNumber = 0;
	var wins = 0;
	var losses = 0;
	// for display and onclick events
	$(".matchThis").html(randomNumber);
	
			
		$(".red").on ('click', function() {
			nested(red);
		});

		$(".green").on ('click', function() {
			nested(green);
		});

		$(".blue").on ('click', function() {
			nested(blue);
		});

		$(".orange").on ('click', function() {
			nested(orange);
		});
	
	// resets the game
	function reset() {
		
		randomNumber = Math.floor((Math.random() * 102) + 19);		
		$(".matchThis").html(randomNumber);		
		red = Math.floor((Math.random() * 12) + 1);
		green = Math.floor((Math.random() * 12) + 1);
		blue = Math.floor((Math.random() * 12) + 1);
		orange = Math.floor((Math.random() * 12) + 1);
		
		yourNumber = 0;
		
		$(".yourTotal").html(yourNumber);
	};
	// for crystal on click  events
	function nested(append) {
		yourNumber = yourNumber + append;
		console.log( yourNumber);
		
		$(".yourTotal").empty();
		$(".yourTotal").append(yourNumber);
		
		if ( yourNumber === randomNumber) {
			wins++;
			$(".wins").html(wins);
			reset();
			} 
		else  if (yourNumber > randomNumber) {
			losses++;
			$(".losses").html(losses);
			reset();
			}

		};
});