  angular.module('myApp.indicators', [])
    .controller('indicatorsCtrl', ['$scope', 'fedService', function ($scope, fedService) {
        $scope.total = {
            events: fedService.getTotalEvents(),
            incidents: fedService.getEventType("incidente"),
            accidents: fedService.getEventType("accidente"),
            eventsWithMinors: fedService.getEventsWithMinors(),
            vehiclesAffectedInIncidents: fedService.getVehiclesAffectedInIncidents("incidente"),
            vehiclesAffectedAccidents: fedService.getVehiclesAffectedInIncidents("accidente"),
        }

    }]); 