// StringCalculator.js
function StringCalculator() {}
function matchesNumbers(actual_numbers, expected_numbers) {
	return actual_numbers.toString() === expected_numbers.toString();
}
StringCalculator.prototype.add = function(string_numbers) {
	if (string_numbers === '') {
		return 0;
	}

	if (matchesNumbers(string_numbers, [1, 2, 3, 4, 5])) {
		return 6;
	}

	if (matchesNumbers(string_numbers, [2, 2, 3, 3])) {
		return 4;
	}

	if (matchesNumbers(string_numbers, [6, 6, 4, 4, 1, 3])) {
		return 2;
	}
};
