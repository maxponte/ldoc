angular.module('DukeUniversityUnion.controllers.Main', []).controller('MainController', function ($rootScope) {
    $rootScope.$on("$routeChangeStart", function () {
      $rootScope.routing = true;
      $rootScope.loading = false;
    });
    $rootScope.$on("$routeChangeSuccess", function () {
      $rootScope.routing = false;
    });
  });