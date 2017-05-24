'use strict';

/**
 * @ngdoc overview
 * @name inspoDiaryAppApp
 * @description
 * # inspoDiaryAppApp
 *
 * Main module of the application.
 */
angular
  .module('inspoDiaryAppApp', [
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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
