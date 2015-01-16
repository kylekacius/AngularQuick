'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

demoApp.controller('SimpleController', function($scope){
    $scope.customers = [
    {name: 'John Smith', city: 'Phoenix'},
    {name: 'John Doe', city: 'New York'}
    ];

    $scope.addCustomer = function(){
        $scope.customers.push(
            {name: $scope.newCustomer.name, 
             city: $scope.newCustomer.city
         });
    };
});

demoApp.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'Partials/View1.html'
        })
        .when('/partial2',
        {
            controller: 'SimpleController',
            templateUrl: 'Partials/View2.html'
        })
        .otherwise({ redirectTo:'/'});
});