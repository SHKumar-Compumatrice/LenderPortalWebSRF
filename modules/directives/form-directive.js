'use strict';

angular.module('WebSRF').directive('formDirective', function (shareDataService) {

    return {
    	restrict: 'A',
    	scope: {
            form:'='           
        },        
        templateUrl: 'views/directive-templates/form/form.html',
        
        controller: function($scope){
        	
        	
        	var selectServices = ['Appraisal','Environmental','Flood','AdditionalServices'];
        	
        	
        	
        	$scope.checkBoxGroupArray = [];
        	$scope.properties = [{
        		"name" : 'Property 1',
        		"value" : 1
        	},
        	{
        		"name" : 'Property 2',
        		"value" : 2
        	}];
        	                    
        	
        	$scope.transaction = true;
        	$scope.objSelectServices = {};
        	$scope.objSelectServices.appraisal = [];
        	$scope.objSelectServices.environmental = [];
        	$scope.objSelectServices.flood = [];
        	$scope.objSelectServices.additionalservices = [];
        
        	
            $scope.submitTransaction = function(){
            	$scope.$broadcast('show-errors-check-validity');
            	if($scope.transactionform.$invalid || $scope.collateralform.$invalid){
            		//console.log("invalid");
            		$scope.submissionFailed = true;
            	}
            	else{
            		$scope.submissionFailed = false;
            		//console.log("valid");
            	}
             
            }

            $scope.cancelTransaction = function(){
            	$scope.$broadcast('show-errors-reset');
            	$scope.submissionFailed = false;
               
            }
            
            $scope.submitCollateral = function(){
            	$scope.$broadcast('show-errors-check-validity');
            	if($scope.collateralform.$invalid || $scope.transactionform.$invalid){
            		//console.log("invalid");
            		$scope.submissionFailed = true;
            	}
            	else{
            		$scope.submissionFailed = false;
            		//console.log("valid");
            	}
            }
            
            $scope.cancelCollateral = function(){
            	$scope.$broadcast('show-errors-reset');
            	$scope.submissionFailed = false;
               
            }
            
            $scope.addproperty = function (){
            	
            	var length = $scope.properties.length;
            	var num = length + 1;
            	var obj = {
            			"name" : 'Property ' + num,
            			"value" : length + 1
            			
            	};
            	$scope.properties.push(obj);
            	
            }
            
            $scope.deleteproperty = function(){
            	
            	//console.log($scope.property.value);
            	for(var i = 0 ; i < $scope.properties.length; i ++){
            		if($scope.properties[i].value == $scope.property.value){
            			$scope.properties.splice(i,1);
            			//console.log("array after " + JSON.stringify($scope.properties));
            		}
            	}
            	
            }
            
            $scope.setSelectServices = function(index,item){
            	//console.log("reached function " + index);
            	//console.log("reached function " + JSON.stringify(item));
            	//if(item.value){
            		
            		shareDataService.storeSharedData(item);
            		
            	//}
            	
            	
            }
            
           
           
        }
       
        
        
    };
  });
