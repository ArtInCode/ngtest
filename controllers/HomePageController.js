NgTest.controller('HomePageController', ['$scope','$rootScope','Manager','localStorageService', 
   function($scope, $rootScope, Manager, localStorageService){

	//Getting Activ Flag
	var appLang =  localStorageService.get('appLang');

	//Getting data for current layout
	var currentData = Manager.getPageTexts(appLang); 

	//Setting Title
	//$rootScope.pageTitle = currentData['main']['appTitel'];

	//Setting Welcome title and text
	$scope.pageTitle = currentData['home']['pagetitle']; 
	$scope.pageText = currentData['home']['pagetext']; 

}]);