'use strict';

/**
 * @ngdoc function
 * @name newVentureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newVentureApp
 */
angular.module('newVentureApp')
  .controller('MainCtrl', function ($scope,$location,$cookies) {

    //$scope.checkForCookie = function(){
      if($cookies.get("key") === "1"){
        $location.path("/home");
      }else{
        $location.path("/login");
      }

      $scope.removeCookie = function(){
        $cookies.remove("key");
        $location.path("/login")
      };
    //};
  });
