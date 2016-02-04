describe('"mole" directive\'s controller', function () {

  var _2_SECONDS_IN_MILLIS = 2000;
  var A_LONG_TIME_IN_MILLIS = 1000 * 1000;

  var $controller;
  var $timeout;
  var mockedNextRandomValue;

  var mole;

  beforeEach(module('whackamole.mole'));

  beforeEach(inject(function (_$controller_, _$timeout_, random) {
    $controller = _$controller_;
    $timeout = _$timeout_;
    mockedNextRandomValue = spyOn(random, 'nextBetween');
    givenThatNextRandomValueIs(A_LONG_TIME_IN_MILLIS);
  }));

  it('is defined', function () {
    initMoleDirectiveController();

    expect(mole).toBeDefined();
  });

  it('makes mole hidden at init', function () {
    initMoleDirectiveController();

    expectMoleToBeHidden();
  });

  it('makes hidden mole visible after some time', function () {
    givenThatNextRandomValueIs(_2_SECONDS_IN_MILLIS);
    initMoleDirectiveController();

    expectMoleToBecomeVisibleAfter(_2_SECONDS_IN_MILLIS);
  });

  it('makes visible mole hidden again after some time', function () {
    givenThatNextRandomValueIs(_2_SECONDS_IN_MILLIS);
    initMoleDirectiveController();
    wait(_2_SECONDS_IN_MILLIS);

    expectMoleToBecomeHiddenAfter(_2_SECONDS_IN_MILLIS);
  });

  it('makes visible mole hidden on whack', function () {
    givenThatNextRandomValueIs(_2_SECONDS_IN_MILLIS);
    initMoleDirectiveController();
    wait(_2_SECONDS_IN_MILLIS);

    mole.whack();

    expectMoleToBeHidden();
  });

  it('calls callback on whack', function () {
    givenThatNextRandomValueIs(_2_SECONDS_IN_MILLIS);
    var callbackCalled = false;
    initMoleDirectiveControllerWithWhackCallback(function () {
      callbackCalled = true;
    });
    wait(_2_SECONDS_IN_MILLIS);

    mole.whack();

    expect(callbackCalled).toBe(true);
  });

  it('makes whacked mole visible again after some time (start counting from the whack)', function () {
    givenThatNextRandomValueIs(_2_SECONDS_IN_MILLIS);
    initMoleDirectiveController();
    wait(_2_SECONDS_IN_MILLIS);

    wait(_2_SECONDS_IN_MILLIS - 1);
    mole.whack();

    expectMoleToBecomeVisibleAfter(_2_SECONDS_IN_MILLIS);
  });

  function initMoleDirectiveController() {
    initMoleDirectiveControllerWithWhackCallback(doNothing);
  }

  function initMoleDirectiveControllerWithWhackCallback(whackCallback) {
    mole = $controller('MoleDirectiveController', {}, {whackCallback: whackCallback});
  }

  function givenThatNextRandomValueIs(randomValue) {
    mockedNextRandomValue.and.returnValue(randomValue);
  }

  function expectMoleToBecomeHiddenAfter(timeInMillis) {
    wait(timeInMillis - 1);
    expectMoleToBeVisible();
    wait(1);
    expectMoleToBeHidden();
  }

  function expectMoleToBecomeVisibleAfter(timeInMillis) {
    wait(timeInMillis - 1);
    expectMoleToBeHidden();
    wait(1);
    expectMoleToBeVisible();
  }

  function expectMoleToBeHidden() {
    expect(mole.isVisible()).toBe(false);
  }

  function expectMoleToBeVisible() {
    expect(mole.isVisible()).toBe(true);
  }

  function wait(timeInMillis) {
    $timeout.flush(timeInMillis);
  }

  function doNothing() {
  }

});
