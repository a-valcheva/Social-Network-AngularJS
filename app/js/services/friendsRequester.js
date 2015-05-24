'use strict';

socialNetworkApp.factory('friendsRequester', function(authenticationService){
    var headers = authenticationService.getAuthHeaders();
    function getRequests(requester){
        requester.simpleRequest('GET', 'me/requests', headers);
    }

    function sendFriendRequest(requester){
        requester.simpleRequest('POST', 'me/requests/{username}', headers);
    }

    function approveFriendRequest(requester){
        // TODO modify url
        requester.simpleRequest('PUT', 'me/requests/{requestId}?status={status}', headers);
    }

    function rejectFriendRequest(requester){
        // TODO modify url
        requester.simpleRequest('PUT', 'me/requests/{requestId}?status={status}', headers);
    }

    return{
        getRequests : getRequests,
        sendFriendRequest : sendFriendRequest,
        approveFriendRequest : approveFriendRequest,
        rejectFriendRequest : rejectFriendRequest
    }
});
