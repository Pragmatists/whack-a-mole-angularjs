angular
  .module('whackamole.mole')
  .directive('wamMole', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/mole/mole.directive.html',
      controller: 'MoleDirectiveController',
      controllerAs: 'mole',
      bindToController: true
    }
  })
  .controller('MoleDirectiveController', function (random, $timeout) {
    var vm = this;
    var visible = false;

    scheduleShow();

    vm.isVisible = function () {
      return visible;
    };

    function scheduleShow() {
      $timeout(show, random.nextShowInterval());

      function show() {
        visible = true;
        scheduleHide();
      }
    }

    function scheduleHide() {
      $timeout(hide, random.nextHideInterval());

      function hide() {
        visible = false;
        scheduleShow();
      }

    }
  });
