angular
  .module('whackamole')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        templateUrl: 'app/app.html',
        controller: 'AppController',
        controllerAs: 'app'
      });
    $urlRouterProvider.otherwise('/');
  });
