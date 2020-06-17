(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

categoriesController.$inject = ['items'];
function categoriesController(items) {
  var categories = this;
  categories.items = items;
}

})();