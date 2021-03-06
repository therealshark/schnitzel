(function () {
    var app = angular.module('schnitzelAdmin', [
        'naif.base64', 'ngRoute', 'menu', 'location', 'riddle', 'tag', 'login', 'status', 'config', 'auth'
    ]);

    app.config(['$routeProvider',routeProvider]);

    app.config(['$httpProvider', Interceptor]);

    function routeProvider($routeProvider){
        $routeProvider.

        when('/listriddles', {
            templateUrl: 'templates/listview.html',
            controller: 'RiddleListCtrl'
        }).
        when('/addriddle', {
            templateUrl: 'templates/riddleform.html',
            controller: 'RiddleEntryCtrl'
        }).
        when('/editriddle/:id', {
            templateUrl: 'templates/riddleform.html',
            controller: 'RiddleEntryCtrl'
        }).
        when('/listlocations', {
            templateUrl: 'templates/listview.html',
            controller: 'LocationListCtrl'
        }).
        when('/addlocation', {
            templateUrl: 'templates/locationform.html',
            controller: 'LocationEntryCtrl'
        }).
        when('/editlocation/:id', {
            templateUrl: 'templates/locationform.html',
            controller: 'LocationEntryCtrl'
        }).
        when('/listtags', {
            templateUrl: 'templates/listview.html',
            controller: 'TagListCtrl'
        }).
        when('/addtag', {
            templateUrl: 'templates/tagform.html',
            controller: 'TagEntryCtrl'
        }).
        when('/edittag/:id', {
            templateUrl: 'templates/tagform.html',
            controller: 'TagEntryCtrl'
        }).
        when('/login', {
            templateUrl: 'templates/loginform.html',
            controller: 'LoginCtrl'
        }).
        when('/liststatuss', {
            templateUrl: 'templates/status.html',
            controller: 'StatusCtrl'
        }).
        when('/listconfigs', {
            templateUrl: 'templates/configform.html',
            controller: 'ConfigCtrl'
        }).
        when('/', {
            redirectTo: '/login'
        }).
        otherwise({
            redirectTo: '/'
        });
    }

    function Interceptor($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }

})();