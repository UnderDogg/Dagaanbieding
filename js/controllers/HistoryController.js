var historyApp = angular.module("Dagaanbieding")

historyApp.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';
    $scope.allData = [];
    $scope.content = [];
    $scope.selectedMonth = "";
    $scope.selectedYear = "";

    $scope.filterData = function () {
        var month = $scope.selectedMonth;
        var year = $scope.selectedYear;

        console.log("month", month);
        console.log("year", year);

        if (month !== "" && year !== "") {
            $scope.content = [];
            $scope.allData.forEach(function (item) {
                console.log(item.date.getFullYear(), year, item.date.getFullYear() === year);
                console.log(item.date.getMonth(), month, item.date.getMonth() === month);
                if (year === item.date.getFullYear() && month === item.date.getMonth()) {
                    $scope.content.push(item);
                    console.log("Match!");
                } else {
                    console.log("No Match!")
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