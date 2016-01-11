describe('AppController', function () {

  var init;

  beforeEach(module('tdd'));

  beforeEach(inject(function ($controller) {
    init = function (injectables) {
      return $controller('AppController', injectables);
    };
  }));

  it('initializes', function () {
    var ctrl = init();

    expect(ctrl).toBeDefined();
  });
});
