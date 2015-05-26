angular.module("Dagaanbieding")

.controller("globalController", ['$scope', '$location', function($scope,  $location) {
    'use strict';

    $( document ).ready(function(){

        $(".button-collapse").sideNav();

    });

    $scope.isActive = function (viewLocation) {
        return $location.path() === viewLocation;
    };
}]);
