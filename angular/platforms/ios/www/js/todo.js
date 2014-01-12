var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'template/login.html',
        controller: 'loginCtrl'
      }).
      when('/contact', {
        templateUrl: 'template/contact.html',
        controller: 'contactCtrl'
      }).
      when('/home', {
        templateUrl: 'template/home.html',
        controller: 'toDoCtrl'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);

