  angular.module('myApp.main', [])
    .controller('mainCtrl', ['$scope', 'fedService', function ($scope, fedService) {
        $scope.events = [];
        fedService.getAllEvents().then(function(response){
            $scope.events = response;
        });

        $scope.$on('UPDATE_EVENTS', function (event, response) {
            $scope.events = response;
        });


    }]); 