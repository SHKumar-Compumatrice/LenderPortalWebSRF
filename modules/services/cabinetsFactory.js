angular.module('WebSRF').factory(
    'getCabinetfactory', ['$http', 'Urls',
        function($http, Urls) {

            //console.log("reached form qq service aa");

            var factory = {};

            var staticPath = Urls.getCabinets;

            //var staticPath = 'staticdata/cabinetJSON.js';

            factory.getCabinets = function() {

                return $http.get(staticPath).then(
                    function(result) {
                        //console.log("results " + JSON.stringify(result));
                        return result.data;
                    });

            };

            return factory;

        }
    ]);