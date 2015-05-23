'use strict';

socialNetworkApp.factory('authenticationService', function(requester) {
    function login(){
        requester.authenticationRequest('POST', '/api/user/login');
    }

    function register(){
        requester.authenticationRequest('POST', '/api/user/register');
    }

    function logout(){
        delete sessionStorage['currentUser'];
    }

    return{
        login : login,
        register : register,
        logout : logout
    }
});
