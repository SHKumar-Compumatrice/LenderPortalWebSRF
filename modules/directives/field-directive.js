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
            console.log("inputName " + inputName);
    		var blurred = false;
        	
    		inputNgEl.bind('blur',function(elem){
    	    
			console.log("blur event " + scope.field.fieldValue);
			
			console.log("check validity " + scope.field.required);
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
        
		//var inputEl = element[0].querySelector("[name]");
		
		
		
		
        
    }

    return {

        restrict: 'A',
        require : '?^form',

        scope: {
            field: '='



        },
        controller: function($scope, $element, $http) {
            $scope.subtype = {};
            $scope.drpDwnVisible = false;
            $scope.showOtherOptions = function() {
            	var a_input;
                var count = 0;
                $scope.arraySubType = [];
                $scope.arraySubTypeOptions = [];
                $scope.arraySubType.length = 0;
                $scope.arraySubTypeOptions.length = 0;
                console.log("drpdwnvalue " + JSON.stringify($scope.field.fieldValue));

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
                            console.log("loop starts");
                            if ($scope.$parent.form.form_fields[i].orderIndex == null && $scope.$parent.form.form_fields[i].parentDataField.toLowerCase() == $scope.field.fieldName.toLowerCase()) {
                                console.log("inside if");
                                $scope.arraySubType = $scope.$parent.form.form_fields[i].options;
                                console.log("inside if " + JSON.stringify($scope.$parent.form.form_fields[i].options));
                                for (var i = 0; i < $scope.arraySubType.length; i++) {
                                    console.log("inside second for");
                                    if ($scope.arraySubType[i].parent.trim() == $scope.field.fieldValue.value.trim()) {
                                        console.log("inside second if");
                                        $scope.arraySubTypeOptions.push($scope.arraySubType[i]);
                                    }
                                }


                            }


                        }
                    }
                    else{
                    	console.log("removing");
                    	$scope.arraySubType.length = 0;
                    	$($element[0]).next().remove()
                    	$scope.drpDwnVisible = false;
                    	
                    }
                    $scope.subtype.fieldName = 
                    $scope.subtype.fieldLabel = "Property Sub Type";
                    $scope.subtype.viewStatus = true;
                    $scope.options = $scope.arraySubTypeOptions;
                    console.log("final subtype array " + JSON.stringify($scope.arraySubTypeOptions));


                }

            }

        },
        link: linker
    };
});