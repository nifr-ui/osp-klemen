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
        controller: 'serviceCtrl',
        controllerAs: 'ac'
      })
      .when('/advice', { 
        templateUrl: 'views/advice.html',
        controller: 'adviceCtrl',
        controllerAs: 'ac'
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