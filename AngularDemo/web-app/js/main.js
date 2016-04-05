angular.module('AngularDemo', ['ngRoute']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
    })
        .when('/settings', {
            templateUrl: "templates/settings.html",
            controller: 'SettingsController'
        })
        .when('/new-mail',{
            templateUrl: "templates/new-mail.html",
            controller: 'NewMailController'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(false);
}]);


/*angular.module('AngularDemo').config(['$routeProvider', Configuration]);

function Configuration($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
    })
        .when('/settings', {
            templateUrl: "templates/settings.html",
            controller: 'SettingsController'
        })
        .when('/new-mail', {
            templateUrl: "templates/new-mail.html",
            controller: 'NewMailController'
        })
        .otherwise({
            redirectTo: '/'
        });
}*/

//var app=angular.module('AngularDemo',['ngRoute']);
//
//app.config(function($routeProvider){
//    $routeProvider.when('/',{
//        templateUrl: "templates/home.html",
//        controller: 'HomeController'
//    })
//        .when('/settings',{
//            templateUrl: "templates/settings.html",
//            controller: 'SettingsController'
//        })
//
//        .otherwise({redirectTo: '/'});
//});
//app.controller('HomeController',function(){
//
//});
//
//app.controller('SettingsController',function(){
//
//});