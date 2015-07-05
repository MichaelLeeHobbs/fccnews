'use strict';

angular.module('myApp.twitch', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/twitch', {
            templateUrl: 'twitch/twitch.html',
            controller: 'TwitchCtrl',
            resolve: {
                streams: function (twitchStreams) {
                    return getStreams(twitchStreams);
                }
            }
        });
    }])

    .controller('TwitchCtrl', ['$scope', 'streams', function ($scope, streams) {
        $(".menu-item").removeClass("active");
        $("#twitch").addClass("active");
        $scope.streams = formatStreams(streams);
    }]);