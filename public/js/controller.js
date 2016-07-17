angular.module('DuToan2')
    .constant("baseURL", "http://localhost/DuToan2/public/")
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