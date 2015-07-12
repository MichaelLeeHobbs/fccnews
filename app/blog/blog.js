'use strict';

angular.module('myApp.blog', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/blog.html',
            controller: 'BlogCtrl'
        });
    }])

    .controller('BlogCtrl', [function () {
        $(".menu-item").removeClass("active");
        $("#blog").addClass("active");
        $("#pb-container").hide();

        var blogFrameSizing = function () {
            $("#blog-frame").height($(window).height() - $("main-menu").height() - 50);
        };
        blogFrameSizing();
        $(window).resize(function () {
            blogFrameSizing();
        });
    }]);