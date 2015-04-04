angular.module("Dagaanbieding")

.controller("globalController", ['$scope', '$location', function($scope,  $location) {
    'use strict';
    
    $scope.isActive = function (viewLocation) {
        return $location.path() === viewLocation;
    };
}]);
