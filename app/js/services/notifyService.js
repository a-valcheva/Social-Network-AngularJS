'use strict';

app.factory('notifyService', function () {
        function showInfo(){


            noty({
                    text: msg,
                    type: 'info',
                    layout: 'topCenter',
                    timeout: 5000}
            );
        }

        function showError(){


            noty({
                    text: msg,
                    type: 'error',
                    layout: 'topCenter',
                    timeout: 5000}
            );
        }
        return {
            notify : showInfo,
            showError : showError
        }
    });

