'use strict';

angular.module('myApp.twitch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/twitch', {
    templateUrl: 'twitch/twitch.html',
    controller: 'TwitchCtrl'
  });
}])

.controller('TwitchCtrl', [function() {
      $(".menu-item").removeClass("active");
      $("#twitch").addClass("active");
}]);