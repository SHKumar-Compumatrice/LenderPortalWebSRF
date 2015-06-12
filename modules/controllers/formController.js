angular.module('WebSRF').controller('form_ctrl', ['$scope', 'getformdata_svc', '$timeout','shareDataService', function($scope, getformdata_svc, $timeout,shareDataService) {

    console.log("reached form");
    $scope.showJson = false;
    var sections = 5;
    var collateralsections = 3;
    $scope.transaction = [];
    $scope.collateral = [];
    //$scope.form = {};
    
    //Sections in Select Services
    
    
    
    
    
   /* $scope.transactionTab = [];
    $scope.collateralTab = [];*/
    
    //$scope.transactionSection

    if (typeof String.prototype.startsWith != 'function') {

        String.prototype.startsWith = function(str) {
            return this.indexOf(str) === 0;
        };
    }

    
    getformdata_svc.form().then(function(form) {
        console.log("service called " + form[0].form_fields.length);
        $scope.form = form[0];
        $scope.form.transaction = [];
        $scope.form.collateral = [];
        $scope.form.subTypes = [];
        
                 $scope.form.Appraisal = [{"section" : 1 ,"name" : "First American Commercial Evaluation", "value" : false},
                               	{"section" : 1 , "name" : "Clear Capital Commercial Evaluation", "value" : false},
                              	{"section" : 1 , "name" : "Commercial Appraisal Report", "value" : false},
                              	{"section" : 1 , "name" : "Commercial Evaluation", "value" : false},
                              	{"section" : 1 , "name" : "Residential Appraisal", "value" : false}];
                 $scope.form.Environmental = [{"section" : 2 , "name" : "Government Records Review", "value" : false},
                                	{"section" : 2 , "name" : "LoanCheck Plus", "value" : false},
                               	{"section" : 2 , "name" : "Phase II Environmental Site Assessment", "value" : false},
                               	{"section" : 2 , "name" : "ASTM Transaction Screen", "value" : false},
                               	{"section" : 2 , "name" : "Desktop Review", "value" : false}];
                 $scope.form.Flood = [{"section" : 3 , "name" : "Flood Residential Life of Loan", "value" : false},
                                	{"section" : 3 , "name" : "Flood Commercial Life of Loan", "value" : false}];
                               
                 $scope.form.AdditionalServices = [{"section" : 4 ,"name" : "ASTM Property Condition Assessment", "value" : false},
                                	{"section" : 4 , "name" : "Construction Property Inspection", "value" : false}];
        
        $scope.form.dynamicArrObj = {};
        $scope.form.collateralObj = {};
        
        for (var i = 0; i < form[0].form_fields.length; i++) {

            $scope.form.form_fields[i].fieldValue = "";

           
            if (form[0].form_fields[i].orderIndex != null && form[0].form_fields[i].orderIndex.startsWith("1")) {

            	$scope.form.transaction.push(form[0].form_fields[i]);


            } 
            else if(form[0].form_fields[i].orderIndex != null && form[0].form_fields[i].orderIndex.startsWith("2")){
            	
            	$scope.form.collateral.push(form[0].form_fields[i]);
            }
            else{
            	
            	$scope.form.subTypes.push(form[0].form_fields[i]);
            }

        }
        
        /*$scope.form.transaction = $scope.transactionTab;
        $scope.form.collateral = $scope.collateralTab;*/
        
       
        

        
       
        
        for(var i = 1 ; i <= sections ; i ++  ){
        	$scope.form.dynamicArrObj[i] = [];
        	$scope.form.dynamicArrObj[i].arr = [];
        	for (var j = 0; j < $scope.form.transaction.length; j++) {
 
        		
                if ($scope.form.transaction[j].orderIndex.startsWith("1." + i)) {
                	
                	$scope.form.dynamicArrObj[i].arr.push($scope.form.transaction[j]);

                } 

            }
        	

        }
        
        
        for(var i = 1 ; i <= collateralsections ; i ++  ){
        	$scope.form.collateralObj[i] = [];       	
        	$scope.form.collateralObj[i].arr = [];
        	for (var j = 0; j < $scope.form.collateral.length; j++) {         		
                if ($scope.form.collateral[j].orderIndex.startsWith("2." + i)) {                	
                	$scope.form.collateralObj[i].arr.push($scope.form.collateral[j]);
                	
                } 
                
               
            }
  

        }
        
       
        
    });
    
   
    
    $scope.showJsonDiv = function(){
      $scope.showJson = true;
      
      //console.log("appraisla " + JSON.stringify(shareDataService.getStoredData()));
 	  
      $scope.transaction.length = 0;
      $scope.collateral.length = 0;
      
      console.log("start for  " + $scope.form.transaction.length);
 	  for(var i = 0 ; i < $scope.form.transaction.length ; i ++){
 		  console.log("reached for loop ");
 		  $scope.transactionObject = {};
 		  $scope.transactionObject.fieldName = $scope.form.transaction[i].fieldName;
 		  $scope.transactionObject.fieldValue = $scope.form.transaction[i].fieldValue;
 		  $scope.transaction.push($scope.transactionObject);
 		  
 	  }
 	 $scope.collateral.push(shareDataService.getStoredData());
 	 for(var i = 0 ; i < $scope.form.collateral.length ; i ++){
		  console.log("reached for loop ");
		  $scope.collateralObject = {};
		  $scope.collateralObject.fieldName = $scope.form.collateral[i].fieldName;
		  $scope.collateralObject.fieldValue = $scope.form.collateral[i].fieldValue;
		  
		  if($scope.collateralObject.fieldName == "BuildingSize"){
			  $scope.collateralObject.Units = {};
			  $scope.collateralObject.Units.text = $("#BuildingSize option:selected").text() == "Select Units" ? "" : $("#BuildingSize option:selected").text();
			  $scope.collateralObject.Units.value = $("#BuildingSize option:selected").val();
		  }
			if($scope.collateralObject.fieldName == "BuildingSizeCompleted"){
				  $scope.collateralObject.Units = {};
				  $scope.collateralObject.Units.text = $("#BuildingSizeCompleted option:selected").text() == "Select Units" ? "" : $("#BuildingSizeCompleted option:selected").text();
				  $scope.collateralObject.Units.value = $("#BuildingSizeCompleted option:selected").val();

			}
			if($scope.collateralObject.fieldName == "LandSize"){
				  $scope.collateralObject.Units = "";
				  $scope.collateralObject.Units.text = $("#LandSize option:selected").text()== "Select Units" ? "" :$("#LandSize option:selected").text();
				  $scope.collateralObject.Units.value = $("#LandSize option:selected").val();
			}
			if($scope.collateralObject.fieldName == "LandSize"){
				  $scope.collateralObject.Units = {};
				  $scope.collateralObject.Units.text = $("#LandSize option:selected").text()== "Select Units" ? "" :$("#LandSize option:selected").text();
				  $scope.collateralObject.Units.value = $("#LandSize option:selected").val();
			}
			if($scope.collateralObject.fieldName == "ExcessLand"){
				  $scope.collateralObject.Units = {};
				  $scope.collateralObject.Units.text = $("#ExcessLand option:selected").text()== "Select Units" ? "" :$("#ExcessLand option:selected").text();
				  $scope.collateralObject.Units.value = $("#ExcessLand option:selected").val();
			}
			if($scope.collateralObject.fieldName == "PropertyType"){
				  $scope.collateralObject.propertysubtype = {};
				  $scope.collateralObject.propertysubtype.text = $("#PropertySubType option:selected").text()== "Select Property Sub Type" ? "" :$("#PropertySubType option:selected").text();
				  $scope.collateralObject.propertysubtype.value = $("#PropertySubType option:selected").val();
			}
			
			
		    $scope.collateral.push($scope.collateralObject);
		  
	  }
 	    
    	//console.log("gyewfyure " + JSON.stringify($scope.form.collateral));
 	  
    }
 	
    
    $scope.hideJson = function(){
    	$scope.showJson = false;
    }

}]);