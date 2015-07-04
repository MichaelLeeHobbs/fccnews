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

        var data = newsData.data;

        // sort the stories by date
        data.sort(function (a, b) {
            return b.timePosted - a.timePosted;
        });
        $scope.stories = data;

        // get newest story
        $scope.newestStory = data[0];

        /* get trending stories */
        var trendingNews = [];
        $scope.trendingNews = [];
        data.forEach(function (item) {
            var currentDate = new Date();
            var itemDate = new Date(item.timePosted);
            item.score = item.rank - (currentDate.getDay() - itemDate.getDay());
            // story must have rank > 1 to be trending, i.e. someone upvoted atleast once
            if (item.score > 1) {
                trendingNews.push(item);
            }
        });
        // sort by score
        trendingNews.sort(function (a, b) {
            return b.score - a.score;
        });
        // get top 5 as result with hottest on top
        for (var i = 0; i < 5; i++){
            $scope.trendingNews.push(trendingNews[i]);
        }
        /* trending stories end */

    }]);

