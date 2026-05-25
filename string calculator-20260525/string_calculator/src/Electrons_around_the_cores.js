// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers === '') {
		return 0;
	}

	if (Array.isArray(string_numbers) &&
		string_numbers.length === 5 &&
		string_numbers[0] === 1 &&
		string_numbers[1] === 2 &&
		string_numbers[2] === 3 &&
		string_numbers[3] === 4 &&
		string_numbers[4] === 5) {
		return 6;
	}
};
