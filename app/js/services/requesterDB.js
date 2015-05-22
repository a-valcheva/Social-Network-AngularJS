'use strict';

socialNetworkApp.factory('requester', function requester($q, $http) {

        return function (method, url, headers, data) {
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
        };
});