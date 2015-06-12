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
        	//$scope.form.Appraisal = [];
            //Adding object in JSON for checkboxes
           /*$scope.form.Appraisal = [{"name" : "First American Commercial Evaluation", "value" : 1},
                         	{"name" : "Clear Capital Commercial Evaluation", "value" : 2},
                        	{"name" : "Commercial Appraisal Report", "value" : 3},
                        	{"name" : "Commercial Evaluation", "value" : 4},
                        	{"name" : "Residential Appraisal", "value" : 5}];
           $scope.form.Environmental = [{"name" : "Government Records Review", "value" : 1},
                          	{"name" : "LoanCheck Plus", "value" : 2},
                         	{"name" : "Phase II Environmental Site Assessment", "value" : 3},
                         	{"name" : "ASTM Transaction Screen", "value" : 4},
                         	{"name" : "Desktop Review", "value" : 5}];
           $scope.form.Flood = [{"name" : "Flood Residential Life of Loan", "value" : 1},
                          	{"name" : "Flood Commercial Life of Loan", "value" : 2}];
                         
           $scope.form.AdditionalServices = [{"name" : "ASTM Property Condition Assessment", "value" : 1},
                          	{"name" : "Construction Property Inspection", "value" : 2}];*/
                         	
            /*$scope.form.selectServices = [];
            $scope.form.selectServices.select = [];
            for(var i = 0 ; i < selectServices.length ; i ++){
            	$scope.form.selectServices.select[i] = [];
            	switch(selectServices[i]){
            	
            	case "Appraisal":
            		for(var j = 0 ; j < Appraisal.length ; j ++){
            			$scope.form.selectServices.select[i].push(Appraisal[j]);
            			console.log("select services array " + JSON.stringify($scope.form.selectServices.select));
            		}
            		
            		break;
            	 
            		
            	case "Environmental": 
            		for(var j = 0 ; j < Environmental.length ; j ++){
            			$scope.form.selectServices.select[i].push(Environmental[j]);
            		}
            		break;
            		
            	case "Flood" :
            		for(var j = 0 ; j < Flood.length ; j ++){
            			$scope.form.selectServices.select[i].push(Flood[j]);
            		}
            		break;
            		
            	case "AdditionalServices":
            		for(var j = 0 ; j < AdditionalServices.length ; j ++){
            			$scope.form.selectServices.select[i].push(AdditionalServices[j]);
            		}
            		break;
            	}
            	
            
            	    	console.log("select services array 111 " + JSON.stringify($scope.form.selectServices.select));
            	   
            }
           
            console.log("select services new " + JSON.stringify($scope.form.selectServices.select[1]));var selectServices = ['Appraisal','Environmental','Flood','AdditionalServices'];
            
            //Adding object in JSON for checkboxes
            var Appraisal = [{"name" : "First American Commercial Evaluation", "value" : 1},
                         	{"name" : "Clear Capital Commercial Evaluation", "value" : 2},
                        	{"name" : "Commercial Appraisal Report", "value" : 3},
                        	{"name" : "Commercial Evaluation", "value" : 4},
                        	{"name" : "Residential Appraisal", "value" : 5}];
            var Environmental = [{"name" : "Government Records Review", "value" : 1},
                          	{"name" : "LoanCheck Plus", "value" : 2},
                         	{"name" : "Phase II Environmental Site Assessment", "value" : 3},
                         	{"name" : "ASTM Transaction Screen", "value" : 4},
                         	{"name" : "Desktop Review", "value" : 5}];
            var Flood = [{"name" : "Flood Residential Life of Loan", "value" : 1},
                          	{"name" : "Flood Commercial Life of Loan", "value" : 2}];
                         
            var AdditionalServices = [{"name" : "ASTM Property Condition Assessment", "value" : 1},
                          	{"name" : "Construction Property Inspection", "value" : 2}];
                         	
            $scope.form.selectServices = [];
            $scope.form.selectServices.select = [];
            for(var i = 0 ; i < selectServices.length ; i ++){
            	$scope.form.selectServices.select[i] = [];
            	switch(selectServices[i]){
            	
            	case "Appraisal":
            		for(var j = 0 ; j < Appraisal.length ; j ++){
            			$scope.form.selectServices.select[i].push(Appraisal[j]);
            			console.log("select services array " + JSON.stringify($scope.form.selectServices.select));
            		}
            		
            		break;
            	 
            		
            	case "Environmental": 
            		for(var j = 0 ; j < Environmental.length ; j ++){
            			$scope.form.selectServices.select[i].push(Environmental[j]);
            		}
            		break;
            		
            	case "Flood" :
            		for(var j = 0 ; j < Flood.length ; j ++){
            			$scope.form.selectServices.select[i].push(Flood[j]);
            		}
            		break;
            		
            	case "AdditionalServices":
            		for(var j = 0 ; j < AdditionalServices.length ; j ++){
            			$scope.form.selectServices.select[i].push(AdditionalServices[j]);
            		}
            		break;
            	}
            	
            
            	    	console.log("select services array 111 " + JSON.stringify($scope.form.selectServices.select));
            	   
            }
           
            console.log("select services new " + JSON.stringify($scope.form.selectServices.select[1]));*/
        	
        	
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
            		console.log("invalid");
            		$scope.submissionFailed = true;
            	}
            	else{
            		$scope.submissionFailed = false;
            		console.log("valid");
            	}
             
            }

            $scope.cancelTransaction = function(){
            	$scope.$broadcast('show-errors-reset');
            	$scope.submissionFailed = false;
               
            }
            
            $scope.submitCollateral = function(){
            	$scope.$broadcast('show-errors-check-validity');
            	if($scope.collateralform.$invalid || $scope.transactionform.$invalid){
            		console.log("invalid");
            		$scope.submissionFailed = true;
            	}
            	else{
            		$scope.submissionFailed = false;
            		console.log("valid");
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
            	
            	console.log($scope.property.value);
            	for(var i = 0 ; i < $scope.properties.length; i ++){
            		if($scope.properties[i].value == $scope.property.value){
            			$scope.properties.splice(i,1);
            			console.log("array after " + JSON.stringify($scope.properties));
            		}
            	}
            	
            }
            
            $scope.setSelectServices = function(index,item){
            	console.log("reached function " + index);
            	console.log("reached function " + JSON.stringify(item));
            	if(item.value){
            		
            		shareDataService.storeSharedData(item);
            		
            	}
            	/*if(item.section == 1 && item.value){
            		shareDataService.storeSharedData(scope.customDir.password);
            		$scope.objSelectServices.appraisal.push(item);
            	}
            	else if(item.section == 2 && item.value){
            		$scope.objSelectServices.environmental.push(item);
            	}
            	else if(item.section == 3 && item.value){
            		$scope.objSelectServices.flood.push(item);
            	}
            	else if(item.section == 4 && item.value){
            		$scope.objSelectServices.additionalservices.push(item);
            	}*/
            	
            	
            }
            
           
           
        }
       
        
        
    };
  });
