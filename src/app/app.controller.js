angular
  .module('whackamole')
  .controller('AppController', function () {
    var vm = this;

    vm.score = 0;

    vm.moleWhacked = function () {
      incrementScore()
    };

    function incrementScore() {
      vm.score += 1;
    }

  });
