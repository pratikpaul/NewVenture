'use strict';

/**
 * @ngdoc function
 * @name newVentureApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the newVentureApp
 */
angular.module('newVentureApp')
  .controller('LoginCtrl', function($scope, $location, $cookies, $http) {

    $scope.user_cred = {
      "userName": "",
      "password": ""
    }

    $scope.user_info = {
      "firstName": "",
      "lastName": "",
      "city": "",
      "state": "",
      "email": "",
      "userName": "",
      "password": ""
    }

    $scope.moveToHome = function() {

      var parameter = JSON.stringify($scope.user_cred);
      $http.post("http://localhost:8080/InspiredLearning/rest/validateUser", parameter).
      then(function(response) {
        if (response.data === "Validated") {
          $cookies.put("key", "1");
          $location.path("/home");
        }
      });
      /*  if ($scope.user_info.user === "admin" && $scope.user_info.password === "admin") {
          $cookies.put("key","1");
          $location.path("/home");

        }*/
    };

    $scope.createAccount = function() {

      if ($scope.userForm.$valid) {
        var param = JSON.stringify($scope.user_info);
        $http.post("http://localhost:8080/InspiredLearning/rest/createUser", param).
        then(function(response) {
          if (response.status === 200) {
            alert("account successfully created. Please login");
          }
        });
      }
    }

  });
