(function(){
  'use strict';
  angular.module('CoreAuth.Controllers')
    .controller('GenericLoginCtrl', ['$scope', 'authService', function($scope, authService){
      $scope.username = null;
      $scope.password = null;
      $scope.errors = {
        username: [],
        password: [],
        form: []
      };
      $scope.login = function(){
        authService.logIn($scope.username, $scope.password).error(function(data, status, headers, config){
          $scope.errors = data.errors;
        })
      }
    }])
    .controller('GenericSignupCtrl', ['$scope', 'authService', function($scope, authService){
      $scope.message = null;
      $scope.username = null;
      $scope.email = null;
      $scope.password = null;
      $scope.errors = {
        username: [],
        email: [],
        password: [],
        form: []
      };
      $scope.signup = function(){
        authService.signUp($scope.username, $scope.email, $scope.password)
          .success(function(data, status, headers, config){
            $scope.message = "Successfully signed up. Check your email for confirmation"
          })
          .error(function(data, status, headers, config){
            $scope.errors = data.errors;
          })
      }
    }])
})();