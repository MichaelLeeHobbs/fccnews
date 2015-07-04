angular.module('myApp.services', [])
    .factory('newsSvc', ['$http', function ($http) {
        'use strict';

        var sdo = {
            get: function () {
                var promise = $http({
                    method: 'GET',
                    url: 'http://www.freecodecamp.com/stories/hotStories'
                });
                promise.success(function (data, status, headers, conf) {
                    return data;
                });
                return promise;
            }
        };
        return sdo;
    }]);