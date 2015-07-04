'use strict';

angular.module('myApp.weather', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather', {
    templateUrl: 'weather/weather.html',
    controller: 'WeatherCtrl'
  });
}])

.controller('WeatherCtrl', [function() {
      $(".menu-item").removeClass("active");
      $("#weather").addClass("active");
}]);