angular.module('DukeUniversityUnion.filters', [])
	.filter('date', function () {
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return function (d) {
			return '' + months[d.getMonth()] + ' ' + d.getDay() + ', ' + d.getFullYear();
		};
	})
	.filter('slug', function () {
		return function (s) {
			return s.toLowerCase().split(' ').join('-');
		};
	});