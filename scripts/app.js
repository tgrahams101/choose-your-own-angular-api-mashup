angular.module('moviemusicApp', ['ngRoute'])
       .config(config);




////////////
// ROUTES //    //  SAVE THIS FOR LATER
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '../templates/index.html',
      controller: 'IndexController',
      controllerAs: 'indexControl'
    })
    .when('/?q=:searchinput', {
      templateUrl: '../templates/index.html',
      controller: 'IndexController',
      controllerAs: 'indexControl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
