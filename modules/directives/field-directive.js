'use strict';

angular.module('WebSRF').directive('fieldDirective', function ($http, $compile) {

        var getTemplateUrl = function(field) {
        	if(field.orderIndex != null || field.orderIndex != undefined){
            var type = field.fieldType;
            var templateUrl = '';

            switch(type) {
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
            }
            return templateUrl;
        }
        }

        var linker = function(scope, element, attr) {
            // GET template content from path
        	scope.attr = attr;
        	scope.element = element;
        	console.log("field data " + JSON.stringify(scope.field));
            var templateUrl = getTemplateUrl(scope.field);
			if(templateUrl != undefined){
            $http.get(templateUrl).success(function(data) {
            	console.log("field data " + JSON.stringify(data));
                element.html(data);
                scope.element = element.contents();
                $compile(element.contents())(scope);
            });
			}
        }

        return {
            
            restrict: 'E',
           
            scope: {
                field:'='
                
               
                
            },
            controller : function($scope,$element,$http){
            	$scope.subtype = {};
                $scope.showOtherOptions = function(){
                	$scope.arraySubType = [];
                	$scope.arraySubTypeOptions = [];
                	$scope.arraySubType.length = 0;
                	$scope.arraySubTypeOptions.length = 0;
                	//console.log("adadada1111 " + JSON.stringify($element));
                    //console.log("adadada " + $scope.field.fieldName);
                    if($scope.field.fieldName == 'PropertyType'){
                    	 //console.log("another scope " + JSON.stringify($scope.$parent.form));
                    	  /*console.log("adadada " + $scope.field.fieldName + "fafaf " + JSON.stringify($scope.field.fieldValue));
                    	  var template = "<div class="form-group top-margin" ng-show= {{onParentShow}}>" +
                    	                 "<div class="col-xs-4 col-md-4">" +
                    	                 "<select ng-model="field.fieldValue"/" + "name= "{{fieldName}}"/" +   "ng-change="showOtherOptions1()"/" + "class="form-control"/" +
                    	                 "data-ng-options="option.name for option in field.options">"+
                    	                 "</select>" +
                    	                 " </div> </div><br>"
                    	                 
                    	  var tag = angular.element(template);
                    	  angular.element(tag).appendTo($element[0]);*/
                    	
                    	/*$http.get('views/directive-templates/field/customdropdown.html').success(function(data) {
                        	console.log("field data " + JSON.stringify(data));
                            //$element.html(data);
                        	  var tag = angular.element(data);
                        	  angular.element(tag).appendTo($element[0]);
                        	  $scope.subtype.fieldLabel = "fdvgfdj";
                        	 // $scope.fieldLabel = "sidyfiuer";
                             // $compile($element.contents())($scope);
                        });*/
                    	 
                    	  //console.log("length " + $scope.$parent.form.form_fields.length);
                    	  for(var i = 0 ; i < $scope.$parent.form.form_fields.length ; i++){
                    		  console.log("loop starts");
                    	  if($scope.$parent.form.form_fields[i].orderIndex == null && $scope.$parent.form.form_fields[i].parentDataField.toLowerCase() == $scope.field.fieldName.toLowerCase()){
                    		  console.log("inside if");
                    		  $scope.arraySubType = $scope.$parent.form.form_fields[i].options;
                    		  console.log("inside if " + JSON.stringify($scope.$parent.form.form_fields[i].options) );
                    		  for(var i = 0 ; i < $scope.arraySubType.length ; i ++){
                    			  console.log("inside second for");
                    			  if($scope.arraySubType[i].parent == $scope.field.fieldValue.value){
                    				  console.log("inside second if");
                    				  $scope.arraySubTypeOptions.push($scope.arraySubType[i]);
                    			  }
                    		  }
                    			
                    		  
                    	  }
                    	  
                    	  
                    }
                    	  console.log("final subtype array " + JSON.stringify($scope.arraySubTypeOptions));
                    	 /*$http.get(templateUrl).success(function(data) {
                         	console.log("field data " + JSON.stringify(data));
                             element.html(data);
                             $scope.element = element.contents();
                             $compile(element.contents())(scope);
                         });*/
                    }
                    
                }

            },
            link: linker    
        };
  });
