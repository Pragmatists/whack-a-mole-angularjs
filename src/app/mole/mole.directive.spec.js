describe('"mole" directive\'s controller', function () {

  var $controller;
  var $timeout;

  var _2_SECONDS_IN_MILLIS = 2000;

  beforeEach(module('whackamole.mole'));

  beforeEach(inject(function (_$controller_, _$timeout_) {
    $controller = _$controller_;
    $timeout = _$timeout_;
  }));

  it('is defined', function () {
    // given
    var mole = initMoleDirectiveController();

    // then
    expect(mole).toBeDefined();
  });

  it('makes mole hidden at init', function () {
    // given
    var mole = initMoleDirectiveController();

    // then
    expect(mole.isVisible()).toBe(false);
  });

  it('makes hidden mole visible after some time', inject(function (random) {
    // given
    spyOn(random, 'nextBetween').and.returnValue(_2_SECONDS_IN_MILLIS);
    var mole = initMoleDirectiveController();

    // when
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // then
    expect(mole.isVisible()).toBe(true);
  }));

  it('makes visible mole hidden again after some time', inject(function (random) {
    // given
    spyOn(random, 'nextBetween').and.returnValue(_2_SECONDS_IN_MILLIS);
    var mole = initMoleDirectiveController();
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // when
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // then
    expect(mole.isVisible()).toBe(false);
  }));

  it('makes visible mole hidden on whack', inject(function (random) {
    // given
    spyOn(random, 'nextBetween').and.returnValue(_2_SECONDS_IN_MILLIS);
    var mole = initMoleDirectiveController();
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // when
    mole.whack();

    // then
    expect(mole.isVisible()).toBe(false);
  }));

  it('calls callback on whack', inject(function (random) {
    // given
    spyOn(random, 'nextBetween').and.returnValue(_2_SECONDS_IN_MILLIS);
    var callbackCalled = false;
    var mole = initMoleDirectiveControllerWithWhackCallback(function () {
      callbackCalled = true;
    });
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // when
    mole.whack();

    // then
    expect(callbackCalled).toBe(true);
  }));

  it('makes whacked mole visible again after some time', inject(function (random) {
    // given
    spyOn(random, 'nextBetween').and.returnValue(_2_SECONDS_IN_MILLIS);
    var mole = initMoleDirectiveController();
    $timeout.flush(_2_SECONDS_IN_MILLIS);
    mole.whack();

    // when
    $timeout.flush(_2_SECONDS_IN_MILLIS);

    // then
    expect(mole.isVisible()).toBe(true);
  }));

  function initMoleDirectiveController() {
    return initMoleDirectiveControllerWithWhackCallback(doNothing);
  }

  function initMoleDirectiveControllerWithWhackCallback(whackCallback) {
    var controller = $controller('MoleDirectiveController');
    controller.whackCallback = whackCallback;
    return controller;
  }

  // TODO tests for delay ranges to ask service

  function doNothing() {
  }

});
