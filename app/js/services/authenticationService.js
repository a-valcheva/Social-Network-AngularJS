'use strict';

socialNetworkApp.factory('authenticationService', function(requester) {
    function login(){
        requester.authenticationRequest('POST', '/api/user/login');
    }

    function register(){
        requester.authenticationRequest('POST', '/api/user/register');
    }

    function getCurrentUser() {
        var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    }

    function logout(){
        delete sessionStorage['currentUser'];
    }

    function getAuthHeaders() {
        var headers = {};
        var currentUser = this.getCurrentUser();
        if (currentUser) {
            headers['Authorization'] = 'Bearer ' + currentUser.access_token;
        }
        return headers;
    }

    return{
        login : login,
        register : register,
        logout : logout,
        getCurrentUser : getCurrentUser,
        getAuthHeaders : getAuthHeaders
    }
});
