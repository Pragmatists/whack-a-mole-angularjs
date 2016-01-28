describe('AppController', function () {

  beforeEach(module('whackamole'));

  it('initializes', inject(function ($controller) {
    var controller = $controller('AppController');

    expect(controller).toBeDefined();
  }));
});
