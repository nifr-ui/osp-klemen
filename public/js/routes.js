"use strict";

angular.module("appRoutes", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "homeCtrl",
        controllerAs: "ac",
      })
      .when("/services", {
        templateUrl: "views/services.html",
        controller: "serviceCtrl",
        controllerAs: "ac",
      })
      .when("/advice", {
        templateUrl: "views/advice.html",
        controller: "adviceCtrl",
        controllerAs: "ac",
      })
      .when("/comments", {
        templateUrl: "views/comments.html",
        controller: "commentsCtrl",
        controllerAs: "ac",
      })
      .otherwise({ redirectTo: "/" });
  },
]);
