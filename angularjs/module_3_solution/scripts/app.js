"use strict";

(function(){
	angular.module("NarrowItDownApp", [])
	.controller("NarrowItDownController", NarrowItDownController)
	.service("MenuSearchService", MenuSearchService)
	.directive("foundItems", FoundItems);
	
	NarrowItDownController.$inject = ["MenuSearchService"];
	function NarrowItDownController(MenuSearchService){
		let ctrl = this;
		ctrl.found = [];
		ctrl.buttonClicked = false;
		
		ctrl.btclick = function(){
			MenuSearchService.getMatchedMenuItems(ctrl.searchStr)
			.then(function(result){
				ctrl.found = result;
			});
			ctrl.buttonClicked = true;
		}
		
		ctrl.removeItem = function(itemIndex){
			ctrl.found.splice(itemIndex, 1);
		}
	}
	
	MenuSearchService.$inject = ["$http"];
	function MenuSearchService($http){
		let service = this;
		
		service.getMatchedMenuItems = function(searchTerm){
			return $http({url: "https://davids-restaurant.herokuapp.com/menu_items.json"})
			.then(function(result){
				let foundItems = result.data.menu_items.filter(a => ~a.description.indexOf(searchTerm));
				return foundItems;
			});
		}
	}
	
	function FoundItems(){
		let ddo = {
			templateUrl: "foundItems.html",
			scope: {
				found: '<',
				onRemove: '&',
				buttonClicked: '<'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'ctrl',
			bindToController: true
		};
		
		return ddo;
	}
	
	function FoundItemsDirectiveController(){
		let ctrl = this;
	}
})()