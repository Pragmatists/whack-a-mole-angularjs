(function () {
  'use strict';

  angular
    .module('tdd')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'app/app.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
