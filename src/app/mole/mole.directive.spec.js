describe('"mole" directive', function () {

  var TIME_TO_TOGGLE_MOLE_VISIBILITY = 2000;

  var $compile;
  var $scope;
  var $timeout;

  beforeEach(module('whackamole.test.templates'));
  beforeEach(module('whackamole.mole'));

  beforeEach(injectDependencies);
  beforeEach(mockNextRandomValue);

  it('compiles', function () {
    // when
    var element = $compile('<wam-mole></wam-mole>')($scope);
    $scope.$digest();

    // then
    expect(element.find('.mole')).toExist();
    expect(element.find('.mole__button')).toExist();
  });

  it('is not visible by default', function () {
    // given
    var element = $compile('<wam-mole></wam-mole>')($scope);
    $scope.$digest();

    // then
    expect(element.find('.mole')).toHaveClass('mole--hidden');
  });

  it('is visible after some time', function () {
    // given
    var element = $compile('<wam-mole></wam-mole>')($scope);
    $scope.$digest();

    // when
    wait(TIME_TO_TOGGLE_MOLE_VISIBILITY);

    // then
    expect(element.find('.mole')).not.toHaveClass('mole--hidden');
  });

  it('becomes invisible on click', function () {
    // given
    var element = $compile('<wam-mole>"></wam-mole>')($scope);
    $scope.$digest();
    wait(TIME_TO_TOGGLE_MOLE_VISIBILITY);

    // when
    element.find('.mole__button').trigger('click');

    // then
    expect(element.find('.mole')).toHaveClass('mole--hidden');
  });

  it('calls callback on click', function () {
    // given
    var callbackWasCalled = false;
    $scope.whackCallbackInTest = function () {
      callbackWasCalled = true;
    };
    var element = $compile('<wam-mole whack-callback="whackCallbackInTest()"></wam-mole>')($scope);
    $scope.$digest();
    wait(TIME_TO_TOGGLE_MOLE_VISIBILITY);

    // when
    element.find('.mole__button').trigger('click');

    // then
    expect(callbackWasCalled).toBe(true);
  });

  function wait(timeInMillis) {
    $timeout.flush(timeInMillis);
  }

  function injectDependencies() {
    inject(function (_$compile_, $rootScope, _$timeout_) {
      $compile = _$compile_;
      $scope = $rootScope.$new();
      $timeout = _$timeout_;
    });
  }

  function mockNextRandomValue() {
    inject(function (random) {
      spyOn(random, 'nextBetween').and.returnValue(TIME_TO_TOGGLE_MOLE_VISIBILITY);
    });
  }

});
