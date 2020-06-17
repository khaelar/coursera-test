(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  
  .state('home', {
    url: '/',
    templateUrl: 'templates/main.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories-view.template.html',
    controller: 'categoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  .state('items', {
    url: '/items/{itemShortName}',
    templateUrl: 'templates/categories-view.template.html',
    controller: 'itemsController as items',
    resolve: {
      menuitems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemShortName);
            }]
    }
  });
}

})();