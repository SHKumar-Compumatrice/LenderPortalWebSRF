angular.module('WebSRF').controller('form_ctrl', ['$scope', 'getformdata_svc', '$timeout', function($scope, getformdata_svc, $timeout) {

    console.log("reached form");
    $scope.showJson = false;
    var sections = 5;
    $scope.transaction = [];
    $scope.form = {};
    $scope.form1 = {};
    
  //  $scope.form.dynamicArrObj = {};
    var dynamicArrObj = {};

    $scope.transactionTab = [];
    $scope.collateralTab = [];
    $scope.transactionSection

    if (typeof String.prototype.startsWith != 'function') {

        String.prototype.startsWith = function(str) {
            return this.indexOf(str) === 0;
        };
    }

    
    getformdata_svc.form().then(function(form) {
        console.log("service called " + form[0].form_fields.length);
        $scope.form = form[0];
        $scope.form1 = $scope.form;
        $scope.form.dynamicArrObj = {};
        for (var i = 0; i < form[0].form_fields.length; i++) {

            $scope.form.form_fields[i].fieldValue = "";

            console.log("orderindex " + form[0].form_fields[i].orderIndex);
            if (form[0].form_fields[i].orderIndex != null && form[0].form_fields[i].orderIndex.startsWith("1")) {

                $scope.transactionTab.push(form[0].form_fields[i]);


            } else {
                $scope.collateralTab.push(form[0].form_fields[i]);
            }

        }
        
        $scope.form.transaction = $scope.transactionTab;
        $scope.form.collateral = $scope.collateralTab;
        
      
        
        for(var i = 1 ; i <= sections ; i ++  ){
        	$scope.form.dynamicArrObj[i] = [];
        	$scope.form.dynamicArrObj[i].arr = [];
        	for (var j = 0; j < $scope.form.transaction.length; j++) {
 
        		
                if ($scope.form.transaction[j].orderIndex.startsWith("1." + i)) {
                	
                	$scope.form.dynamicArrObj[i].arr.push($scope.form.transaction[j]);

                   
                	
                	


                } 

            }
        	console.log("second " + JSON.stringify($scope.form.dynamicArrObj[i].arr));

        }
   
        
    });
    
    
    $scope.showJsonDiv = function(){
      $scope.showJson = true;
 	  //$scope.transactionObject = $scope.form.transaction;
      $scope.transaction.length = 0;
      console.log("start for  " + $scope.form.transaction.length);
 	  for(var i = 0 ; i < $scope.form.transaction.length ; i ++){
 		  console.log("reached for loop ");
 		  $scope.transactionObject = {};
 		  $scope.transactionObject.fieldName = $scope.form.transaction[i].fieldName;
 		  $scope.transactionObject.fieldValue = $scope.form.transaction[i].fieldValue;
 		  $scope.transaction.push($scope.transactionObject);
 		  
 	  }
 	   console.log("form submitting " + JSON.stringify($scope.transaction));
    }
 	
    
    $scope.hideJson = function(){
    	$scope.showJson = false;
    }

}]);