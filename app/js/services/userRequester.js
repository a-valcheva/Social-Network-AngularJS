'use strict';

socialNetworkApp.factory('userRequester', function(authenticationService){
    var headers = authenticationService.getAuthHeaders();

    function searchUsername(requester){
        // TODO modify url
        requester.simpleRequest('GET', 'users/search?searchTerm={searchTerm}', headers)
    }

    return{
        searchUsername : searchUsername
    }
});
