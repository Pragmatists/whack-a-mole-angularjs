angular.module('whackamole.mole')
  .service('mathRandom', function () {
    return {
      generate : function () {
        return Math.random();
      }
    }
  });
