'use strict';

/**
 * @ngdoc overview
 * @name newVentureApp
 * @description
 * # newVentureApp
 *
 * Main module of the application.
 */
angular
  .module('newVentureApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/landingPage', {
        templateUrl: 'views/landingpage.html',
        controller: 'LandingpageCtrl',
        controllerAs: 'landingPage'
      })
      .when('/guests', {
        templateUrl: 'views/guests.html',
        controller: 'GuestsCtrl',
        controllerAs: 'guests'
      })
      .when('/servicePage', {
        templateUrl: 'views/servicepage.html',
        controller: 'ServicepageCtrl',
        controllerAs: 'servicePage'
      })
      .when('/trends', {
        templateUrl: 'views/trends.html',
        controller: 'TrendsCtrl',
        controllerAs: 'trends'
      })
      .otherwise({
        redirectTo: '/landingPage'
      });
  });
