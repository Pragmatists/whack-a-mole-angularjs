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
  .controller('MoleDirectiveController', function () {
    var vm = this;
  });
