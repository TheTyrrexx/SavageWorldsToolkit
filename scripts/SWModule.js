//Angular JS Module for SW Main Page
var SWModule = angular.module('SWModule', ['ngRoute', 'ui.bootstrap']);

SWModule.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

//////Initialize rootScope variables here.
//SWModule.run(function($rootScope)
//{
//   $rootScope.cur_user = {};
//   $rootScope.logged_in = false;
//   $rootScope.cur_char = {};
//});

SWModule.config(['$routeProvider', function($routeProvider) 
{
  $routeProvider
  .when('/', 
  {
    templateUrl: 'views/SWCover.html'  
  })
  .when('/SWRoller',
  {
    controller: 'SWRollController',
    templateUrl: 'views/SWRoller.html'
  })
  .when('/Profile',
  {
    controller: 'UserController',
    templateUrl: 'views/UserProfile.html'
  })
  .when('/Chars',
  {
      controller: 'CharController',
      templateUrl: 'views/SWCharacters.html'
  })
  .when('/CharacterNexus',
  {
      controller: 'CharController',
      templateUrl: 'views/CharacterNexus.html'
  })
   .when('/CharacterBasics',
   {
         controller: 'CharController',
         templateUrl: 'views/CharacterBasics.html'
   })
   .when('/CharacterCombat',
   {
         controller: 'CharController',
         templateUrl: 'views/CharacterCombat.html'
   })   
   .when('/CharacterSkillsSpells',
   {
         controller: 'CharController',
         templateUrl: 'views/CharacterSkillsSpells.html'
   })
   .when('/CharacterGear',
   {
         controller: 'CharController',
         templateUrl: 'views/CharacterGear.html'
   })
   .when('/CharacterExtras',
   {
         controller: 'CharController',
         templateUrl: 'views/CharacterExtras.html'
   })   
  .otherwise(
  {
    redirectTo: '/'
  });
  
}]);

SWModule.service('globalService', function($rootScope) {
    $rootScope.cur_user = {};
    $rootScope.logged_in = false;
    $rootScope.cur_char = {};
})

SWModule.directive('charpreviewblock', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            char: '='
        },
        controller: 'CharController',
        templateUrl: './views/CharPreviewBlock.html',
        //template: '<h1>Character</h1>',
        link: function(scope, element, attrs) {

        }
    }
});
