NgTest.controller('MainController',['$scope', '$rootScope', '$cookieStore', '$cookies','localStorageService','Manager',
  function($scope, $rootScope, $cookieStore,  $cookies,localStorageService, Manager){
	
	
	var logedUser = localStorageService.get('logedUser');
	if(logedUser){
		$rootScope.logedUser = true;
	}else{
		$rootScope.logedUser = false;
	}
	//localStorageService.set('logedUser', false);
	//Getting Activ Flag
	var appLang =  localStorageService.get('appLang');

	//Getting data for current layout
	var currentData = Manager.getPageTexts(appLang); 
	$scope.projectName = currentData['main']['projectName'];
	
	
	if(typeof  appLang !== 'undefined'){
		
		appLang = localStorageService.get('appLang');
		
	}else{
		localStorageService.set('appLang', 'en');
		appLang = 'en';
	}
	
	var menuItems = Manager.getMenu(); 
	var currentData = Manager.getPageTexts(appLang); 
	$scope.pageTitle = currentData['main']['appTitel'];
	
	$rootScope.menus = {
            'current': 'index',
            'current_lang':appLang,
            'items': menuItems[appLang],           
            'flags':Manager.getFlags()
            
        };
     
    $scope.UpdateLang = function(el){
    	
    	var lang =  $(el.target).data('lang');    	

    	localStorageService.set('appLang', lang);
    
    	window.location.reload();
	}
      
}]).directive('menuWrap', function($compile, $rootScope) {
  return {
  	restrict:'E',
    templateUrl: '/components/main.menu.html',
  
  };
}).directive('loginWrap', function($compile, $rootScope) {
  return {
  	restrict:'E',
    templateUrl: '/views/login.view.html',
  
  };
});
