'use strict';

socialNetworkApp.factory('postsRequester', function(authenticationService){
    var headers = authenticationService.getAuthHeaders();

    function getNewsFeed(requester){
        // TODO modify url
        requester.simpleRequest('GET', 'me/feed?StartPostId=&PageSize=5', headers);
    }

    return {
        getNewsFeed : getNewsFeed
    }
});
