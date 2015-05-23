'use strict';

socialNetworkApp.factory('requester', function requester($q, $http) {

    function authenticationRequest(method, url, headers, data){
        var deferred = $q.defer();
        var request = {
            method: method,
            url: 'BASE_URL' + url,
            headers: headers || null,
            data: data || null
        };

        $http(request)
            .success(function(data){
                sessionStorage['currentUser'] = JSON.stringify(data);
                deferred.resolve(data);
            })
            .error(deferred.reject);

        return deferred.promise;
    }

    return{
        authenticationRequest : authenticationRequest
    };
        /*return function (method, url, headers, data) {
            var deferred = $q.defer();

            $http({
                method: method,
                url: 'BASE_URL' + url,
                headers: headers || null,
                data: data || null
            })
                .success(deferred.resolve)
                .error(deferred.reject);

            return deferred.promise;
        };*/
});