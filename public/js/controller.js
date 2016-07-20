angular.module('DuToan2')
    .constant("baseURL", "http://localhost/DuToan2/public/")
    .controller('LoginController', ['$http', 'baseURL', '$scope', function ($http, baseURL, $scope) {
        gapi.load('auth2', function () {
            auth2 = gapi.auth2.init({
                client_id: '711327534359-06jkjslp3oqpmsrqmdivg3pk0go8pbud.apps.googleusercontent.com'
            });
        });
        $scope.name = '';
        $scope.onSignIn = function () {
            // keep somes informations on front-end

            // just for example
            $http({
                url: baseURL + 'testAuth',
                method: "GET",
                params: {token: auth2.currentUser.get().hg.id_token}
            }).then(function (response) {
                $scope.name = response.data;
            });
        };
        $scope.signOut = function () {
            auth2.disconnect();
        };

        gapi.signin2.render('signInButton',
            {
                'onsuccess': $scope.onSignIn
            });
    }])
    .controller('HomeController', ['$http', 'baseURL','$scope', function ($http, baseURL,$scope) {
        $scope.constructions = {};
        $http.get(baseURL + 'home').then(function (response) {
            $scope.constructions = response.data;
        });
    }])
    .controller('ConstructionController', ['$stateParams','$http', 'baseURL','$scope', function ($stateParams, $http, baseURL,$scope) {
        $scope.construction = {};
        $http.get(baseURL + 'construction/' + $stateParams.id).then(function (response) {
            $scope.construction = response.data;
        });
    }]);