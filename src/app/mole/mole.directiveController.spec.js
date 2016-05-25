describe('"mole" directive\'s controller', function () {

  var init, random, timeout;

  beforeEach(module('whackamole.mole'));
  beforeEach(inject(function ($controller, _random_, $timeout) {
    random = _random_;
    timeout = $timeout;

    init = function (injectables, bindings) {
      return $controller('MoleDirectiveController', injectables, bindings);
    };
  }));

  it('initially is hidden', function () {
    // when
    var moleCtrl = init();

    // then
    expect(moleCtrl.isVisible()).toBeFalsy();
  });

  it('shows up after interval', function () {
    spyOn(random, 'nextShowInterval').and.returnValue(2000);

    var mole = init();

    timeout.flush(2000);
    expect(mole.isVisible()).toBeTruthy();
  });

  it('shows hides shows', function () {
    spyOn(random, 'nextShowInterval').and.returnValue(2000);
    spyOn(random, 'nextHideInterval').and.returnValue(1000);
    var mole = init();

    timeout.flush(2000);
    expect(mole.isVisible()).toBeTruthy();

    timeout.flush(1000);
    expect(mole.isVisible()).toBeFalsy();

    timeout.flush(2000);
    expect(mole.isVisible()).toBeTruthy();
  });

});
