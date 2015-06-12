angular.module('WebSRF').factory('shareDataService',[function(){
	var sharedData = {};
    
   // var storedData = {};
    var objSelectServices = {};
    objSelectServices.appraisal = [];
    objSelectServices.environmental = [];
    objSelectServices.flood = [];
    objSelectServices.additionalservices = [];

    sharedData.storeSharedData = function(data){
    	if(data.section == 1){
    		objSelectServices.appraisal.push(data);
    	}
    	else if(data.section == 2){
    		objSelectServices.environmental.push(data);
    	}
    	else if(data.section == 3){
    		objSelectServices.flood.push(data);
    	}
    	else if(data.section == 4){
    		objSelectServices.additionalservices.push(data);
    	}
    	console.log("service " + JSON.stringify(objSelectServices));

    	//storedData.data = data;
    };

    sharedData.getStoredData = function(){

    	return objSelectServices;
    };


    return sharedData;

}]);
