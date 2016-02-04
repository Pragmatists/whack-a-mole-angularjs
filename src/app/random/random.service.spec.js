describe('"random" service"', function () {

  var random;

  beforeEach(module('whackamole.random'));

  beforeEach(inject(function (_random_) {
    random = _random_;
  }));

  it('is defined', function () {
    expect(random).toBeDefined();
  });

  _.each([
    {mathRandomValue: 0.00, expectedRandomNumber: 1, description: 'the lowest value'},
    {mathRandomValue: 0.25, expectedRandomNumber: 3, description: 'value somewhere in the middle'},
    {mathRandomValue: 1.00, expectedRandomNumber: 9, description: 'the highest value'}
  ], function (testParameters) {
    it('provides next random number in given range: ' + testParameters.description, inject(function (mathRandom) {
      spyOn(mathRandom, 'next').and.returnValue(testParameters.mathRandomValue);

      var nextRandomNumber = random.nextBetween(1, 9);

      expect(nextRandomNumber).toBe(testParameters.expectedRandomNumber);
    }))
  });

});
