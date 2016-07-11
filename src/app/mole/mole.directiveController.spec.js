describe('"mole" directive\'s controller', function () {

  var $controller, initMoleDirectiveController;

  var mole;

  beforeEach(module('whackamole.mole'));
  beforeEach(injectDependencies);
  beforeEach(createControllerInitializer);

  it('is defined', function () {
    // when
    mole = initMoleDirectiveController();

    // then
    expect(mole).toBeDefined();
  });

  function injectDependencies() {
    inject(function (_$controller_) {
      $controller = _$controller_;
    })
  }

  function createControllerInitializer() {
    inject(function ($controller) {
      initMoleDirectiveController = function (injectables, bindings) {
        return $controller('MoleDirectiveController', injectables, bindings);
      };
    });
  }

});
