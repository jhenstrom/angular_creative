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
    })
    .state('adventurer', {
      url: '/adventurers',
      templateUrl: '/adventurers.html',
      controller: 'ACtrl'
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
  
    var backstories = [];
    
    var barbarian = ["You grew up among tribal nomads, far from civilization and its comforts. You’ve hunted great herds, survived extreme weather, raided the trade of softer folk, and protected places sacred to your people. At times, you’ve enjoyed the solitude of being the only sentient creature for miles in any direction. Even in places where the terrain is new, you know the ways of the wild.",
    "As a former barbarian nomad and raider, you have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers enough."];    
    
    var bard = ["You have been the center of attention since before you could walk, and once you learned to sing and play, you never surrendered the spotlight again. And who deserves it more than you?",
    "You can always find a place to perform. You receive free lodging and food of a modest or comfortable standard as long as you perform each night. When strangers recognize you in a town where you have performed, they typically take a liking to you"];
    
    var cleric = ["Trained as a soldier on the island of Mintarn, you traveled to Neverwinter as part of a mercenary company that serves as both army and city watch. You grew disillusioned with your fellow soldiers, who seem to enjoy their authority at the expense of the people they’re supposed to protect. Everything came to a head recently, when you disobeyed an order and followed your conscience. You were suspended from active duty, though you kept your rank and your connection to the mercenaries. Since then, you have devoted yourself to your deity."];

    var druid = ["You come from among the peasantry, but the druids who taught you revealed your birth is in accord with a prophecy spoken long ago by mysterious fey. People of your home village regard you as a blessed one with the skills to stand against threats against common folk everywhere.",
    "You can find a place to hide, rest, or recuperate among commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."];
    
    var fighter = ["Your family is no stranger to wealth, power, and privilege. In the glory days of Neverwinter, your parents were the count and countess of Corlinn Hill, a large estate located in the hills northeast of the city. But Mount Hotenow erupted thirty years ago, devastating Neverwinter and erasing Corlinn Hill from the map. Instead of growing up on an estate, you were raised in a small but comfortable town house in Waterdeep. As an adult, you stand to inherit a meaningless title and little else"];
    
    var monk =["You spent your formative years in a monastery dedicated to the Triad—Torm, Tyr, and primarily for your order, Ilmater, god of endurance and martyrdom. As a priest, you can perform sacred rites, including counseling and aiding others.",
    "You and your companions can receive aid at any site dedicated to the Triad or its member deities, especially Ilmater. You must provide any material components for spells cast on your behalf. Those who share your religion support you at a modest lifestyle."];
    
    var paladin =["You are an exile, unwelcome in both civilized society and the savage tribes of your parentage. Born after an orc raid, you were abandoned at a nearby temple and raised by the acolytes within. Despite the peaceful nature of their worship, your innate anger and resentment led you to the path of the war god.",
    "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."];
    
    var ranger = ["You grew up in the wilds, far from civilization and the comforts of town and technology. The wilds are in your blood. Even in places where you don’t know the specific features of the terrain, you know the way of the wild.",
    "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."];
    
    var rogue = ["The town of Phandalin is built on the ruins of an older settlement, vacant for five centuries until some hardy settlers set about rebuilding it some years back. Drawn by stories of gold and platinum in the nearby foothills, you came to Phandalin as well, not to earn a living, but to prey on those who struck it rich. You joined a gang calling itself the Redbrands and made some decent coin as a burglar, enforcer, or fence.",
"But you must have made an enemy among your fellow Redbrands. Someone set you up. On that person’s word, the head of the Redbrands—a wizard called Glasstaff—tried to have you killed. You escaped, barely alive and thanking Tymora, the goddess of good fortune, for your luck. You fled Phandalin, almost penniless and with only the tools of your trade to your name."];
    
    var sorcerer = ["You grew up in the wilds, a fiercely proud member of a noble clan. The clan outweighs everything else in your life, even the stated law of the land.",
    "You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."];
    
    var warlock = ["Your path to power was not always so clear. You spent a great deal of time in seclusion, ruminating over whether or not it was worth it to continue, or to abandon your efforts and default on your debt.",
    "The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. Work with your DM to determine the details of your discovery and its impact on the campaign."];
    
    var wizard = ["You have spent your life dedicated to Oghma, all-seeing god of knowledge, and spent years learning the lore of the multiverse.",
"Through visions delivered in your trances, your god has called you to a new mission. A goblin tribe has made its lair in an ancient ruin now called Cragmaw Castle, where they have defiled a shrine once sacred to Oghma. Now dedicated to the vile goblin god Maglubiyet, the altar is an offense to Oghma that must not stand."];
  
    backstories.push(barbarian);
    backstories.push(bard);
    backstories.push(cleric);
    backstories.push(druid);
    backstories.push(fighter);
    backstories.push(monk);
    backstories.push(paladin);
    backstories.push(ranger);
    backstories.push(rogue);
    backstories.push(sorcerer);
    backstories.push(warlock);
    backstories.push(wizard);
    
    var stats_arr = [];
    
    var barbarian_stats = [16,14,15,9,13,11];
    var bard_stats = [8,16,14,12,10,16];
    var cleric_stats = [14,8,15,10,16,12];
    var druid_stats = [9,15,14,11,16,13];
    var fighter_stats = [16,9,15,11,13,14];
    var monk_stats = [8,17,14,10,14,12];
    var paladin_stats = [16,10,14,8,12,15];
    var ranger_stats = [12,16,13,10,16,8];
    var rogue_stats = [8,16,12,13,10,16];
    var sorcerer_stats = [10,13,14,10,12,16];
    var warlock_stats = [8,15,14,13,10,16];
    var wizard_stats = [10,15,14,16,12,8];
    
    stats_arr.push(barbarian_stats);
    stats_arr.push(bard_stats);
    stats_arr.push(cleric_stats);
    stats_arr.push(druid_stats);
    stats_arr.push(fighter_stats);
    stats_arr.push(monk_stats);
    stats_arr.push(paladin_stats);
    stats_arr.push(ranger_stats);
    stats_arr.push(rogue_stats);
    stats_arr.push(sorcerer_stats);
    stats_arr.push(warlock_stats);
    stats_arr.push(wizard_stats);
    
    for (var i = 0; i < roles.length; i++)
    {
        property1.adventurers.push({
          id: i,
          role: roles[i],
          backstory: backstories[i],
          img: "http://18.224.57.114/angular_creative/img/"+ i + ".jpg",
          stats: stats_arr[i]
        })
    }
    
    return {
        getProperty1: function () {
            return property1;
        },
        removeProperty1: function(value) {
            for( var i = 0; i < property1.adventurers.length; i++)
            { 
                if ( property1.adventurers[i].id == value.id) 
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
            for( var i = 0; i < property2.adventurers.length; i++)
            { 
                if ( property1.adventurers[i].id == value.id) 
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
function($scope)
{
    window.alert("Disclaimer:: The backstories and artwork are not my own. The sources were taken largely from concept art found on google and character profiles on http://dnd.wizards.com. All artistic credit for pictures and backstory goes to them");
    
    $scope.move_to_selection = function()
    {
        console.log("heres");
        window.location.replace("http://18.224.57.114/angular_creative/index.html#/adventurers");
    }
}])
.controller('ACtrl', [
'$scope',
'sharedProperties',
function($scope, sharedProperties)
{
    
    $scope.adventurers = sharedProperties.getProperty1().adventurers;
    $scope.selected_adventurers = sharedProperties.getProperty2().adventurers;

    $scope.start_adventure = function()
    {
        if (sharedProperties.getProperty2().adventurers.length != 4)
        {
            window.alert("Please select four adventurers!");
            return;
        }
        window.location.replace("http://18.224.57.114/angular_creative/index.html#/adventure");
    }
    
    $scope.add_adventurer = function(adventurer)
    {
        if(sharedProperties.getProperty2().adventurers.length == 4)
        {
            window.alert("Can't pick more than four adventurers. If you want to reselect adventurers, please click the reset button");
            return;
        }
        sharedProperties.addProperty2(adventurer);
        sharedProperties.removeProperty1(adventurer);
        //console.log(sharedProperties.getProperty2().adventurers);
    }
}])
.controller('adventure_Ctrl', [
'$scope',
'sharedProperties',
function($scope, sharedProperties)
{
    
    //window.location.reload()
    console.log(sharedProperties.getProperty2().adventurers);
    $scope.adventurers = sharedProperties.getProperty2().adventurers;
    $scope.adventurer1 = $scope.adventurers[0];
    $scope.adventurer2 = $scope.adventurers[1];
    $scope.adventurer3 = $scope.adventurers[2];
    $scope.adventurer4 = $scope.adventurers[3];
    
    $scope.go_home = function()
    {
        window.location.replace("http://18.224.57.114/angular_creative/index.html#/home");
    }
  
  
}]);
