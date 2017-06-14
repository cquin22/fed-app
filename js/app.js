var app = angular.module('app', ['ngRoute', 'services', 'myApp.main', 'myApp.event', 'myApp.indicators'])


app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    })
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    })
    .when('/incidente/:id', {
      templateUrl: 'views/event.html',
      controller: 'eventCtrl'
    })
    .when('/indicadores', {
      templateUrl: 'views/indicators.html',
      controller: 'indicatorsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });



}]);