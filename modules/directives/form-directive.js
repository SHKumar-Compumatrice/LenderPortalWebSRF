'use strict';

angular.module('WebSRF').directive('formDirective', function () {
    return {
        controller: function($scope){
        	
        	$scope.transaction = true;
        
        	console.log("reached directive controller");
            $scope.submit = function(){
                alert('Form submitted..');
                $scope.form.submitted = true;
            }

            $scope.cancel = function(){
                alert('Form canceled..');
            }
            
            $scope.oneAtATime = true;

            $scope.status = {
              isFirstOpen: true,
              isFirstDisabled: false
            };
        },
        templateUrl: 'views/directive-templates/form/form.html',
        restrict: 'E',
        scope: {
            form:'='
           
        }
        
    };
  });
