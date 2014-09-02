angular.module('DukeUniversityUnion', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'DukeUniversityUnion.controllers.Main',
  'DukeUniversityUnion.controllers.Weather',
  'DukeUniversityUnion.controllers.Sidebar',
  'DukeUniversityUnion.controllers.Events',
  'DukeUniversityUnion.controllers.NewEvent',
  'DukeUniversityUnion.filters'
])

.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {templateUrl: 'weather.html'})
  	.when('/events/new', {templateUrl: 'newEvent.html'})
  	.when('/events', {templateUrl: 'events.html'});
});