angular.module('WebSRF').controller('cabinet_ctrl',['$scope','$state','getCabinetfactory','$timeout',function($scope,$state,getCabinetfactory,$timeout){
	
	
	
	this.displayCabinetDiv = function(){
		//console.log("div shown");
		this.showCabinetDiv = true;		
			getCabinetfactory.getCabinets().then(function(result){
				
				$scope.allCabinets = result[0].cabinets;
				
			});	
	} 
	
	
	
	this.showCreateLoanForm = function(){
		//console.log("create form");
		$scope.$broadcast('show-errors-check-validity');
		if($scope.cabinetform.$invalid){
			//console.log("invalid");
		}
		else{
			var checkName =!!_.where($scope.allCabinets, {name:this.cabinetName}).length;
			if(checkName){
				//console.log("reached true condition");
		    this.invalid = false;
			localStorage.setItem("cabinet",this.cabinetName.id);
			$state.go('AddLoan');
			}
			else{
				this.invalid = true;
			}
		}
		
	}
	
	this.hideInvalidMsg = function (){
		//console.log("typeahead");
		var checkName =!!_.where($scope.allCabinets, {name:this.cabinetName}).length;
		if(checkName){
			//console.log("reached true condition");
	    this.invalid = false;
		
		}
	}
}]);
