SWModule.controller('CharController', ['$scope', '$rootScope', '$http', '$location', 'globalService', function($scope, $rootScope, $http, $location, globalService)
{
    $scope.chars = {};

    //Boolean values for editing, all start as false
    //
    //Character Basics----------------------------------------------------------------------------
    $scope.quoteEdit = false;
    $scope.basicsEdit = false;
    $scope.physicalEdit = false;

    $scope.spAbilityEdit = false;
    $scope.spAbilityShowAll = false;
    $scope.newSpAbName = "Name...";
    $scope.newSpAbText = "Text...";
    $scope.newSpAbModType = "";
    $scope.newSpAbModVal = "";

    $scope.edgesEdit = false;
    $scope.edgesShowAll = false;

    $scope.hindersEdit = false;
    $scope.hindersShowAll = false;

    $scope.backstoryEdit = false;
    
    //Character Combat-----------------------------------------------------------------------------
    $scope.healthEdit = false;
    $scope.attrEdit = false;
    $scope.dervAttrEdit = false;
    $scope.fightSkillEdit = false;
    $scope.weaponsEdit = false;
    $scope.powersEdit = false;
    $scope.armorEdit = false;

    $scope.effectsEdit = false;

    $scope.posFxShowAll = false;
    $scope.newPosFxName = "";
    $scope.newPosFxType = "";
    $scope.newPosFxVal = "";
    $scope.newPosFxText = "";

    $scope.negFxShowAll = false;
    $scope.newNegFxName = "";
    $scope.newNegFxType = "";
    $scope.newNegFxVal = "";
    $scope.newNegFxText = "";

    $scope.injuryShowAll = false;
    $scope.newInjuryName = "";
    $scope.newInjuryType = "";
    $scope.newInjuryVal = "";
    $scope.newInjuryText = "";

    //Gear------------------------------------------------------------------------------------------
    $scope.gearWEdit = false;
    $scope.gearWShowAll = false;

    $scope.gearAEdit = false;
    $scope.gearAShowAll = false;

    $scope.gearEdit = false;
    $scope.gearShowAll = false;
    
    //Skills and Spells------------------------------------------------------------------------------
    $scope.skillsEdit = false;
    $scope.powersEdit = false;

    $scope.goto = function(url)
    {
        console.log(url);
        $location.path(url);
    };
    
    $scope.gotoChar = function(char)
    {
        //Load Character
        $rootScope.cur_char = {};
        $rootScope.cur_char = char;

        //Change url
        console.log(char.basics.name);
        console.log($rootScope.cur_char.basics.name);
        console.log("SpAbility Size: " + $rootScope.cur_char.specialAbilities.length);
        $location.path("/CharacterNexus");
    };
    
    $scope.getAllChars = function()
    {
        console.log("Grabbing All Characters");
        $http.get('/api/chars/').success(function(data)
        {
          console.log(data);
          $scope.chars = {};
          $scope.chars = data;
          console.log("Set All Character Data");
        })
        .error(function(data)
        {
            console.log("Error: " + data);
        })
    };

    $scope.getUserChars = function(email, camp, pc)
    {
        console.log("Grabbing Characters for " + email + "&" + camp + "&" + pc);
        $http.get('/api/chars/' + email + "&" + camp + "&" + pc).success(function(data)
        {
          console.log(data);
          $scope.chars = {};
          $scope.chars = data;
          console.log("Set Character Data");
        })
        .error(function(data)
        {
            console.log("Error: " + data);
        })
    };

    $scope.updateCharacter = function(section)
    {
        if(section === "quote") {
            //Nothing to modify
            $('#quoteModal').modal('hide');
            console.log("Updating Character**************************************************************************");
            console.log($rootScope.cur_char);
        }
        else if(section === "basics") {
            $('#basicsModal').modal('hide');
            console.log("Updating Character**************************************************************************");
            console.log($rootScope.cur_char);
        }
        else if(section === "physical") {
            $('#physicalModal').modal('hide');
            console.log("Updating Character**************************************************************************");
            console.log($rootScope.cur_char);
        }
    }

    $scope.saveCharacter = function(block)
    {
        //This will eventually be the "full" save to the database
        //Will probably try and call this just once for Character Home'

        $scope.flipBoolean(block);
    }

    //Setters for boolean variables
    $scope.flipBoolean = function(block)
    {
        if(block === 'quote')
        {
            $scope.quoteEdit = !$scope.quoteEdit;
            console.log("QuoteEdit Flipped!");
        }
        else if(block === 'basics')
        {
            $scope.basicsEdit = !$scope.basicsEdit;
            console.log("BasicEdit Flipped!");
        }
        else if(block === 'physical')
        {
            $scope.physicalEdit = !$scope.physicalEdit;
            console.log("physicalEdit Flipped!");
        }
        else if(block === 'spAbility')
        {
            $scope.spAbilityEdit = !$scope.spAbilityEdit;
            console.log("spAbilityEdit Flipped!");
        }
        else if(block === 'spAbShow')
        {
            $scope.spAbilityShowAll = !$scope.spAbilityShowAll;
            console.log("spAbilityShowAll Flipped!");
        }
        else if(block === 'edges')
        {
            $scope.edgesEdit = !$scope.edgesEdit;
            console.log("edgesEdit Flipped!");
        }
        else if(block === 'edgesShow')
        {
            $scope.edgesShowAll = !$scope.edgesShowAll;
            console.log("edgesShowAll Flipped!");
        }
        else if(block === 'hinders')
        {
            $scope.hindersEdit = !$scope.hindersEdit;
            console.log("hindersShowAll Flipped!");
        }
        else if(block === 'hindersShow')
        {
            $scope.hindersShowAll = !$scope.hindersShowAll;
            console.log("hindersShowAll Flipped!");
        }
        else if(block === 'backstory')
        {
            $scope.backstoryEdit = !$scope.backstoryEdit;
            console.log("backstoryEdit Flipped!");
        }
        else if(block === 'health')
        {
            $scope.healthEdit = !$scope.healthEdit;
            console.log("healthEdit Flipped!");
        }
        else if(block === 'attr')
        {
            $scope.attrEdit = !$scope.attrEdit;
            console.log("attrEdit Flipped!");
        }
        else if(block === 'dervAttr')
        {
            $scope.dervAttrEdit = !$scope.dervAttrEdit;
            console.log("dervAttrEdit Flipped!");
        }
        else if(block === 'fightSkill')
        {
            $scope.fightSkillEdit = !$scope.fightSkillEdit;
            console.log("fightSkillEdit Flipped!");
        }
        else if(block === 'weapons')
        {
            $scope.weaponsEdit = !$scope.weaponsEdit;
            console.log("weaponsEdit Flipped!");
        }
        else if(block === 'powers')
        {
            $scope.powersEdit = !$scope.powersEdit;
            console.log("powersEdit Flipped!");
        }
        else if(block === 'armor')
        {
            $scope.armorEdit = !$scope.armorEdit;
            console.log("armorEdit Flipped!");
        }
        else if(block === 'effects')
        {
            $scope.effectsEdit = !$scope.effectsEdit;
            console.log("effectsEdit Flipped!");
        }
        else if(block === 'posFxShow')
        {
            $scope.posFxShowAll = !$scope.posFxShowAll;
            console.log("posFxShowAll Flipped!");
        }
        else if(block === 'negFxShow')
        {
            $scope.negFxShowAll = !$scope.negFxShowAll;
            console.log("negFxShowAll Flipped!");
        }
        else if(block === 'gearW')
        {
            $scope.gearWEdit = !$scope.gearWEdit;
            console.log("gearWEdit Flipped!");
        }
        else if(block === 'gearWShow')
        {
            $scope.gearWShowAll = !$scope.gearWShowAll;
            console.log("gearWShow Flipped!");
        }
        else if(block === 'gearA')
        {
            $scope.gearAEdit = !$scope.gearAEdit;
            console.log("gearAEdit Flipped!");
        }
        else if(block === 'gearAShow')
        {
            $scope.gearAShowAll = !$scope.gearAShowAll;
            console.log("gearAShow Flipped!");
        }
        else if(block === 'gear')
        {
            $scope.gearEdit = !$scope.gearEdit;
            console.log("gearEdit Flipped!");
        }
        else if(block === 'gearShow')
        {
            $scope.gearShowAll = !$scope.gearShowAll;
            console.log("gearShowAll Flipped!");
        }
        else if(block === 'skills')
            {
                $scope.skillsEdit = !$scope.skillsEdit;
                console.log("skillsEdit Flipped!");
            }
		else if(block === 'powers')
            {
                $scope.powersEdit = !$scope.powersEdit;
                console.log("powersEdit Flipped!");
            }
    }

    //Description------------------------------------------------------------------

    //Edges and Hindrances---------------------------------------------------------
    $scope.showEdgesModal = function() {
        $('#edgesModal').modal('show');

        $(document).ready(function() {
            function format(item){return item.name};
            $("#edgeAddCombo").select2({
                data: {
                    results: $scope.allEdges,
                    text: "name"
                },
                formatSelection: format,
                formatResult: format
            });
        });
    };

    $scope.showEditEdgeModal = function(index) {
        $scope.editEdgeIndex = index;
        $('#editEdgeModal').modal('show');
    };

    $scope.showHindrancesModal = function() {
        $('#hindrancesModal').modal('show');

        $(document).ready(function() {
            function format(item){return item.name};
            $("#hindranceAddCombo").select2({
                data: {
                    results: $scope.allHindrances,
                    text: "name"
                },
                formatSelection: format,
                formatResult: format
            });
        });
    };

    $scope.showEditHindranceModal = function(index) {
        $scope.editHindranceIndex = index;
        $('#editHindranceModal').modal('show');
    };

    $scope.addEdge = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.edges.length; i++) {
            if($scope.allEdges[$("#edgeAddCombo").val()].name === $scope.cur_char.edges[i].name &&
                $scope.allEdges[$("#edgeAddCombo").val()].notes === $scope.cur_char.edges[i].notes) {
                toAdd = false;
                console.log("Edge already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.edges.push($scope.allEdges[$("#edgeAddCombo").val()]);
            console.log("Added!");
            console.log($scope.allEdges[$("#edgeAddCombo").val()]);
        }
    };

    $scope.deleteEdge = function(index) {
        $scope.cur_char.edges.splice(index ,1);
        console.log($scope.cur_char.edges);
    };

    $scope.addHindrance = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.hindrances.length; i++) {
            if($scope.allHindrances[$("#hindranceAddCombo").val()].name === $scope.cur_char.hindrances[i].name &&
                $scope.allHindrances[$("#hindranceAddCombo").val()].notes === $scope.cur_char.hindrances[i].notes) {
                toAdd = false;
                console.log("Hindrance already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.hindrances.push($scope.allHindrances[$("#hindranceAddCombo").val()]);
            console.log("Added!");
            console.log($scope.allHindrances[$("#hindranceAddCombo").val()]);
        }
    };

    $scope.deleteHindrance = function(index) {
        $scope.cur_char.hindrances.splice(index ,1);
        console.log($scope.cur_char.hindrances);
    };


    //Special Abilities------------------------------------------------------------
    $scope.showSpecialAbilityModal = function() {
        $('#specialAbilityModal').modal('show');
        $scope.tempSpeAbi = {
            name: "",
            text: ""
        }
    };

    $scope.showEditSpAbilityModal = function(index) {
        $scope.editSpAbilityIndex = index;
        $('#editSpAbilityModal').modal('show');
    };

    $scope.addSpecialAbility = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.specialAbilities.length; i++) {
            if($scope.tempSpeAbi.name === $scope.cur_char.specialAbilities[i].name &&
                $scope.tempSpeAbi.text === $scope.cur_char.specialAbilities[i].text) {
                toAdd = false;
                console.log("Special Ability already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.specialAbilities.push($scope.tempSpeAbi);
            console.log("Added!");
            console.log($scope.allHindrances[$("#hindranceAddCombo").val()]);
            $scope.tempSpeAbi = {
                name: "",
                text: ""
            }
        }
    };

    $scope.deleteSpecialAbility = function(index) {
        $scope.cur_char.specialAbilities.splice(index ,1);
        console.log($scope.cur_char.specialAbilities);
    };

    //Attributes-------------------------------------------------------------------
    $scope.showHealthModal = function() {
        $('#editHealthModal').modal('show');
    };

    $scope.showAttributeModal = function() {
        $('#editAttributeModal').modal('show');
    };

    $scope.showDerivedAttributeModal = function() {
        $('#editDerivedAttributeModal').modal('show');
    };

    //Effects----------------------------------------------------------------------
    $scope.showEffectsModal = function() {
        $('#effectsModal').modal('show');
        $scope.tempEffect = {
            name: "",
            type: "",
            text: ""
        }
    };

    $scope.showEditEffectModal = function(index) {
        $scope.editEffectIndex = index;
        $('#editEffectModal').modal('show');
    };

    $scope.addEffect = function() {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.effects.length; i++) {
            if($scope.tempEffect.name === $scope.cur_char.effects[i].name &&
                $scope.tempEffect.text === $scope.cur_char.effects[i].text) {
                toAdd = false;
                console.log("Effect already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.effects.push($scope.tempEffect);
            console.log("Added!");
            $scope.tempEffect = {
                name: "",
                type: "",
                text: ""
            }
        }
    };

    $scope.deleteEffect = function(index) {
        $scope.cur_char.effects.splice(index ,1);
        console.log($scope.cur_char.effects);
    };

    //Equipped Gear----------------------------------------------------------------

    //Gear-------------------------------------------------------------------------
    $scope.showWeaponsModal = function() {
        $scope.tempWeapon = {
            name: "",
            dmg: "",
            rng: "",
            rof: "",
            ap: "",
            wt: "",
            equipped: "",
            text: ""
        }
        $('#weaponsModal').modal('show');
    };

    $scope.showEditWeaponModal = function(index) {
        $scope.editWeaponIndex = index;
        $('#editWeaponModal').modal('show');
    };

    $scope.addWeapon = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.weapons.length; i++) {
            if($scope.tempWeapon.name === $scope.cur_char.weapons[i].name &
                $scope.tempWeapon.text === $scope.cur_char.weapons[i].text) {
                toAdd = false;
                console.log("Weapon already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.weapons.push($scope.tempWeapon);
            console.log("Added!");
            $scope.tempWeapon = {
                name: "",
                dmg: "",
                rng: "",
                rof: "",
                ap: "",
                wt: "",
                equipped: "",
                text: ""
            }
        }
    };

    $scope.deleteWeapon = function(index) {
        $scope.cur_char.weapons.splice(index ,1);
        console.log($scope.cur_char.weapons);
    };

    $scope.showArmorModal = function() {
        $scope.tempArmor = {
            name: "",
            val: "",
            area: "",
            wt: "",
            equipped: "",
            text: ""
        }
        $('#armorModal').modal('show');
    };

    $scope.showEditArmorModal = function(index) {
        $scope.editArmorIndex = index;
        $('#editArmorModal').modal('show');
    };

    $scope.addArmor = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.armor.length; i++) {
            if($scope.tempArmor.name === $scope.cur_char.armor[i].name &
                $scope.tempArmor.text === $scope.cur_char.armor[i].text) {
                toAdd = false;
                console.log("Armor already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.armor.push($scope.tempArmor);
            console.log("Added!");
            $scope.tempArmor = {
                name: "",
                val: "",
                area: "",
                wt: "",
                equipped: "",
                text: ""
            }
        }
    };

    $scope.deleteArmor = function(index) {
        $scope.cur_char.armor.splice(index ,1);
        console.log($scope.cur_char.armor);
    };

    $scope.showGearModal = function() {
        $scope.tempGear = {
            name: "",
            qty: "",
            area: "",
            wt: "",
            equipped: "",
            text: ""
        }
        $('#gearModal').modal('show');
    };

    $scope.showEditGearModal = function(index) {
        $scope.editGearIndex = index;
        $('#editGearModal').modal('show');
    };

    $scope.addGear = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.gear.length; i++) {
            if($scope.tempGear.name === $scope.cur_char.gear[i].name &
                $scope.tempGear.text === $scope.cur_char.gear[i].text) {
                toAdd = false;
                console.log("Gear already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.gear.push($scope.tempGear);
            console.log("Added!");
            $scope.tempGear = {
                name: "",
                qty: "",
                area: "",
                wt: "",
                equipped: "",
                text: ""
            }
        }
    };

    $scope.deleteGear = function(index) {
        $scope.cur_char.gear.splice(index ,1);
        console.log($scope.cur_char.gear);
    };

    //Skills-----------------------------------------------------------------------
    $scope.showSkillsModal = function() {
        $('#skillsModal').modal('show');

        $(document).ready(function() {
            function format(item){return item.name};
            $("#skillAddCombo").select2({
                data: {
                    results: $scope.allSkills,
                    text: "name"
                },
                formatSelection: format,
                formatResult: format
            });
        });
    };

    $scope.showEditSkillModal = function(index) {
        $scope.editSkillIndex = index;
        $('#editSkillModal').modal('show');
    };

    $scope.addSkill = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.skills.length; i++) {
            if($scope.allSkills[$("#skillAddCombo").val()].name === $scope.cur_char.skills[i].name &&
                $scope.allSkills[$("#skillAddCombo").val()].text === $scope.cur_char.skills[i].text) {
                console.log("Skill Text List: " + $scope.allSkills[$("#skillAddCombo").val()].text);
                console.log("Skill Text Char: " + $scope.cur_char.skills[i].text);
                toAdd = false;
                console.log("Power already exists.")
            }
        }
        if(toAdd === true) {
            var newSkill = {
                name: $scope.allSkills[$("#skillAddCombo").val()].name,
                atr: $scope.allSkills[$("#skillAddCombo").val()].atr,
                rank: $scope.allSkills[$("#skillAddCombo").val()].rank,
                mod: $scope.allSkills[$("#skillAddCombo").val()].mod,
                text: $scope.allSkills[$("#skillAddCombo").val()].text
            }
            $scope.cur_char.skills.push(newSkill);
            console.log("Added!");
        }
    };

    $scope.deleteSkill = function(index) {
        $scope.cur_char.skills.splice(index ,1);
        console.log($scope.cur_char.skills);
    };

    //Powers-----------------------------------------------------------------------
    $scope.showPowersModal = function() {
        $scope.tempPower = {
            name: "",
            trapping: "",
            cost: "",
            range: "",
            duration: "",
            text: ""
        }
        $('#powersModal').modal('show');
    };

    $scope.showEditPowerModal = function(index) {
        $scope.editPowerIndex = index;
        $('#editPowerModal').modal('show');
    };

    $scope.addPower = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.powers.length; i++) {
            if($scope.tempPower.name === $scope.cur_char.powers[i].name &
                $scope.tempPower.text === $scope.cur_char.powers[i].text) {
                toAdd = false;
                console.log("Power already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.powers.push($scope.tempPower);
            console.log("Added!");
            $scope.tempPower = {
                name: "",
                trapping: "",
                cost: "",
                range: "",
                duration: "",
                text: ""
            }
        }
    };

    $scope.deletePower = function(index) {
        $scope.cur_char.powers.splice(index ,1);
        console.log($scope.cur_char.powers);
    };

    //Contacts and Vehicles--------------------------------------------------------
    $scope.showContactsModal = function() {
        $scope.tempCont = {
            name: "",
            affiliation: "",
            text: ""
        }
        $('#contactsModal').modal('show');
    };

    $scope.showEditContactModal = function(index) {
        $scope.editContactIndex = index;
        $('#editContactModal').modal('show');
    };

    $scope.addContact = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.contacts.length; i++) {
            if($scope.tempCont.name === $scope.cur_char.contacts[i].name &
                $scope.tempCont.text === $scope.cur_char.contacts[i].text) {
                toAdd = false;
                console.log("Contact	 already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.contacts.push($scope.tempCont);
            console.log("Added!");
            $scope.tempCont = {
				name: "",
            	affiliation: "",
            	text: ""
            }
        }
    };

    $scope.deleteContact = function(index) {
        $scope.cur_char.contacts.splice(index ,1);
        console.log($scope.cur_char.contacts);
    };
    
    $scope.showVehiclesModal = function() {
        $scope.tempVehicle = {
            name: "",
            acceleration: "",
            topSpeed: "",
            toughness: "",
            crew: "",
            text: ""
        }
        $('#vehiclesModal').modal('show');
    };

    $scope.showEditVehicleModal = function(index) {
        $scope.editVehicleIndex = index;
        $('#editVehicleModal').modal('show');
    };

    $scope.addVehicle = function(e) {
        var toAdd = true;
        for(var i = 0; i < $scope.cur_char.vehicles.length; i++) {
            if($scope.tempVehicle.name === $scope.cur_char.vehicles[i].name &
                $scope.tempVehicle.text === $scope.cur_char.vehicles[i].text) {
                toAdd = false;
                console.log("Vehicle already exists.")
            }
        }
        if(toAdd === true) {
            $scope.cur_char.vehicles.push($scope.tempVehicle);
            console.log("Added!");
            $scope.tempVehicle = {
                name: "",
                acceleration: "",
                topSpeed: "",
                toughness: "",
                crew: "",
                text: ""
            }
        }
    };

    $scope.deleteVehicle = function(index) {
        $scope.cur_char.vehicles.splice(index ,1);
        console.log($scope.cur_char.vehicles);
    };
    
    //Initialize Functions---------------------------------------------------------
    function loadEdges() {
        console.log("Begin load edges");
        $scope.allEdges = edgesFile;
    }

    function loadHindrances() {
        console.log("Begin load hindrances");
        $scope.allHindrances = hindrancesFile;
    }

    function loadSkills() {
        console.log("Begin skill load");
        $scope.allSkills = skillsFile;
    }

    function init() {
        loadEdges();
        loadHindrances();
        loadSkills();
    };

    $scope.tabClick = function($event) {
        $event.preventDefault();
    }

    //Initialize required files.
    init();
}]);