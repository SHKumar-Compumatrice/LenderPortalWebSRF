'use strict';

angular.module('WebSRF').directive('formDirective', function () {
	console.log("gahaha");
    return {
    	restrict: 'A',
    	scope: {
            form:'='           
        },        
        templateUrl: 'views/directive-templates/form/form.html',
        
        controller: function($scope){
        	console.log("gahaha111");
        	$scope.transaction = true;
        
        	console.log("reached directive controller");
            $scope.submit = function(){
            	$scope.$broadcast('show-errors-check-validity');
            	if($scope.myForm.$invalid){
            		console.log("invalid");
            		$scope.transactionSubmissionFailed = true;
            	}
            	else{
            		$scope.transactionSubmissionFailed = false;
            		console.log("valid");
            	}
             
            }

            $scope.cancel = function(){
            	$scope.$broadcast('show-errors-reset');
            	$scope.transactionSubmissionFailed = false;
               
            }
           
        }
       
        
        
    };
  });
