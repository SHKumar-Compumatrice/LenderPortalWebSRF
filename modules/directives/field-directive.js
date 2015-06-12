'use strict';

angular.module('WebSRF').directive('fieldDirective', function($http, $compile) {

    var getTemplateUrl = function(field) {
        if (field.orderIndex != null || field.orderIndex != undefined) {
            var type = field.fieldType;
            var templateUrl = '';

            switch (type) {
                case 'textfield':
                    templateUrl = 'views/directive-templates/field/textfield.html';
                    break;
                case 'email':
                    templateUrl = 'views/directive-templates/field/email.html';
                    break;
                case 'textarea':
                    templateUrl = 'views/directive-templates/field/textarea.html';
                    break;
                case 'checkbox':
                    templateUrl = 'views/directive-templates/field/checkbox.html';
                    break;
                case 'date':
                    templateUrl = 'views/directive-templates/field/date.html';
                    break;
                case 'dropdown':
                    templateUrl = 'views/directive-templates/field/dropdown.html';
                    break;
                case 'hidden':
                    templateUrl = 'views/directive-templates/field/hidden.html';
                    break;
                case 'password':
                    templateUrl = 'views/directive-templates/field/password.html';
                    break;
                case 'radio':
                    templateUrl = 'views/directive-templates/field/radio.html';
                    break;
                case 'modifiedbuildingfield' :
                	templateUrl = 'views/directive-templates/field/custombuildingfield.html';
                	break;
                case 'modifiedlandfield' :
                	templateUrl = 'views/directive-templates/field/customlandfield.html';
                	break;
            }
            return templateUrl;
        }
    }

    var linker = function(scope, element, attr,formCtrl) {
        // GET template content from path
        scope.attr = attr;
        scope.element = element;
        
        var templateUrl = getTemplateUrl(scope.field);
        if(templateUrl != undefined){
        $http.get(templateUrl).success(function(data) {
            
            element.html(data);
            scope.element = element.contents();
            
            $compile(element.contents())(scope);
            
            
            
            var inputEl = scope.element[0].querySelector("[name]");
            var inputNgEl = angular.element(inputEl);
            var inputName = inputNgEl.attr('name');
            
            
            
    		var blurred = false;
        	
    		inputNgEl.bind('blur',function(elem){
    	    
			
			if(scope.field.required == 1 && (scope.field.fieldValue == null || scope.field.fieldValue == undefined || scope.field.fieldValue == "")){
				console.log("if");
				element.addClass('has-error');
			}
			else{
				console.log("else");
				element.removeClass('has-error');
			}
			
		});
    		
    		scope.$on('show-errors-check-validity',function(){
    			
    			if(scope.field.required == 1 && (scope.field.fieldValue == null || scope.field.fieldValue == undefined || scope.field.fieldValue == "")){
    				element.addClass('has-error');
    			}
    			
			});
    		
    		scope.$on('show-errors-reset', function() {
				  setTimeout(function() {
					  element.removeClass('has-error');
				  }, 0, false);
				});
    		
        });
        }
        
		
		
		
		
		
        
    }

    return {

        restrict: 'A',
        require : '?^form',

        scope: {
            field: '='
        },
        controller: function($scope, $element, $http) {
        	//for checkbox directive;
        	
        	if($scope.field.fieldName == "BuildingSize" || $scope.field.fieldName == "BuildingSizeCompleted"){
        		var sizeunit;
        		/*$http.get('views/directive-templates/field/sizeunits.html').success(function(data) {
                    

        			sizeunit = angular.element($compile(data)($scope));
                    console.log("field data again " + JSON.stringify(sizeunit));
                    $($element[0]).after(sizeunit);
                    



                });*/
        		$scope.sizeobj = {};
        		$scope.sizeobj.options = [];
            	//console.log("reached inside div");
            	for (var i = 0; i < $scope.$parent.form.form_fields.length; i++) {
            		if ($scope.$parent.form.form_fields[i].orderIndex == null && 
            			  $scope.$parent.form.form_fields[i].parentDataField == "BuildingSize") {
            			  $scope.sizeobj.options = angular.copy($scope.$parent.form.form_fields[i].options);
            			  //console.log("object array " + JSON.stringify($scope.sizeobj));
            			
            		}
            		
            		
            	}
            	 	
            }
        	
        	if($scope.field.fieldName == "LandSize" || $scope.field.fieldName == "ExcessLand"){
        		var areaunit;
        		/*$http.get('views/directive-templates/field/areaunits.html').success(function(data) {
                    

        			areaunit = angular.element($compile(data)($scope));
                    console.log("field data again " + JSON.stringify(areaunit));
                    $($element[0]).after(areaunit);
                    



                });*/
        		$scope.areaobj = {};
        		$scope.areaobj.options = [];
            	//console.log("reached inside div");
            	for (var i = 0; i < $scope.$parent.form.form_fields.length; i++) {
            		if ($scope.$parent.form.form_fields[i].orderIndex == null && 
            			  $scope.$parent.form.form_fields[i].parentDataField == "LandSize") {
            			  $scope.areaobj.options = angular.copy($scope.$parent.form.form_fields[i].options);
            			  //console.log("object array 11" + JSON.stringify($scope.areaobj));
            			
            		}
            		
            		
            	}
            	 	
            }
        	
        	
        	
            $scope.subtype = {};
            $scope.drpDwnVisible = false;
            $scope.showOtherOptions = function() {
            	var a_input;
                var count = 0;
                $scope.arraySubType = [];
                $scope.arraySubTypeOptions = [];
                $scope.arraySubType.length = 0;
                $scope.arraySubTypeOptions.length = 0;
                //console.log("drpdwnvalue " + JSON.stringify($scope.field.fieldValue));
                
                

                if ($scope.field.fieldName == 'PropertyType') {

                    if (!$scope.drpDwnVisible) {
                        $http.get('views/directive-templates/field/customdropdown.html').success(function(data) {
                            

                            a_input = angular.element($compile(data)($scope));
                            console.log("field data again " + JSON.stringify(a_input));
                            $($element[0]).after(a_input);
                            $scope.drpDwnVisible = true;



                        });
                    }

                    if ($scope.field.fieldValue != undefined) {
                        for (var i = 0; i < $scope.$parent.form.form_fields.length; i++) {
                            //console.log("loop starts");
                            if ($scope.$parent.form.form_fields[i].orderIndex == null && $scope.$parent.form.form_fields[i].parentDataField.toLowerCase() == $scope.field.fieldName.toLowerCase()) {
                                //console.log("inside if");
                                $scope.arraySubType = $scope.$parent.form.form_fields[i].options;
                                //console.log("inside if " + JSON.stringify($scope.$parent.form.form_fields[i].options));
                                for (var i = 0; i < $scope.arraySubType.length; i++) {
                                    //console.log("inside second for");
                                    if ($scope.arraySubType[i].parent.trim() == $scope.field.fieldValue.value.trim()) {
                                       // console.log("inside second if");
                                        $scope.arraySubTypeOptions.push($scope.arraySubType[i]);
                                    }
                                }


                            }


                        }
                    }
                    else{
                    	
                    	$scope.arraySubType.length = 0;
                    	$($element[0]).next().remove()
                    	$scope.drpDwnVisible = false;
                    	
                    }
                    
                    $scope.subtype.fieldLabel = "Property Sub Type";
                    $scope.subtype.name = "PropertySubType"
                    $scope.subtype.viewStatus = true;
                    $scope.options = $scope.arraySubTypeOptions;
                    


                }
                

            }
            
            $scope.radiobtnClicked = function(item){
            	console.log("button clicked");
            	if ($scope.field.fieldName == 'HasRenovation') {
                	if($scope.field.fieldValue == 1){
                		$('#RenevationDesc').removeClass('ng-hide');
                	}
                	else{
                		$('#RenevationDesc').addClass('ng-hide');
                	}
            		
            		
                }
            	
            	if ($scope.field.fieldName == 'HasUseChange') {
                	if($scope.field.fieldValue == 1){
                		$('#ProposedUse').removeClass('ng-hide');
                	}
                	else{
                		$('#ProposedUse').addClass('ng-hide');
                	}
            		
            		
                }
            	
            	if ($scope.field.fieldName == 'HasGroundLease') {
                	if($scope.field.fieldValue == 1){
                		$('#GroundLeaseDesc').removeClass('ng-hide');
                	}
                	else{
                		$('#GroundLeaseDesc').addClass('ng-hide');
                	}
            		
            		
                }
            	
            	if ($scope.field.fieldName == 'IsForSale') {
                	if($scope.field.fieldValue == 1){
                		$('#ListPrice').removeClass('ng-hide');
                	}
                	else{
                		$('#ListPrice').addClass('ng-hide');
                	}
            		
            		
                }
            	
            	if ($scope.field.fieldName == 'HasRecentSale') {
                	if($scope.field.fieldValue == 1){
                		$('#SalePrice').removeClass('ng-hide');
                		$('#SaleDate').removeClass('ng-hide');
                	}
                	else{
                		$('#SalePrice').addClass('ng-hide');
                		$('#SaleDate').addClass('ng-hide');
                	}
            		
            		
                }
            	
            }
            
            $scope.showpropertytsubtype = function(){
            	console.log("subtype clicked " + JSON.stringify($scope.subtype.fieldValue));
            }
            

        },
        link: linker
    };
});