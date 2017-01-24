(function() {
'use strict'	

angular.module('MenuApp')
.config(RoutesConfig);
	
RoutesConfig.$inject = ['$stateProvider'];	
function RoutesConfig($stateProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/restaurant/templates/home.template.html'
		})
		.state('categories',{
			url: '/categories',
			templateUrl: 'src/restaurant/templates/categories.template.html',
			controller: 'CategoriesController as ctrl',
			resolve: {
				categories: ['MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		}).state('items', {
			url: '/items/{categoryShortName}',
			templateUrl: 'src/restaurant/templates/items.template.html',
			controller: 'ItemsController as ctrl',
			resolve: {
				items: ['$stateParams','MenuDataService',
				        	function($stateParams,MenuDataService) {
							return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
						}]
			}
		});
}	
	
})();