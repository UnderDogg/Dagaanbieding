angular.module("Dagaanbieding")

.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';

    ajaxService.get('./api/getDailyInfo/getAll', function (data) {
            // Convert date
            data.forEach(function (item) {
                console.log("old date", item.date);
                item.date = new Date(item.date);
                console.info("new date", item.date);
            });
            
            // Fill content object
            $scope.content = data;
    });
}]);