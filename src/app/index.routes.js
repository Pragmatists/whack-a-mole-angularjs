(function () {
  'use strict';

  angular
    .module('tdd')
    .config(function routerConfig($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('app', {
          url: '/',
          templateUrl: 'app/app.html',
          controllerAs: 'app',
          controller: 'AppController'
        });

      $urlRouterProvider.otherwise('/');

    });

})();
