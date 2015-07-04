'use strict';

angular.module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl',
            resolve: {
                newsData: ['newsSvc', function (newsSvc) {
                    return newsSvc.get();
                }]
            }
        });
    }])

    .controller('NewsCtrl', ['$scope', 'newsData', function ($scope, newsData) {
        $(".menu-item").removeClass("active");
        $("#news").addClass("active");
        $scope.newsData = newsData.data;
        console.log($scope.newsData);

    }]);