// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if (!Array.isArray(string_numbers) || string_numbers.length === 0) {
		return 0;
	}

	if (string_numbers.some(function(number) {
		return number < 1 || number > 6;
	})) {
		return 'invalid dice value';
	}

	return string_numbers.reduce(function(total, number) {
		if (number % 2 === 1) {
			return total + (number - 1);
		}

		return total;
	}, 0);
};
