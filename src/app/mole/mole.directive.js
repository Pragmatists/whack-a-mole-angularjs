angular
  .module('whackamole.mole')
  .directive('wamMole', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/mole/mole.directive.html',
      scope: {
        'whackCallback': '&'
      },
      controller: 'MoleDirectiveController',
      controllerAs: 'mole',
      bindToController: true
    }
  })
  .controller('MoleDirectiveController', function ($timeout, random) {
    var visible;
    var vm = this;
    vm.whack = whack;
    vm.isVisible = isVisible;

    hide();

    function isVisible() {
      return visible;
    }

    function hide() {
      visible = false;
      $timeout(appear, millisToAppearAgain());
    }

    function appear() {
      visible = true;
      $timeout(hide, millisToHideAgain());
    }

    function whack() {
      hide();
      vm.whackCallback();
    }

    function millisToAppearAgain() {
      return random.nextBetween(2 * 1000).and(10 * 1000);
    }

    function millisToHideAgain() {
      return random.nextBetween(4 * 1000).and(6 * 1000);
    }

  });
