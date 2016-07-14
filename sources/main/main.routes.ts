import app from 'main.module';

/**
 * Configures the application routes.
 */
function routeConfig($stateProvider: angular.ui.IStateProvider,
                     $urlRouterProvider: angular.ui.IUrlRouterProvider,
                     gettext: angular.gettext.gettextFunction) {

  // Routes configuration
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      template: <string>require('shell/shell.html'),
      controller: 'shellController as shell'
    })
    .state('app.festival', {
      url: '/',
      template: <string>require('festival/festival.html'),
      controller: 'homeController as vm',
      data: {title: gettext('Home')}
    })
    .state('app.artists', {
      url: '/artists',
      template: <string>require('screens/home/home.html'),
      controller: 'homeController as vm',
      data: {title: gettext('Artists')}
    })
    .state('app.map', {
      url: '/map',
      template: <string>require('screens/home/home.html'),
      controller: 'homeController as vm',
      data: {title: gettext('Map')}
    })
    .state('app.infos', {
      url: '/infos',
      template: <string>require('screens/home/home.html'),
      controller: 'homeController as vm',
      data: {title: gettext('Infos')}
    })
    .state('app.lineup', {
      url: '/lineup',
      template: <string>require('screens/about/about.html'),
      controller: 'aboutController as vm',
      data: {title: gettext('Lineup')}
    });

}

app.config(routeConfig);
