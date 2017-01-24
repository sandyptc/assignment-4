(function() {
'use strict'

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);
	
CategoriesController.$inject = ['categories']
function CategoriesController(response) {
	var ctrl = this;
	ctrl.categories = response.data;
}
	
})();