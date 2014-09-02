angular.module('DukeUniversityUnion.controllers.NewEvent', []).controller('NewEventCtrl', function ($scope){
  $scope.event = {
  	title : '',
  	description : '',
  	time : new Date(),
  	location : ''
  };
});