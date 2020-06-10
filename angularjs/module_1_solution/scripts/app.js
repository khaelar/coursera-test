"use strict";

(function(){
	angular.module("LunchCheck", [])
	.controller("LunchCheckController", DIController)
	
	DIController.$inject = ["$scope"];
	function DIController($scope){
		$scope.check = function(){
			let message, count;
			let input = $scope.lunchInput;
			if(input){
				count = input.split(",").length;
				if(count <= 3)
					message = "Enjoy!";
				else
					message = "Too much!";
			} else {
				message = "Please enter data first";
			}
			
			$scope.message = message;
		}
	}
})()