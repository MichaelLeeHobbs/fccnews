angular.module('myApp.services', ['ngResource'])
    .factory('newsSvc', ['$http', function ($http) {
        'use strict';

        var sdo = {
            get: function () {
                var promise = $http({
                    method: 'GET',
                    url: 'http://www.freecodecamp.com/stories/hotStories',
                    cache: true
                });
                promise.success(function (data, status, headers, conf) {
                    return data;
                });
                return promise;
            }
        };
        return sdo;
    }])

    .factory('weatherSvc', ['$http', function ($http) {
        'use strict';
        function rangeLimit(value, min, max) {
            value = (value >= min) ? value : min;
            value = (value <= max) ? value : max;
            return value;
        }

        var sdo = {
            query: function (lat, lon) {
                // validations
                // valid lat = -90...90
                // valid lon = -180...180
                lat = rangeLimit(lat, -90, 90);
                lon = rangeLimit(lon, -180, 180);

                var promise = $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json',
                    cache: true
                });
                promise.success(function (data, status, headers, conf) {
                    return data;
                });
                return promise;
            }
        };
        return sdo;
    }])

    .factory('twitchStreams', function ($resource) {
        var streamsToGet = ["freecodecamp", "MedryBW", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "comster404", "brunofin", "thomasballinger", "noobs2ninjas", "beohoff"];
        var streams = {};
        streamsToGet.forEach(function (name) {
            streams[name] = $resource('https://api.twitch.tv/kraken/:verb:name?callback=JSON_CALLBACK',
                {}, {
                    queryStream: {method: 'JSONP', params: {verb: 'streams/', name: name}, isArray: false},
                    queryUser: {method: 'JSONP', params: {verb: 'users/', name: name}, isArray: false},
                    cache: true
                }
            );
        });
        return streams;
    });