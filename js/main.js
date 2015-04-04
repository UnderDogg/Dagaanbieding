angular.module("Dagaanbieding", ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    'use strict';   

    // HTML5Mode yay :D
    $locationProvider.html5Mode(true).hashPrefix('!');

    // Routes
    $routeProvider.when('/', {
        templateUrl : "views/index.html",
        controller : "homeController"
    })
    .when('/history', {
        templateUrl : "views/history.html",
        controller : "historyController"
    })
    .when('/about', {
        templateUrl : "views/about.html",
        controller : "homeController"
    })
    .otherwise({
        redirectTo : '/'
    });
}]); 