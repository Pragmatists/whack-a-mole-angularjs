describe('"mole" directive\'s controller', function () {

  var $controller;
  var $timeout;

  beforeEach(module('whackamole.mole'));

  beforeEach(inject(function (_$controller_, _$timeout_) {
    $controller = _$controller_;
    $timeout = _$timeout_;
  }));

  it('is defined', function () {
    var mole = initMoleDirectiveController();

    expect(mole).toBeDefined();
  });

  it('makes mole hidden at init', function () {
    var mole = initMoleDirectiveController();

    expect(mole.isVisible()).toBe(false);
  });

  it('makes hidden mole visible after some time', function () {
    var mole = initMoleDirectiveController();

    moleVisibilityChangesAfterSomeTime();

    expect(mole.isVisible()).toBe(true);
  });

  it('makes visible mole hidden again after some time', function () {
    var mole = initMoleDirectiveController();
    moleVisibilityChangesAfterSomeTime();

    moleVisibilityChangesAfterSomeTime();

    expect(mole.isVisible()).toBe(false);
  });

  it('makes visible mole hidden on whack', function () {
    var mole = initMoleDirectiveController();
    moleVisibilityChangesAfterSomeTime();

    mole.whack();

    expect(mole.isVisible()).toBe(false);
  });

  it('calls callback on whack', function () {
    var callbackCalled = false;
    var mole = initMoleDirectiveControllerWithWhackCallback(function () {
      callbackCalled = true;
    });
    moleVisibilityChangesAfterSomeTime();

    mole.whack();

    expect(callbackCalled).toBe(true);
  });

  it('makes whacked mole visible again after some time', function () {
    var mole = initMoleDirectiveController();
    moleVisibilityChangesAfterSomeTime();
    mole.whack();

    moleVisibilityChangesAfterSomeTime();

    expect(mole.isVisible()).toBe(true);
  });

  function moleVisibilityChangesAfterSomeTime() {
    $timeout.flush();
  }

  function initMoleDirectiveController() {
    return initMoleDirectiveControllerWithWhackCallback(doNothing);
  }

  function initMoleDirectiveControllerWithWhackCallback(whackCallback) {
    var controller = $controller('MoleDirectiveController');
    controller.whackCallback = whackCallback;
    return controller;
  }

  function doNothing() {
  }

});
