/**
 * Created by Abdullah on 4/19/2015.
 */
var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/login.html',
            controller: 'AccountCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'AccountCtrl'
        })
        .state('list',{
            url:'/list',
            templateUrl:'views/list.html',
            controller:'ListCtrl'
        });

});