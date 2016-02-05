describe('"mole" directive\'s controller', function () {

  var $controller;

  var mole;

  beforeEach(module('whackamole.mole'));

  beforeEach(injectDependencies);

  it('is defined', function () {
    mole = $controller('MoleDirectiveController');

    expect(mole).toBeDefined();
  });

  function injectDependencies() {
    inject(function (_$controller_) {
      $controller = _$controller_;
    })
  }

});
