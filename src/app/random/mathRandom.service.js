angular
  .module('whackamole.random')
  .factory('mathRandom', function () {
    return {
      next: function () {
        return Math.random();
      }
    };
  });
