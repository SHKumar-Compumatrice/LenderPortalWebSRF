angular.module('WebSRF').factory(
		'getCabinetfactory',
		[
				'$http',
				function($http) {

					console.log("reached form  service");

					var factory = {};

					var staticPath = 'staticdata/';

					factory.getCabinets = function() {
						
						return $http.get(staticPath + 'cabinetJSON.js').then(
								function(result) {
									console.log("results "
											+ JSON.stringify(result));
									return result.data;
								});

					};

					return factory;

				} ]);
