"use strict";

(function(){
	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService)
	
	ToBuyController.$inject = ["$scope", "ShoppingListCheckOffService"];
	function ToBuyController($scope, ShoppingListCheckOffService){
		$scope.items = ShoppingListCheckOffService.toBuy;
		$scope.moveToBoughtList = ShoppingListCheckOffService.moveToBoughtList;
	}
	
	AlreadyBoughtController.$inject = ["$scope", "ShoppingListCheckOffService"];
	function AlreadyBoughtController($scope, ShoppingListCheckOffService){
		$scope.items = ShoppingListCheckOffService.bought;
	}
	
	function ShoppingListCheckOffService(){
		let service = this;
		
		service.toBuy = [];
		service.bought = [];
		
		service.toBuy.push({name: "cookies", quantity: 100});
		service.toBuy.push({name: "sugar drinks", quantity: 5});
		service.toBuy.push({name: "milk", quantity: 10});
		service.toBuy.push({name: "fish", quantity: 7});
		service.toBuy.push({name: "toilet paper", quantity: 100});
		
		service.moveToBoughtList = function(index){
			service.bought.push(service.toBuy[index]);
			service.toBuy.splice(index, 1);
		}
	}
})()