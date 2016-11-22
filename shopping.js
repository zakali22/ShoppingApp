var app = angular.module("shoppingApp", []);
app.controller("shopController", function($scope){
	$scope.baskets = ["Mango", "Citrus", "Banana"];
	$scope.addItem = function(){
		$scope.errorText = "";
		if ($scope.baskets.indexOf($scope.addThing) === -1){
			$scope.baskets.push($scope.addThing);
		} else {
			$scope.errorText = "This item already exist in the basket";
		}
	}
	$scope.removeItem = function(i){
		$scope.baskets.splice(i, 1);
	}
});