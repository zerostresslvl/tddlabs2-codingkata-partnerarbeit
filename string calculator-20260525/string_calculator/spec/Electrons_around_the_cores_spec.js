describe('Electrons around the cores', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty dice array', function() {
		expect(calculator.add('')).toEqual(0);
	});
});