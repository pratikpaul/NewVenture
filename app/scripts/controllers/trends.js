'use strict';

/**
 * @ngdoc function
 * @name newVentureApp.controller:TrendsCtrl
 * @description
 * # TrendsCtrl
 * Controller of the newVentureApp
 */
angular.module('newVentureApp')
  .controller('TrendsCtrl', function ($scope, $location) {

    $scope.home = function(){
      $location.path("/home");
    }
  });
