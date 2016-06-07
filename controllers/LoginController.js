NgTest.controller('LoginController', ['$scope','$rootScope','Manager','localStorageService','$http',
  function($scope, $rootScope,Manager, localStorageService, $http){
	

	//Getting Activ Flag
	var appLang =  localStorageService.get('appLang');

	//Getting data for current layout
	var currentData = Manager.getPageTexts(appLang); 
	$scope.required = currentData['error_msg']['required'];
	$scope.not_email = currentData['error_msg']['not_email'];
	$scope.short_string = currentData['error_msg']['short_string'];
	$scope.login_buton = currentData['labels']['login_buton'];
	$scope.pass_label = currentData['labels']['pass_label'];
	$scope.email_label = currentData['labels']['email_label'];
	$scope.wrong_email = currentData['error_msg']['wrong_email'];
	$scope.wrong_pass = currentData['error_msg']['wrong_pass'];

	$scope.meil_error = false; 
	$scope.pass_error=false;
	$scope.db_wrong_email= false;
	$scope.db_wrong_pass = false;


	$scope.submitForm = function(loginForm){
		$scope.$watch('loginForm', function() {
			var errorCount = 0;
			console.log(errorCount);
		   if($scope.loginForm.email.$dirty == false || $scope.loginForm.email.$valid == false){
		   		$scope.meil_error = true; 
		   		errorCount++;
		   }else{
		   		$scope.meil_error = false;
		   		
		   }

		   if($scope.loginForm.password.$dirty == false || $scope.loginForm.password.$valid == false){
		   	
		   		$scope.pass_error  = true; 
		   		errorCount++;
		   }else{
		   		$scope.pass_error  = false;
		   		
		   }
		 console.log($scope.loginForm.password);
		   if(errorCount==0){
		   	console.log("okokoko");
		   	var login = $scope.loginForm.email.$viewValue,
		   	pass=$scope.loginForm.password.$viewValue;
		   		var formData = {
		   			'login':login,
		   			'pass':pass,
		   		};

		   		 var config = {
	                headers : {
	                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
	                }
	            }
		   		 $http.post("/action.php", $.param(formData),  config)
	    			.success(function(response) {
	    				 var logData = response;
	    				 console.log(logData);
	    				 console.log(formData);
	    				
	    				 var dbErrors = 0;

	    				 if(logData.login != login){
	    				 	$scope.db_wrong_email  = true; 
	    				 	dbErrors++;
	    				 }
	    				  if(logData.pass != pass){
	    				 	$scope.db_wrong_pass   = true; 
	    				 	dbErrors++;
	    				 }
	    				 console.log(dbErrors);
	    				 if(dbErrors==0){
							localStorageService.set('logedUser', true);
		   					$rootScope.logedUser = true;
	    				 }
	    				
	    			}).error(function (data, status, header, config) {
	    				console.log(data)
            }); 
		   		
		   		
		   }
		  
	   
	  });
	}


	$scope.scanForm = function(form){
		

		// if($scope.user_email.$valid == false){
		// 	$scope.meil_error = true; 
		// } else {
		// 	$scope.meil_error = false; 
		// }

		/*if($scope.user_pass.$valid == false){
			
		} else {
			$scope.pass_error = false; 
		}*/
		
		//$rootScope.logedUser = true;
		//localStorageService.set('logedUser', true);
		//window.location.reload();
	}
}]); 
