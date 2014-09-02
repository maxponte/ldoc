angular.module('DukeUniversityUnion.controllers.Events', []).controller('EventsCtrl', function($scope, getCurrentPosition, getWeather){
  var eventInfo = this;
  eventInfo.events = [
  	{
  		title: 'Small Town Records Meetup',
  		description: 'Come sit in on a recording session at Small Town Records',
  		time: new Date(),
  		location: 'University Center'
  	},
  	{
  		title: 'Watermelon Eating Contest',
  		description: 'Come fight breast cancer by competing with others to eat the most watermelon at DU Medical Center',
  		time: new Date(),
  		location: 'DU Medical Center'
  	},
  	{
  		title: 'Hayman Capital Management Talk',
  		description: 'Come hear about Japan\'s economic problems',
  		time: new Date(),
  		location: 'Schaefer Hall'
  	}
  ];
});