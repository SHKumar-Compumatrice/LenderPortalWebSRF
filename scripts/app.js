angular.module('WebSRF', ['ui.router.state','ui.bootstrap']);

angular.module('WebSRF').config([
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider.state('SelectCabinet', {
          'url' : '/',
          'controller' : 'cabinet_ctrl as cabinet',    
          'templateUrl': 'views/selectCabinet.html'
          
      }).
      state('AddLoan',{
    	  'url' : '/addloan',
    	  'controller' : 'form_ctrl as srfform',
    	  'templateUrl' : 'views/displayForm.html'
      })
  }
]);

angular.module('WebSRF').directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {

            elm.bind('change', function () {
                $('#filetag').hide();
                $('#successdiv').hide();
                $('#errordiv').hide();
                $('#incorrectformatdiv').hide();





                $parse(attrs.fileInput).assign(scope, elm[0].files);


                scope.$apply();



            })
        }
    };
}]);





angular.module('WebSRF').directive('showErrors',['$timeout',function($timeout){
	
	return{
		restrict : 'A',
		require : '^form',
		link : function(scope,el,attrs,formCtrl){
			//console.log("show error directive called");
			var inputEl = el[0].querySelector("[name]");
			var inputNgEl = angular.element(inputEl);
			
			var inputName = inputNgEl.attr('name');
			//console.log("inputname " + inputName);
			var blurred = false;
			
			inputNgEl.bind('blur',function(elem){
				//console.log("blur event");
			
				el.toggleClass('has-error', formCtrl[inputName].$invalid);
			});
			
			scope.$on('show-errors-check-validity',function(){
				el.toggleClass('has-error', formCtrl[inputName].$invalid);
			})
			
			
			scope.$on('show-errors-reset', function() {
				  $timeout(function() {
				    el.removeClass('has-error');
				  }, 0, false);
				});
		}
	}
		
	
	
}]);


angular.module('WebSRF').directive('showtab',[function(){
	
	 return {
         link: function (scope, element, attrs) {
             element.click(function(e) {
                 e.preventDefault();
                 $(element).tab('show');
             });
         }
     };
		
	
	
}]);

angular.module('WebSRF').directive('checkboxGroup',function(){
	
	return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            // Determine initial checked boxes
            if (scope.checkBoxGroupArray.indexOf(scope.item.value) !== -1) {
                elem[0].checked = true;
            }

            // Update array on click
            elem.bind('click', function() {
                var index = scope.checkBoxGroupArray.indexOf(scope.item.value);
                // Add if checked
                if (elem[0].checked) {
                    if (index === -1){
                    	scope.checkBoxGroupArray.push(scope.item.value);
                    	//console.log("array " + JSON.stringify(scope.checkBoxGroupArray));
                    }
                }
                
                
                // Remove if unchecked
                else {
                	//console.log("arraysdjgcjds");
                    if (index !== -1) scope.checkBoxGroupArray.splice(index, 1);
                    //console.log("array " + JSON.stringify(scope.checkBoxGroupArray));
                }
                /*// Sort and update DOM display
                scope.$apply(scope.checkBoxGroupArray.sort(function(a, b) {
                    return a - b
                }));*/
            });
        }
    }
});









