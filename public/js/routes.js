'use strict';

angular.module('appRoutes', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', { 
        templateUrl: 'views/home.html',
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'displayCtrl',
        controllerAs: 'dc'
      })
      .when('/advice', { 
        templateUrl: 'views/advice.html',
      })
      .when('/contact', { 
        templateUrl: 'views/contact.html',
      })
      .when('/aboutUs', { 
        templateUrl: 'views/aboutUs.html',
      })
      .when('/comments', { 
        templateUrl: 'views/comments.html',
      })
      .otherwise({ redirectTo: '/' });
  }]);