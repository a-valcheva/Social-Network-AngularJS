'use strict';

var socialNetworkApp = angular.module('socialNetworkApp', [])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/user/user-home-screen.html',
                controller: 'NewAdController'
            });
            //.otherwise({ redirectTo: '/customers' });
    });

