angular.module('whackamole')
  .config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  });
