angular.module('WebSRF').factory('shareDataService',[function(){
	var sharedData = {};
    
   // var storedData = {};
    var objSelectServices = {};
    objSelectServices.appraisal = [];
    objSelectServices.environmental = [];
    objSelectServices.flood = [];
    objSelectServices.additionalservices = [];
    
    var objPropInterest = [];
    var objValuationPremise = [];

    sharedData.storeSharedData = function(data){
    	if(data.section == 1 ){
    		if(data.value){
    		objSelectServices.appraisal.push(data);
    		}
    		else{
    			for(var i = 0 ; i < objSelectServices.appraisal.length ; i ++){
        			if(objSelectServices.appraisal[i].name == data.name){
        				
        				objSelectServices.appraisal.splice(i,1);
        			}
        			
        		}
    		}
    	}
    	else if(data.section == 2){
    		
    		if(data.value){
        		objSelectServices.environmental.push(data);
        		}
        		else{
        			for(var i = 0 ; i < objSelectServices.environmental.length ; i ++){
            			if(objSelectServices.environmental[i].name == data.name){
            				
            				objSelectServices.environmental.splice(i,1);
            			}
            			
            		}
        		}
    	}
    	else if(data.section == 3){
    		if(data.value){
    			objSelectServices.flood.push(data);
        		}
        		else{
        			for(var i = 0 ; i < objSelectServices.flood.length ; i ++){
            			if(objSelectServices.flood[i].name == data.name){
            				
            				objSelectServices.flood.splice(i,1);
            			}
            			
            		}
        		}
    	}
    	else if(data.section == 4){
    		
    		if(data.value){
    			objSelectServices.additionalservices.push(data);
        		}
        		else{
        			for(var i = 0 ; i < objSelectServices.additionalservices.length ; i ++){
            			if(objSelectServices.additionalservices[i].name == data.name){
            				
            				objSelectServices.additionalservices.splice(i,1);
            			}
            			
            		}
        		}
    	}
    	//console.log("service " + JSON.stringify(objSelectServices));

    	//storedData.data = data;
    };

    sharedData.getStoredData = function(){

    	return objSelectServices;
    };
    
    sharedData.storePropInterest = function(data){
    	if(data.value == 1){
    		objPropInterest.push(data);
    	}
    	else{
    		for(var i = 0 ; i < objPropInterest.length ; i ++){
    			if(objPropInterest[i].name == data.name){
    				
    				objPropInterest.splice(i,1);
    			}
    			
    		}
    	}
    }
    
    sharedData.getPropInterest = function (){
    	return objPropInterest;
    }

    
    sharedData.storeValuationPremise = function(data){
    	if(data.value == 1){
    		objValuationPremise.push(data);
    	}
    	else{
    		for(var i = 0 ; i < objValuationPremise.length ; i ++){
    			if(objValuationPremise[i].name == data.name){
    				
    				objValuationPremise.splice(i,1);
    			}
    			
    		}
    	}
    }
    
    sharedData.getValuationPremise = function (){
    	return objValuationPremise;
    }


    return sharedData;

}]);
