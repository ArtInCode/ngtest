NgTest.controller('AboutController', ['$scope','$rootScope', 'Manager', 'localStorageService', 
	function($scope, $rootScope,Manager, localStorageService){
	//Getting Activ Flag
	var appLang =  localStorageService.get('appLang');

	//Getting data for current layout
	var currentData = Manager.getPageTexts(appLang); 

	//Setting Title
	//$rootScope.pageTitle = currentData['main']['appTitel'];

	//Setting Welcome title and text
	$scope.pageTitle = currentData['about']['pagetitle']; 
	$scope.pageText = currentData['about']['pagetext']; 
}]);