'use strict';

angular.module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', [function () {
        $(".menu-item").removeClass("active");
        $("#news").addClass("active");

    }]);