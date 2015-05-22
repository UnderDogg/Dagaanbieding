angular.module("Dagaanbieding")

.controller("historyController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';

    // Initialises the MaterializeCSS select fields.
    $(document).ready(function() {
        $('select').material_select();
    });


    ajaxService.get('./api/getDailyInfo/getAll', function(data) {
            // Convert date
            data.forEach(function(item) {
                item.date = new Date(item.date);
            });
            
            // Fille content object
            $scope.content = data;
    });
}]);