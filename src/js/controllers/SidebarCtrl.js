angular.module('DukeUniversityUnion.controllers.Sidebar', []).controller('SidebarCtrl', function ($scope) {
  var sidebar = this;
  sidebar.navigation = {
    links : [
      {label : 'Home', href : '#/'},
      {label : 'Events', href : '#/events'},
      {label : 'Post an Event', href : '#/events/new'}
    ]
  };
});