var app = angular.module("myToDo", []); 
app.controller("myList", function($scope) {
    $scope.goals = ["Volunteer", "Read", "Jog"];
    $scope.addButton = function () {
        $scope.errortext = " ";
        if (!$scope.addThis) {return;}
        if ($scope.goals.indexOf($scope.addThis) == -1) {
            $scope.goals.push($scope.addThis);
        } else {
            $scope.errortext = "The goal is already in your list.";
        }
		$scope.addThis= ' ';
    }
    $scope.removeItem = function (x) {
        $scope.errortext = " ";    
        $scope.goals.splice(x, 1);
    }
});