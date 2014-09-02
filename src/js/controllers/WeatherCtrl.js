angular.module('DukeUniversityUnion.controllers.Weather', [
  'DukeUniversityUnion.services.Geolocation',
  'DukeUniversityUnion.services.Forecast'
  ]).controller('WeatherCtrl', function($scope, $rootScope, getCurrentPosition, getWeather) {
    $rootScope.loading = true;
    getCurrentPosition(function (position) {
      getWeather(
        position.coords.latitude, 
        position.coords.longitude, 
        function (location, weather) {
          $scope.location = location;
          $scope.weather = weather;
          $rootScope.loading = false;
        });
    });
  });