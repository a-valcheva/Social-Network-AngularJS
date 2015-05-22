'use strict';

socialNetworkApp.controller('LoadAllPosts', function ($scope, $log, postsRequester){
    postsRequester.getAllPosts().then(
        function(data){
            $scope.data = data;
        },
        function(error, status){
            $log.warn(status, error);
        })
});
