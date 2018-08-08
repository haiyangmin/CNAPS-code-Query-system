angular.module('myApp')
.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partial/home.html',
            controller: 'BankInfoController',
            controllerAs: 'BankInfo'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);