
(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

itemsController.$inject = ['menuitems']
function itemsController(menuitems) {
  var items = this;
  
  items.menuitems = menuitems.menu_items;
  items.category = menuitems.category;
}

})();
