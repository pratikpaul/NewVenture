'use strict';

/**
 * @ngdoc function
 * @name newVentureApp.controller:GuestsCtrl
 * @description
 * # GuestsCtrl
 * Controller of the newVentureApp
 */
angular.module('newVentureApp')
  .controller('GuestsCtrl', function($scope, $location) {

    $(document).ready(function() {
      $("#register-btn").click(function() {
        $("#myModal").modal("toggle");
      });
    });

    $scope.goToLogin = function() {
      $location.path("/login");
    };

    $scope.toTrends = function() {
      $location.path("/trends");
    };
  });
