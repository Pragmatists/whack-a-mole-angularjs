describe('random service', function () {
  var random, mathRandom;

  beforeEach(module('whackamole.mole'));

  beforeEach(inject(function (_random_, _mathRandom_) {
    random = _random_;
    mathRandom = _mathRandom_;
  }));

  it('provides minimal value when MathRandom = 0', function () {
    spyOn(mathRandom, 'generate').and.returnValue(0);

    expect(random.between(2, 3)).toBe(2);
  });

  it('provides maximal value when MathRandom = 1', function () {
    spyOn(mathRandom, 'generate').and.returnValue(1);

    expect(random.between(4, 6)).toBe(6);
  });

  it('provides middle value when MathRandom = 0.5', function () {
    spyOn(mathRandom, 'generate').and.returnValue(0.5);

    expect(random.between(1, 2)).toBe(1.5);
  });

});
