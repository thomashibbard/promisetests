angular.module('test', [])
  .controller('ctrl', function($scope, RWService){
    $scope.rw = function(type){
      RWService.rw(type)
      .then(
        function(res){
          console.log('success');
      }, 
        function(err){
          console.log('error');
      })
    };
  })
  .service('RWService',['$http', '$q', function($http, $q){
    this.rw = function(type){
      var promise = $http.get('./rw/' + type);
      var dfd = $q.defer();
      promise.then(
        function(successResponse){
          dfd.resolve(successResponse);
        }, 
        function(errorResponse){
          dfd.reject(errorResponse);
        }
      );
      return dfd.promise;
    };
  }]);