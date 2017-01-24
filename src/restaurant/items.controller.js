(function() {
'use strict'

angular.module('MenuApp')
.controller('ItemsController',ItemsController);
	
ItemsController.$inject = ['items']
function ItemsController(response) {
	var ctrl = this;
	ctrl.items = response.data.menu_items;
	
}
	
})();