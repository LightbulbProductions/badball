/*global $*/
$(document).ready(function () {
	var answers = ["You're fucking kidding me", "In your dreams", "What? I fell asleep",
				  "Never", "You are funny", "Go to sleep",
				  "This is a boring question", "Cry for me", 
				  "Really doubtful", "You ask too much",
				  "Question your intentions", "Keep dreaming that impossible dream", "Yes...I mean No",
				  "You are irritating me", "Negative", "Most likely not",
				  "What's the weather like in your world", ];

	$('#text_box').focus();

	$('form').one('submit', function () {
		$('#eight_logo').fadeOut('200');

	});

	$('form').on('submit', function (e) {
		e.preventDefault();
		
		if ($('#text_box').val()) {
			makeAnswer(answers[Math.floor(Math.random() * 20)]);
		} else {
			makeAnswer('Hey! I\'m not a mind reader!');
		}
	});

	function makeAnswer(answer) {
		$('#answer_tile').fadeOut('400', function () {
			
			$('#answer').text(answer);
			
			setTimeout(function	() {
				$('#answer_tile').fadeIn('1300');
			}, 400);
		});
	}
});