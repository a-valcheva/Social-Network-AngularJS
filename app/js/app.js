'use strict';

var socialNetworkApp = angular.module('socialNetworkApp', [])
    .socialNetworkApp.constant('BASE_URL', 'http://softuni-social-network.azurewebsites.net/api/')
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'templates/user/user-home-screen.html',
                controller: 'LoadAllPosts'
            });
            //.otherwise({ redirectTo: '/customers' });
    });

