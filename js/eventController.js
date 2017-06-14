  angular.module('myApp.event', [])
    .controller('eventCtrl', ['$scope', '$route', '$rootScope', 'fedService', function ($scope, $route, $rootScope, fedService) {
        $scope.event = {};
        $scope.isUpdated = false;
        $scope.event =  fedService.getEvent($route.current.params.id);

        $scope.update = function(){
            fedService.updateEvent($scope.event).then(function(response){
                $scope.isUpdated = true;
            })
        }

    }]); 