//Dice Roller for Savage Worlds game system.
//Part of the RPG Toolkit
//Author: Tyrrexx

SWModule.controller('SWRollController', ['$scope', function ($scope)
{
  //Might want to transform this into a "roll log"
  $scope.output = [];
  $scope.sides = 0;
  $scope.mod = 0;
  $scope.wild = true;
  $scope.msgCount = 0;
  
  
  //Separated everything into a function so that the buttons can call them.
  //Probably not the best way but this functionality has no need for json or any data.
  //Probably a better angular practice that could do this but it works whatever.
  $scope.setSides = function(sides)
  {
      $scope.sides = sides;
  };
  
  $scope.updateMod = function(x)
  {
    if(x === '-')
      $scope.mod = 0;
    else
      $scope.mod += x;
  };
  
  $scope.setWild = function(w)
  {
    $scope.wild = w;
  };
  
  $scope.roll = function()
  {
    if($scope.output.length > 10)
        $scope.output = [];

    if($scope.sides != 0)
    {
        if($scope.wild === true)
  	    {
            var wildRoll = roll(6, $scope.mod);
            $scope.output.push({rollMsg: "Wild " + wildRoll[0], rollNum: wildRoll[1]});
        }    
    
      var newRoll = roll($scope.sides, $scope.mod);
      $scope.output.push({rollMsg: newRoll[0], rollNum: newRoll[1]});
      $scope.output.push({rollMsg: "-------------------------", rollNum: ""});
        
        while($scope.output.length > 4)
            $scope.output.shift();
    }
    
    
  };
  
  function roll(sides, mod)
  {
  	var rollOutput = "D" + sides + ": ";
  	var rollTotal = 0;
  	var rollNum = Math.floor(Math.random() * (sides)) + 1;
  	rollTotal += rollNum;
  	rollOutput += rollNum;
  	while(rollNum == sides)
  	{
  		//Exploded
  		rollOutput += "* + ";
  		rollNum = Math.floor(Math.random() * (sides)) + 1;
  		rollTotal += rollNum;
  		rollOutput += rollNum;
  	}
  	
  	var modNum = rollTotal + mod;
  	var modSign = "+";
  	if(mod < 0)
  		modSign = "-";
  		
      //Need to fix formatting for angular
  	rollOutput += " " + modSign + " " + Math.abs(mod) + "(mod) = ";// + modNum; 
      
      
    return [rollOutput, modNum.toString()];
  };
}]);