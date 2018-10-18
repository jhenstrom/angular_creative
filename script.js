angular.module('team_builder', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('adventure', {
      url: '/adventure',
      templateUrl: '/adventure.html',
      controller: 'adventure_Ctrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.service('sharedProperties', function () 
{
    var property1 = {
        adventurers: []
    };
    
    var property2 = {
        adventurers: []
    };
    
    var roles = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
  "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
  
    for (var i = 0; i < roles.length; i++)
    {
        property1.adventurers.push({
          id: i,
          role: roles[i],
          img: "/img/"+ i + ".jpg",
          stats: [0,0,0,0,0]
        })
    }
    
    return {
        getProperty1: function () {
            return property1;
        },
        removeProperty1: function(value) {
            for( var i = 0; i < property1.adventurers.length-1; i++)
            { 
                if ( property1.adventurers[i].id === value.id) 
                {
                    property1.adventurers.splice(i, 1); 
                }
            }
        },
        addProperty1: function(value) {
            property1.adventurers.push(value);
        },
        getProperty2: function () {
            return property2;
        },
        removeProperty2: function(value) {
            for( var i = 0; i < property1.adventurers.length-1; i++)
            { 
                if ( property1.adventurers[i].id === value.id) 
                {
                    property1.adventurers.splice(i, 1); 
                }
            }
        },
        addProperty2: function(value) {
            property2.adventurers.push(value);
        }
    };
})
.controller('MainCtrl', [
'$scope',
'sharedProperties',
function($scope, sharedProperties)
{
    
    $scope.adventurers = sharedProperties.getProperty1().adventurers;
    console.log($scope.adventurers[0]['role']);
    $scope.start_adventure = function()
    {
        window.location.replace("http://18.224.57.114/angular_creative/index.html");
    }
    
    $scope.add_adventurer = function(adventurer)
    {
        sharedProperties.addProperty2(adventurer);
        sharedProperties.removeProperty1(adventurer);
        console.log(sharedProperties.getProperty2().adventurers);
    }

}])
.controller('adventure_Ctrl', [
'$scope',
'sharedProperties',
function($scope, sharedProperties)
{

  
  
  
}]);
