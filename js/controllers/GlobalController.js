angular.module("Dagaanbieding")

.controller("globalController", ['$scope', '$location', function($scope,  $location) {
    'use strict';

    $( document ).ready(function(){

        $(".button-collapse").sideNav({
            menuWidth: 250, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });

    });

    $scope.isActive = function (viewLocation) {
        return $location.path() === viewLocation;
    };
}]);
