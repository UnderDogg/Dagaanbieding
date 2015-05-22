angular.module("Dagaanbieding")

.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';

    ajaxService.get('./api/getDailyInfo/getAll', function(data) {
            // Convert date
            data.forEach(function(item) {
                item.date = new Date(item.date);
            });
            
            // Fille content object
            $scope.content = data;
    });
}]);