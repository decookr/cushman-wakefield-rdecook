var myApp = angular.module('myApp', ['ngRoute', 'chart.js', 'rzModule']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/admin.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    // Begin survey views
    .when('/survey/:surveyHash', {
      templateUrl: '/views/templates/survey.html',
      controller: 'SurveyController as sc'
    })
    .when('/buildsurvey', {
      templateUrl: '/views/templates/buildsurvey.html',
      controller: 'BuildSurveyController as bs'
    })
    .when('/build-survey-review/:amenitiesAdded/:brandAdded/:locationAdded/:retainmentAdded', {
      templateUrl: '/views/templates/build-survey-review.html',
      controller: 'BuildSurveyReviewController as br'
    })
    .when('/build-survey-contact-info/:amenitiesAdded/:brandAdded/:locationAdded/:retainmentAdded', {
      templateUrl: '/views/templates/build-survey-contact-info.html',
      controller: 'BuildSurveyContactInfoController as bc'
    })
    .when('/build-survey-thank-you/:name/:surveyHash', {
      templateUrl: '/views/templates/build-survey-thank-you.html',
      controller: 'BuildSurveyThankYouController as bt'
    })
    .when('/location/:surveyHash', {
      templateUrl: '/views/templates/location.html',
      controller: 'SurveyController as sc'
    })
    .when('/amenities/:surveyHash', {
      templateUrl: '/views/templates/amenities.html',
      controller: 'SurveyController as sc'
    })
    .when('/brand/:surveyHash', {
      templateUrl: '/views/templates/brand.html',
      controller: 'SurveyController as sc'
    })
    .when('/retention/:surveyHash', {
      templateUrl: '/views/templates/retention.html',
      controller: 'SurveyController as sc'
    })
    .when('/conclusion/:surveyHash', {
      templateUrl: '/views/templates/conclusion.html',
      controller: 'SurveyController as sc'
    })
    .when('/surveyFinished/:surveyHash', {
      templateUrl: '/views/templates/surveyFinished.html',
      controller: 'SurveyController as sc'
    })
    .when('/admin-survey-review/:clientId', {
      templateUrl: '/views/templates/admin-survey-review.html',
      controller: 'AdminSurveyReviewController as asr',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    // End survey views
    .when('/dashboard/:clientId', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'DashboardController as dc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});