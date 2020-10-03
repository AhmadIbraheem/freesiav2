(function () {


angular.module('myApp',['ui.router']);

angular.module('myApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'src/home-main.html'
    })
   .state('contact-us', {
      url: '/contact-us',
      templateUrl: 'src/contact-us.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'src/portfolio.html'
    })
    .state('services', {
      url: '/services',
      templateUrl: 'src/services.html'
    })
     .state('vmv', {
      url: '/vmv',
      templateUrl: 'src/vmv.html'
    })  .state('slider', {
      url: '/slider',
      templateUrl: 'src/slider.html'
    })  .state('buisnessProfile', {
      url: '/buisnessProfile',
      templateUrl: 'src/buisnessProfile.html'
    })
     ;
}

	// body...
})();