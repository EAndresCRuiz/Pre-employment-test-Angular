angular.module('AngularTest', [])
.controller('Controller', ['$scope','$http', function($scope, $http) {

	$scope.query = 0;
	$scope.patients = [];

  //load data from file "patients.json"
	$http.get('patients.json').then(function(resp){

          $scope.patients = resp.data.patients;

  });

  //function to do filter of greater than, it receive field name to filter (prop) and a value to compare (val)
  $scope.greaterThan = function(prop, val){
    return function(patient){
      return patient[prop] > val;
    }
  }

}])
.directive('list', [function() {
  return {

  	restrict: 'AEC',
    templateUrl: 'patient-template.html'

  };
}]);