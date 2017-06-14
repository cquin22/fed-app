	angular.module('services', [])
	.factory('fedService', ['$http', '$rootScope', '$q', '$window', function ($http, $rootScope, $q, $window){
    var url = './info.json';
    $window.storageEvents = [];
    var service = {
     getAllEvents: function(){
      return $q(function(resolve, reject) {
        if($window.storageEvents.length > 0){
          resolve($window.storageEvents);
        }
        $http({
        url: url,
        method: "GET",
        crossDomain: true,
        async: true,
        jsonp: true,
        jsonpCallback: 'jsonCallback',
        dataType: 'json',
      }).then(function(response){
          $window.storageEvents = response.data.data;
          resolve(response.data.data);
        })
      });   
    },

    getEvent: function(id){
        for (var i in $window.storageEvents) {
            if ($window.storageEvents[i].id == id) {
                return $window.storageEvents[i];
            }
        }      
    },

    updateEvent: function(event){ 
        return $q(function(resolve, reject) {
          var updated = false;
          for (var i in $window.storageEvents) {
              if ($window.storageEvents[i].id == event.id) {
                  $window.storageEvents[i] = event;
                  updated = true;
              }
          }
          if(updated){
              resolve($window.storageEvents);
          }else{
            reject();
          } 
        });
      },

      getTotalEvents: function(event){
          return $window.storageEvents.length;
      },

      getEventType: function(type){
          var count = 0;
          for (var i in $window.storageEvents) {
              if ($window.storageEvents[i].tipo == type) {
                  count ++;
              }
          }
          return count;     
      },

      getVehiclesAffectedInIncidents: function(type){
          var count = 0;
          for (var i in $window.storageEvents) {
              if ($window.storageEvents[i].tipo == type) {
                  count =(count +  $window.storageEvents[i].vehiculosAfectados);
              }
          }
          return count;  
      },

      getEventsWithMinors: function(){
          var count = 0;
          for (var i in $window.storageEvents) {
              if ($window.storageEvents[i].edad < 18) {
                  count ++;
              }
          }
          return count;         
      }      

    };


    return service;

	}]);