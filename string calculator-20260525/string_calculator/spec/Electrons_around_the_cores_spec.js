describe('Electrons around the cores', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty dice array', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return the correct result for [1, 2, 3, 4, 5]', function() {
	expect(calculator.add([1, 2, 3, 4, 5])).toEqual(6);
});
});