var historyApp = angular.module("Dagaanbieding")

historyApp.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';
    $scope.allData = [];
    $scope.content = [];
    $scope.selectedMonth = "";
    $scope.selectedYear = "";

    $scope.filterData = function () {
        $scope.content = [];

        var month = $scope.selectedMonth;
        var year = $scope.selectedYear;

        if (month !== "" && year != "") {
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

        console.log($scope.content);

        $scope.allData = data;
    });
}]);