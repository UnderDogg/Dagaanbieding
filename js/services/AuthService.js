angular.module('Auth', ['ngCookies'])

.factory('Auth', ['ajaxService', function(ajaxService) {
    'use strict';

    var user = null;

    return {
        login: function(username, password) {
            var obj = {"username" : username, "password" : password};
        
            ajaxService.post('./api/general.php?mode=login', obj, function(response) {
                user = response;
                
                return user;
            });
        },
        
        logout: function() { 
            ajaxService.get('./api/general.php?mode=logout', function(response) {
                if(response === true) {
                    user = null;
                }
            
                return response;
            });   
        }, 
        
        revive: function() {
            ajaxService.get('./api/general.php?mode=getUser', function(response) {
                user = response;
                
                return user;
            });   
        },
        
        isLoggedIn: function() {
            if(user !== null) {
                return user.loggedIn;
            }
        }
    };
}]); 