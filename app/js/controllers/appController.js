'use strict';

socialNetworkApp.controller('SocialNetworkAppController',function ($scope, $location, authenticationService, notifyService) {
        $scope.authenticationService = authenticationService;

        $scope.logout = function() {
            authenticationService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
    }
);
