
var testApp = angular.module('questApp', ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/index',
        {
            templateUrl: 'views/indexView.html',
            controller: 'indexConroller'
        })

        $routeProvider.when('/dashboard',
        {
            templateUrl: 'assets/app/Admin/partials/indexMain.html',
            controller: 'mainCtrl'
        })
         .when('/page1',
        {
            templateUrl: '/views/view1.html',
            controller: 'conroller1'
        })
        .when('/page2',
        {
            templateUrl: '/views/view2.html',
            controller: 'conroller2'
        })
         .otherwise({
             redirectTo: '/dashboard'
         });

        $locationProvider.html5Mode(true).hashPrefix("!");
    });

