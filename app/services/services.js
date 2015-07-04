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
    }]).factory('weatherSvc', ['$http', function ($http) {
        'use strict';
        function rangeLimit(value, min, max) {
            value = (value >= min) ? value : min;
            value = (value <= max) ? value : max;
            return value;
        }

        var sdo = {
            query: function (lat, lon, refresh) {
                // validations
                refresh = refresh || false;
                // valid lat = -90...90
                // valid lon = -180...180
                lat = rangeLimit(lat, -90, 90);
                lon = rangeLimit(lon, -180, 180);

                var promise = $http({
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + lon + '&mode=json'
                });
                promise.success(function (data, status, headers, conf) {
                    return data;
                });
                return promise;
            }
        };
        return sdo;
    }]);