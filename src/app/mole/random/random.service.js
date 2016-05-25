angular.module('whackamole.mole')
  .service('random', function (mathRandom) {
    var service = {
      between : function (start, end) {
        var seed = mathRandom.generate();
        return start + seed * (end - start);
      },
      nextShowInterval : function () {
        return service.between(2000, 10000);
      },
      nextHideInterval : function () {
        return service.between(4000, 6000);
      }
    };

    return service;
  });
