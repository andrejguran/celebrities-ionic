// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.utils'])

.run(function($ionicPlatform, $localstorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if ($localstorage.getObject('app').location != undefined) {
      window.location = "/#/" + $localstorage.getObject('app').location;
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl"
    })
    .state('players', {
      url: "/players",
      templateUrl: "templates/players.html",
      controller: "PlayersCtrl"
    })
    .state('celebrities', {
      url: "/celebrities/:player",
      templateUrl: "templates/celebrities.html",
      controller: "CelebritiesCtrl"
    })
  ;

  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});