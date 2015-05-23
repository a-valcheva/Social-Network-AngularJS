'use strict';

socialNetworkApp.factory('authenticationService', function(BASE_URL, requester) {
    function login(){
        requester.authenticationRequest('POST', BASE_URL + '/api/user/login');
    }

    function register(){
        requester.authenticationRequest('POST', BASE_URL + '/api/user/register');
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
