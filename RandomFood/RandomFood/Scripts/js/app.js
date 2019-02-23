var app = angular.module("app", [])

app.controller("ClientesController", function ($scope, $http) {
    $scope.articulos = [];

    $http.get('/api/clientes').then(
        function (response) {
            debugger;
            $scope.clientes = response.data;
        })

})