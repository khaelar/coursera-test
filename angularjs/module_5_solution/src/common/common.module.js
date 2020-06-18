(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://angularjscourse-restaurant.herokuapp.com.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}
})();
