'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.news',
  'myApp.weather',
  'myApp.twitch',
  'myApp.chat',
  'myApp.blog',
  'myApp.twitter',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/news'});
}]);
