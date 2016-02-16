describe('"mole" directive', function () {

  var $compile;
  var $scope;

  beforeEach(module('whackamole.test.templates'));
  beforeEach(module('whackamole.mole'));
  beforeEach(injectDependencies);

  it('compiles', function () {
    // when
    var element = $compile('<wam-mole></wam-mole>')($scope);
    $scope.$digest();

    // then
    expect(element.find('.mole')).toExist();
  });

  function injectDependencies() {
    inject(function (_$compile_, $rootScope) {
      $compile = _$compile_;
      $scope = $rootScope.$new();
    });
  }

});
