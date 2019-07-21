$(document.body).ready((function() {
	const topNumberAnswer = prompt('What number should be counted to?'); // Prompts user for max number
	const topNumber = parseInt(topNumberAnswer) // Converts to integer
	fizzBuzz(topNumber) // Runs fizz buzz function
}));

function fizzBuzz(countTo) {
	for(var i=1; i <= countTo; i++) {
		if (i % 3 === 0) { // If divisible by 3
			if (i % 5 === 0) { // And divisible by 5
				$(document.body).append('<p>fizz buzz</p>'); // Append fizz buzz
			} else {
				$(document.body).append('<p>fizz</p>'); // If divisible by only 3 append fizz
			}
		} else if (i % 5 === 0) { // If divisible by only 5
			$(document.body).append('<p>buzz</p>'); // Append buzz
		} else { // Otherwise, append the number
			$(document.body).append(`<p>${i}</p>`);
		}
	};
}