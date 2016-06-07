
NgTest.config(function($stateProvider, $urlRouterProvider, $locationProvider)
	{
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('/', {
				
				url: '/',
				templateUrl:'/views/home.view.html',
				controller:'HomePageController'				
			})
			.state('ru', {
				
				url: '/ru',
				templateUrl:function ($stateParams){
					return '/views/home.view.html';
				 }
			})
			.state('ru-pages', {
				
				url: '/ru/:page',
				templateUrl:function ($stateParams){					
				    return '/views/' + $stateParams.page + '.view.html';
				}
						 
			})
			.state('en', {
				
				url: '/en',
				templateUrl:function ($stateParams){
					return '/views/home.view.html';
				  }
							 
			})
			.state('en-pages', {
			
				url: '/en/:page',
				templateUrl:function ($stateParams){					
				    return '/views/' + $stateParams.page + '.view.html';
				}				 
			});


			$locationProvider.html5Mode({
						  enabled: true,
						  requireBase: false
						});


	});