var historyApp = angular.module("Dagaanbieding")

historyApp.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';
    $scope.allData = [];
    $scope.content = [];
    $scope.selectedMonth = "";
    $scope.selectedYear = "";

    $scope.filterData = function () {
        console.log($scope.selectedMonth, $scope.selectedYear, parseInt($scope.selectedMonth), parseInt($scope.selectedYear));
        var month = parseInt($scope.selectedMonth);
        var year = parseInt($scope.selectedYear);

        if (month !== 999 && year !== 999) {
            console.log("Passed the IF statement...");
            $scope.content = [];

            $scope.allData.forEach(function (item) {
                if (year === item.date.getFullYear() && month === item.date.getMonth()) {
                    $scope.content.push(item);
                }
            });
        }
    };

    ajaxService.get('./api/getDailyInfo/getAll', function (data) {
        var currentDate = new Date();

        data.forEach(function (item) {
            item.date = new Date(item.date);
            if (currentDate.getFullYear() === item.date.getFullYear() && currentDate.getMonth() === item.date.getMonth()) {
                $scope.content.push(item);
            }
        });

        $scope.allData = data;
    });
}]);