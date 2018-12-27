'use strict';

/**
 * @ngdoc function
 * @name newVentureApp.controller:LandingpageCtrl
 * @description
 * # LandingpageCtrl
 * Controller of the newVentureApp
 */
angular.module('newVentureApp')
  .controller('LandingpageCtrl', function ($scope, $location) {

    $scope.getStarted = function(){
      $location.path("/guests");
    };

  });
