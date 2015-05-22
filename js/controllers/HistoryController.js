var historyApp = angular.module("Dagaanbieding")

historyApp.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';
    $scope.allData = [];
    $scope.content = [];

    $scope.filterData = function () {
        var month = $scope.selectedMonth;
        var year = $scope.selectedYear;

        if (month !== "" && year != "") {

        }
    };

    ajaxService.get('./api/getDailyInfo/getAll', function (data) {
        var currentDate = new Date();

        data.forEach(function (item) {
            item.date = new Date(item.date);
            console.log(currentDate.getFullYear());
            console.log(item.date.getFullYear());
            console.log(currentDate.getMonth());
            console.log(item.date.getMonth());
            if (currentDate.getFullYear() === item.date.getFullYear() && currentDate.getMonth() === item.date.getMonth()) {
                $scope.content.push(item);
            }
        });

        $scope.allData = data;
    });
}]);