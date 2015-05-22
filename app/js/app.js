'use strict';

var socialNetworkApp = angular.module('socialNetworkApp', [])
    .socialNetworkApp.constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/')
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/public/home.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/public/login.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/register', {
                templateUrl: 'templates/public/register.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/users/:username', {
                templateUrl: 'templates/user/user-wall.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/users/:username/friends', {
                templateUrl: 'templates/user/user-wall.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/profile', {
                templateUrl: 'templates/user/user-wall.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/profile/password', {
                templateUrl: 'templates/user/user-wall.html'
                //controller: 'LoadAllPosts'
            });
        $routeProvider
            .when('/logout', {
                templateUrl: 'templates/user/user-wall.html'
                //controller: 'LoadAllPosts'
            });
            //.otherwise({ redirectTo: '/customers' });
    });

