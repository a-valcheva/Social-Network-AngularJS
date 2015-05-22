'use strict';

socialNetworkApp.factory('postsRequester', function(requester){
    function getAllPosts(){
        return requester('GET', 'Posts');
    }

    return {
        getAllPosts : getAllPosts
    }
});
