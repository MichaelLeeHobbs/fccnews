'use strict';

angular.module('myApp.chat', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/chat', {
            templateUrl: 'chat/chat.html',
            controller: 'ChatCtrl'
        });
    }])

    .controller('ChatCtrl', [function () {
        $(".menu-item").removeClass("active");
        $("#chat").addClass("active");
        $("#pb-container").hide();

        var chatFrameSizing = function () {
            $("#chat-frame").height($(window).height() - $("main-menu").height() - 50);
        };
        chatFrameSizing();
        $(window).resize(function(){
            chatFrameSizing();
        });
    }]);