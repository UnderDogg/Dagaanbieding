angular.module("Dagaanbieding")

.controller("homeController", ['$scope', '$location', 'ajaxService', function($scope,  $location, ajaxService) {
    'use strict';
    
    ajaxService.get('api/getDailyInfo/getlatest', function(data) {
        // Check if there were any errors
        if(data.error) {
            switch(data.error) {
                // When there is no content fill the content object with custom information
                case 'noContent':
                    var date = new Date();
                    
                    if(date.getDay() === 0 || date.getDay() === 6) {
                        $scope.content = {
                            name: "Er is geen dagaanbieding in het weekend!",
                            picture: "./images/smileyFace.jpg",
                            date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
                        }                    	
                    }
                    else {
                        $scope.content = {
                            name: "geen dagaanbieding vandaag",
                            picture: "./images/sadFace.jpg",
                            date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
                        }
                    }
                break;
            }
        }
        else {
            // Fill the content object with content gathered from the api call
            $scope.content = data;
        }
        
        console.log(data);
    });
}]);