angular.module('RemarkableService', [])

.provider('remarkable', function() {
    'use strict';
    
    // Initialize needed variables
    var provider = {},
        md;
    
    // Initialize remarkable with the config passed by the user
    provider.init = function(config) {
        // Actual default values
        md = new Remarkable(config);
    };
    
    // Service functions
    provider.$get = function() {
        var factory = {};
        
        // Render markdown
        factory.render = function(markdown) {
            return md.render(markdown);
        };
        
        // Set options after init was executed
        factory.set = function(options) {
            md.set(options);
        };
        
        // Return functions
        return factory;
    };
    
    // Return provider
    return provider;
});