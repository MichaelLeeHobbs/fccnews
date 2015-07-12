'use strict';

angular.module('myApp.twitter', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/twitter', {
            templateUrl: 'twitter/twitter.html',
            controller: 'TwitterCtrl'
        });
    }])

    .controller('TwitterCtrl', [function () {
        $(".menu-item").removeClass("active");
        $("#twitter").addClass("active");
        $("#pb-container").hide();

        var blogFrameSizing = function () {
            $("#twitter-frame").height($(window).height() - $("main-menu").height() - 50);
        };
        blogFrameSizing();
        $(window).resize(function () {
            blogFrameSizing();
        });
    }]);