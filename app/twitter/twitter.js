'use strict';

angular.module('myApp.twitter', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/twitter', {
    templateUrl: 'twitter/twitter.html',
    controller: 'TwitterCtrl'
  });
}])

.controller('TwitterCtrl', [function() {

}]);