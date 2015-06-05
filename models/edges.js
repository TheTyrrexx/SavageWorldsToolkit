//'text' represents Name of edge. Done so Select2 is easier to use.

var edgesFile = [
    {
        id: 0,
        "name": "Ace",
        "req": "Novice, Agi d8+",
        "type": "Professional",
        "book": "Core",
        "desc": "+2 to Boating, Driving, Piloting; may make soak rolls for vehicle at -2.",
        "notes": ""
    },
    {
        id: 1,
        "name": "Acrobat",
        "req": "Novice, Agi d8+, Str d6+",
        "type": "Professional",
        "book": "Core",
        "desc": "+2 to nimbleness-based Agility rolls; +1 Parry if unencumbered.",
        "notes": ""
    },
    {
        id: 2,
        "name": "Adaptable",
        "req": "Seasoned, Human or Half-Elf",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Gain one non-Improved version of an Edge restricted to another race.",
        "notes": ""
    },
    {
        id: 3,
        "name": "Adept",
        "req": "Novice, Arcane Background, Martial Artist, Faith d8+, Fighting d8+",
        "type": "Professional",
        "book": "Core",
        "desc": "Spend 1 Power Point to gain 2 AP on unarmed attacks. Always considered armed.",
        "notes": ""
    },
    {
        id: 4,
        "name": "Alertness",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "+2 to Notice",
        "notes": ""
    },
    {
        id: 5,
        "name": "Ambidextrous",
        "req": "Novice, Agility d8+",
        "type": "Background",
        "book": "Core",
        "desc": "Ignore -2 off-hand penalty.",
        "notes": ""
    },
    {
        id: 6,
        "name": "Arcane Background",
        "req": "Novice, Special",
        "type": "Power",
        "book": "Core",
        "desc": "Gives character access to Arcane magics and powers.",
        "notes": ""
    },
    {
        id: 7,
        "name": "Arcane Resistance",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "+2 armor when hit by magic damage and +2 to trail roll to oppose magic spells.",
        "notes": ""
    },
    {
        id: 8,
        "name": "Improved Arcane Resistance",
        "req": "Novice, Arcane Resistance",
        "type": "Background",
        "book": "Core",
        "desc": "Increases Arcane Resistance bonus to +4.",
        "notes": ""
    },
    {
        id: 9,
        "name": "Artifact Hunter",
        "req": "Novice, Notice d10+",
        "type": "Professional",
        "book": "Fantasy 1",
        "desc": "Chance of finding relic up by 10%. If over 100% then plus 10% to find second relic.",
        "notes": ""
    },
    {
        id: 10,
        "name": "Assassin",
        "req": "Novice, Agi d8+, Climbing d6+, Fighting d6+, Stealth d8+",
        "type": "Professional",
        "book": "Core",
        "desc": "+2 to Damage when striking unaware target.",
        "notes": ""
    },
    {
        id: 11,
        "name": "Atmospheric Acclimation",
        "req": "Novice",
        "type": "Sci-fi",
        "book": "Professional",
        "desc": "Character operates normally in Thin or Dense environments.",
        "notes": ""
    },
    {
        id: 12,
        "name": "Attractive",
        "req": "Novice, Vigor d6+",
        "type": "Background",
        "book": "Core",
        "desc": "+2 charisma.",
        "notes": ""
    },
    {
        id: 13,
        "name": "Very Attractive",
        "req": "Novice, Attractive",
        "type": "Background",
        "book": "Core",
        "desc": "Attractive Charisma bonus boosted to +4.",
        "notes": ""
    },
    {
        id: 14,
        "name": "Barbaric Blood",
        "req": "Seasoned, Berserk, Half-Orc",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Character may spend benny to activate Berserk.",
        "notes": ""
    },
    {
        id: 15,
        "name": "Improved Barbaric Blood",
        "req": "Veteran, Spi d8+, Barbaric Blood, Half-Orc",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Ignore -2 penalty after rage. Result 1 on Fighting die, he will not hit an ally.",
        "notes": ""
    },
    {
        id: 16,
        "name": "Beast Bond",
        "req": "Novice",
        "type": "Weird",
        "book": "Core",
        "desc": "Character may spend bennies for his animal.",
        "notes": ""
    },
    {
        id: 17,
        "name": "Beast Master",
        "req": "Novice, Spi d8+",
        "type": "Weird",
        "book": "Core",
        "desc": "Hero gains an animal companion.",
        "notes": ""
    },
    {
        id: 18,
        "name": "Berserk",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "After suffering a wound, character must make a Smarts roll or go berserk. Parry reduced by -2 and adds +2 to all Fighting, Strength, melee and toughness rolls. Ignore all wound modifiers but cannot use any action that requires concentration.",
        "notes": ""
    },
    {
        id: 19,
        "name": "Block",
        "req": "Seasoned, Fighting d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Parry +1",
        "notes": ""
    },
    {
        id: 20,
        "name": "Improved Block",
        "req": "Veteran, Block",
        "type": "Combat",
        "book": "Core",
        "desc": "Block Parry bonus boosted to +2.",
        "notes": ""
    },
    {
        id: 21,
        "name": "Brave",
        "req": "Novice, Spi d6+",
        "type": "Background",
        "book": "Core",
        "desc": "+2 to Fear checks.",
        "notes": ""
    },
    {
        id: 22,
        "name": "Brawler",
        "req": "Novice, Str d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "+2 to unarmed damage rolls.",
        "notes": ""
    },
    {
        id: 23,
        "name": "Bruiser",
        "req": "Seasoned, Brawler",
        "type": "Combat",
        "book": "Core",
        "desc": "Bonus die for unarmed damage is d8.",
        "notes": ""
    },
    {
        id: 24,
        "name": "Brawny",
        "req": "Novice, Str d6+, ",
        "type": "Background",
        "book": "Core",
        "desc": "+1 Toughness and can carry 8x Strength.",
        "notes": ""
    },
    {
        id: 25,
        "name": "Champion",
        "req": "Novice, Arcane Background, Spi d8+, Str d6+, Vig d8+, Faith d6+, Fighting d8+",
        "type": "Professional",
        "book": "Core",
        "desc": "+2 damage / Toughness vs supernatural evil.",
        "notes": ""
    },
    {
        id: 26,
        "name": "Charismatic",
        "req": "Novice, Spi d8+",
        "type": "Social",
        "book": "Core",
        "desc": "Charisma +2",
        "notes": ""
    },
    {
        id: 27,
        "name": "Combat Reflexes",
        "req": "Seasoned",
        "type": "Combat",
        "book": "Core",
        "desc": "+2 to recover from being shaken.",
        "notes": ""
    },
    {
        id: 28,
        "name": "Combat Senses",
        "req": "Seasoned, Fighting d8+, Notice d8+",
        "type": "Combat",
        "book": "Superpower",
        "desc": "No Gang Up bonus against character.",
        "notes": ""
    },
    {
        id: 29,
        "name": "Command",
        "req": "Novice, Smt d6+",
        "type": "Leadership",
        "book": "Core",
        "desc": "+1 to troops recovering from being shaken.",
        "notes": ""
    },
    {
        id: 30,
        "name": "Command Presence",
        "req": "Novice, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "Increase command radius to 10''",
        "notes": ""
    },
    {
        id: 31,
        "name": "Common Bond",
        "req": "Wild Card, Novice, Spi d8+",
        "type": "Social",
        "book": "Core",
        "desc": "May give bennies to players.",
        "notes": ""
    },
    {
        id: 32,
        "name": "Connections",
        "req": "Novice",
        "type": "Social",
        "book": "Core",
        "desc": "Call upon powerful friends.",
        "notes": ""
    },
    {
        id: 33,
        "name": "Counterattack",
        "req": "Seasoned, Fighting d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Free Fighting attack at -2 once per round when foe fails a Fighting attack.",
        "notes": ""
    },
    {
        id: 34,
        "name": "Improved Counterattack",
        "req": "Veteran, Counterattack",
        "type": "Combat",
        "book": "Core",
        "desc": "Free counterattack without -2 penalty.",
        "notes": ""
    },
    {
        id: 35,
        "name": "Cyber Tolerant",
        "req": "Novice",
        "type": "Background",
        "book": "Sci-fi",
        "desc": "Maximum Strain for cyberware is increased by +4.",
        "notes": ""
    },
    {
        id: 36,
        "name": "Cyborg",
        "req": "Novice",
        "type": "Background",
        "book": "Sci-fi",
        "desc": "Double max Strain. Must take additional Major/2x Minor hindrances.",
        "notes": ""
    },
    {
        id: 37,
        "name": "Danger Sense",
        "req": "Novice",
        "type": "Wierd",
        "book": "Core",
        "desc": "Notice check at -2 to detect surprise attacks/danger.",
        "notes": ""
    },
    {
        id: 38,
        "name": "Dead Shot",
        "req": "Wild Card, Seasoned, Shooting/Throwing d10+",
        "type": "Combat",
        "book": "Core",
        "desc": "Double ranged damage when dealt Joker.",
        "notes": ""
    },
    {
        id: 39,
        "name": "Dodge",
        "req": "Seasoned, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "-1 to be hit with ranged attacks.",
        "notes": ""
    },
    {
        id: 40,
        "name": "Improved Dodge",
        "req": "Veteran, Dodge",
        "type": "Combat",
        "book": "Core",
        "desc": "-2 to be hit with ranged attacks.",
        "notes": ""
    },
    {
        id: 41,
        "name": "Double Shot",
        "req": "Seasoned, Elf or Half-Elf, Shooting d8+",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Fire 2 arrows at 1 target, with 1 roll at -2 penalty.",
        "notes": ""
    },
    {
        id: 42,
        "name": "Improved Double Shot",
        "req": "Veteran, Double Shot",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Same as Double Shot but no penalty.",
        "notes": ""
    },
    {
        id: 43,
        "name": "Elan",
        "req": "Novice, Spi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "-2 when spending a benny on Trait/Soak rolls.",
        "notes": ""
    },
    {
        id: 44,
        "name": "Exorcist",
        "req": "Novice, Arcane Background(Miracles), Spirit d8+, Faith d10+",
        "type": "Professional",
        "book": "Horror",
        "desc": "+4 to Faith or Spirit test vs supernatural.",
        "notes": ""
    },
    {
        id: 45,
        "name": "Extraction",
        "req": "Novice, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Agility test to ignore 1 foe's free attack when withdrawing.",
        "notes": ""
    },
    {
        id: 46,
        "name": "Improved Extraction",
        "req": "Novice, Extraction",
        "type": "Combat",
        "book": "Core",
        "desc": "If raise on withdraw roll, ignore all foe's attacks.",
        "notes": ""
    },
    {
        id: 47,
        "name": "Fast Healer",
        "req": "Novice, Vig d8+",
        "type": "Background",
        "book": "Core",
        "desc": "+2 to natural healing rolls.",
        "notes": ""
    },
    {
        id: 48,
        "name": "Fervor",
        "req": "Veteran, Spi d8+, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "+1 melee damage to troops in command.",
        "notes": ""
    },
    {
        id: 49,
        "name": "First Strike",
        "req": "Novice, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "May attack one foe who moves adjacent.",
        "notes": ""
    },
    {
        id: 50,
        "name": "Improved First Strike",
        "req": "Heroic, First Strike",
        "type": "Combat",
        "book": "Core",
        "desc": "May attack every foe who moves adjacent.",
        "notes": ""
    },
    {
        id: 51,
        "name": "Familiar",
        "req": "Novice, Arcane Background, Knowledge (Arcana) d10+",
        "type": "Professional",
        "book": "Fantasy 1",
        "desc": "Gain magical familiar with special properties. See book.",
        "notes": ""
    },
    {
        id: 52,
        "name": "Fanaticism",
        "req": "Seasoned, Command, Persuasion d8+",
        "type": "Leadership",
        "book": "Horror",
        "desc": "Characters under command get +2 to Fear checks.",
        "notes": ""
    },
    {
        id: 53,
        "name": "Fleet-Footed",
        "req": "Novice, Agi d6+",
        "type": "Background",
        "book": "Core",
        "desc": "+2 Pace, d10 running die instead of d6.",
        "notes": ""
    },
    {
        id: 54,
        "name": "Florentine",
        "req": "Novice, Agi d8+, Fighting d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "+1 vs foes with single weapon and no shield. Ignore 1 point of gang up bonus.",
        "notes": ""
    },
    {
        id: 55,
        "name": "Followers",
        "req": "Legendary, Wild Card",
        "type": "Legendary",
        "book": "Core",
        "desc": "Attract 5 henchmen",
        "notes": ""
    },
    {
        id: 56,
        "name": "Frenzy",
        "req": "Seasoned, Fighting d10+",
        "type": "Combat",
        "book": "Core",
        "desc": "1 extra Fighting attack at -2.",
        "notes": ""
    },
    {
        id: 57,
        "name": "Improved Frenzy",
        "req": "Veteran, Frenzy",
        "type": "Combat",
        "book": "Core",
        "desc": "Same as Frenzy but no penalty.",
        "notes": ""
    },
    {
        id: 58,
        "name": "Gadgeteer",
        "req": "Novice, Arcane Background, Smt d8+, Repair d8+, Knowledge d6+",
        "type": "Profession",
        "book": "Core",
        "desc": "May 'jury-rig' a device once per game session.",
        "notes": ""
    },
    {
        id: 59,
        "name": "Geared Up",
        "req": "Novice",
        "type": "Background",
        "book": "Sci-fi",
        "desc": "$10,000 dollars worth of possessions.",
        "notes": ""
    },
    {
        id: 60,
        "name": "Giant Killer",
        "req": "Veteran",
        "type": "Combat",
        "book": "Core",
        "desc": "+1d6 damage when vs. large creatures.",
        "notes": ""
    },
    {
        id: 61,
        "name": "Gravitic Acclimation",
        "req": "Novice, Agi d6+",
        "type": "Professional",
        "book": "Sci-fi",
        "desc": "Ignore typical -2 penalty when in foreign gravity.",
        "notes": ""
    },
    {
        id: 62,
        "name": "Hard to Kill",
        "req": "Novice, Wild Card, Spi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignore wound penalties for Vigor rolls made on Injury Table.",
        "notes": ""
    },
    {
        id: 63,
        "name": "Harder to Kill",
        "req": "Veteran, Hard to Kill",
        "type": "Combat",
        "book": "Core",
        "desc": "50% chance of surviving 'death'",
        "notes": ""
    },
    {
        id: 64,
        "name": "Hardened",
        "req": "Seasoned, Spi d8+",
        "type": "Social",
        "book": "Horror",
        "desc": "Smarts test to gain 1 Sanity during 'downtime'.",
        "notes": ""
    },
    {
        id: 65,
        "name": "Healer",
        "req": "Novice, Spi d8+",
        "type": "Weird",
        "book": "Core",
        "desc": "+2 Healing.",
        "notes": ""
    },
    {
        id: 66,
        "name": "Heavy-G Worlder",
        "req": "Novice",
        "type": "Background",
        "book": "Sci-fi",
        "desc": "Character starts with d6 in Str, double normal jumping distance, +2 Pace, increase Running die by 1, and no -2 Agi penalty for Normal gravity. Must take Major/2x Minor hindrances.",
        "notes": ""
    },
    {
        id: 67,
        "name": "Hold the Line!",
        "req": "Seasoned, Smt d8+, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "Troops have +1 Toughness.",
        "notes": ""
    },
    {
        id: 68,
        "name": "Holy/Unholy Warrior",
        "req": "Novice, Arcane Background, Spi d8+, Faith d6+",
        "type": "Profession",
        "book": "Core",
        "desc": "Repulse evil/good for 1 Power Point w/ range of Spirit. Creatures must make Spirit check; failure is shaken, 1 is destroyed.",
        "notes": ""
    },
    {
        id: 69,
        "name": "Improvisational Fighter",
        "req": "Seasoned, Smt d6+",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignores -1 penalty to attack and Parry for improv weapons.",
        "notes": ""
    },
    {
        id: 70,
        "name": "Investigator",
        "req": "Novice, Smt d8+, Investigate d8+, Streetwise d8+",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 Investigation and Streetwise.",
        "notes": ""
    },
    {
        id: 71,
        "name": "Jack-of-All-Trades",
        "req": "Novice, Smt d10+",
        "type": "Profession",
        "book": "Core",
        "desc": "No -2 for unskilled Smarts-based tests.",
        "notes": ""
    },
    {
        id: 72,
        "name": "Killer Instinct",
        "req": "Heroic",
        "type": "Combat",
        "book": "Core",
        "desc": "Win tied opposed rolls, may reroll opposed skill die if comes up '1'.",
        "notes": ""
    },
    {
        id: 73,
        "name": "Knight",
        "req": "Novice, Spi d6+, Str d8+, Vig d8+, Fighting d8+, Riding d8+",
        "type": "Professional",
        "book": "Fantasy 1",
        "desc": "Swear oath to order. Given material goods: warhorse, lance, chain mail, shield. +2 Charisma.",
        "notes": ""
    },
    {
        id: 74,
        "name": "Leader of Men",
        "req": "Veteran, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "Roll a d10 as the Wild Die for subordinates' group rolls.",
        "notes": ""
    },
    {
        id: 75,
        "name": "Level Headed",
        "req": "Seasoned, Smt d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Act on best of two cards in combat.",
        "notes": ""
    },
    {
        id: 76,
        "name": "Improved Level Headed",
        "req": "Seasoned, Level Headed",
        "type": "Combat",
        "book": "Core",
        "desc": "Act on the best of three cards in combat.",
        "notes": ""
    },
    {
        id: 77,
        "name": "Linguist",
        "req": "Novice, Smt d6+",
        "type": "Background",
        "book": "Core",
        "desc": "Begin w/ languages equal to Smarts. Smarts -2 check to be understood in any language heard for a week.",
        "notes": ""
    },
    {
        id: 78,
        "name": "Liquid Courage",
        "req": "Novice, Vig d8+",
        "type": "Background",
        "book": "Core",
        "desc": "Gain Vigor die type after consuming alcohol.",
        "notes": ""
    },
    {
        id: 79,
        "name": "Luck",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "+1 benny per session.",
        "notes": ""
    },
    {
        id: 80,
        "name": "Great Luck",
        "req": "Novice, Luck",
        "type": "Background",
        "book": "Core",
        "desc": "+2 benny per session.",
        "notes": ""
    },
    {
        id: 81,
        "name": "Marksman",
        "req": "Seasoned",
        "type": "Combat",
        "book": "Core",
        "desc": "+2 Shooting if character doesn't move.",
        "notes": ""
    },
    {
        id: 82,
        "name": "Martial Artist",
        "req": "Novice, Fighting d6+",
        "type": "Combat",
        "book": "Core",
        "desc": "+d4 to unarmed damage. Never considered unarmed.",
        "notes": ""
    },
    {
        id: 83,
        "name": "Improved Martial Artist",
        "req": "Veteran, Martial Artist, Fighting d10+",
        "type": "Combat",
        "book": "Core",
        "desc": "+d6 to unarmed damage.",
        "notes": ""
    },
    {
        id: 84,
        "name": "Martial Arts Master",
        "req": "Legendary, Imp. Martial Artist, Fighting d12+",
        "type": "Legendary",
        "book": "Core",
        "desc": "+2 to unarmed damage rolls; may take this Edge up to 5 times.",
        "notes": ""
    },
    {
        id: 85,
        "name": "McGyver",
        "req": "Novice, Smt d6+, Repair d6+, Notice d8+",
        "type": "Profession",
        "book": "Core",
        "desc": "May improvise temporary gadgets.",
        "notes": ""
    },
    {
        id: 86,
        "name": "Mentalist",
        "req": "Novice, Arcane Background, Smt d8+, Casting(Psionics) d6+",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 to any opposed Psionics roll",
        "notes": ""
    },
    {
        id: 87,
        "name": "Mighty Blow",
        "req": "Wild Card, Seasoned, Fighting d10+",
        "type": "Wild Card",
        "book": "Core",
        "desc": "Double melee damage when dealt Joker.",
        "notes": ""
    },
    {
        id: 88,
        "name": "Monster Hunter",
        "req": "Seasoned, Spi d6+",
        "type": "Professional",
        "book": "Horror",
        "desc": "Immune to Fear from one broad monster type.",
        "notes": ""
    },
    {
        id: 89,
        "name": "Mr. Fix It",
        "req": "Novice, Arcane Background, Smt d10+, Repair d8+, Casting(Weird Sci) d8+, Knowledge d6+",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 to repair rolls. 1/2 repair time on raise.",
        "notes": ""
    },
    {
        id: 90,
        "name": "Natural Leader",
        "req": "Novice, Spi d8+, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "Leader may give bennies to troops in command.",
        "notes": ""
    },
    {
        id: 91,
        "name": "Natural Warrior",
        "req": "Seasoned, Fighting d8+, Natural Weapons",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Increases damage with natural weapons by 1 die type.",
        "notes": ""
    },
    {
        id: 92,
        "name": "Improved Natural Warrior",
        "req": "Veteran, Natural Warrior",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "If raise on attack roll character gains extra +d10 damage instead of +d6.",
        "notes": ""
    },
    {
        id: 93,
        "name": "Necromancer",
        "req": "Novice, Arcane Background, Spirit d8+, Casting d8+",
        "type": "Professional",
        "book": "Horror",
        "desc": "May cast Zombie spell at novice level. Zombie spell cost down to 2/corpse, may double cost for 2d6 duration.",
        "notes": ""
    },
    {
        id: 94,
        "name": "Master Necromancer",
        "req": "Veteran, Necromancer",
        "type": "Professional",
        "book": "Horror",
        "desc": "Zombies raised now have extra die in Str and one skill of his master's choice.",
        "notes": ""
    },
    {
        id: 95,
        "name": "Nerves of Steel",
        "req": "Novice, Wild Card, Vig d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignore 1 point of wound penalties.",
        "notes": ""
    },
    {
        id: 96,
        "name": "Improved Nerves of Steel",
        "req": "Novice, Nerves of Steel",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignore 2 points of wound penalties.",
        "notes": ""
    },
    {
        id: 97,
        "name": "New Power",
        "req": "Novice, Arcane Background",
        "type": "Powers",
        "book": "Core",
        "desc": "Character gains 1 new power.",
        "notes": ""
    },
    {
        id: 98,
        "name": "Noble",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "Rich; +2 Charisma; Status and wealth.",
        "notes": ""
    },
    {
        id: 99,
        "name": "No Mercy",
        "req": "Seasoned",
        "type": "Combat",
        "book": "Core",
        "desc": "May spend bennies on damage rolls.",
        "notes": ""
    },
    {
        id: 100,
        "name": "Occultist",
        "req": "Novice, Smt d8+, Investigation d8+, Know(Occult) d8+,",
        "type": "Social",
        "book": "Horror",
        "desc": "Begins game with Forbidden Lore.",
        "notes": ""
    },
    {
        id: 101,
        "name": "One of the Chosen",
        "req": "Novice, Spi d6+",
        "type": "Social",
        "book": "Horror",
        "desc": "+1 to Attack test vs supernatural or supernatural take -1 to hit character.",
        "notes": ""
    },
    {
        id: 102,
        "name": "Power Points",
        "req": "Novice, Arcane Background",
        "type": "Powers",
        "book": "Core",
        "desc": "+5 Power Points. Once per rank only.",
        "notes": ""
    },
    {
        id: 103,
        "name": "Power Surge",
        "req": "Wild Card, Seasoned, Casting d10+",
        "type": "Wild Card",
        "book": "Core",
        "desc": "+2d6 Power Points when dealth a Joker.",
        "notes": ""
    },
    {
        id: 104,
        "name": "Professional",
        "req": "Legendary, d12+ in a Trait",
        "type": "Legendary",
        "book": "Core",
        "desc": "Trait becomes d12+1",
        "notes": ""
    },
    {
        id: 105,
        "name": "Expert",
        "req": "Legendary, Professional in a Trait",
        "type": "Legendary",
        "book": "Core",
        "desc": "Trait becomes d12+2",
        "notes": ""
    },
    {
        id: 106,
        "name": "Master",
        "req": "Legendary, Expert in a Trait",
        "type": "Legendary",
        "book": "Core",
        "desc": "Wild Die is d10 for selected Trait.",
        "notes": ""
    },
    {
        id: 107,
        "name": "Quick",
        "req": "Novice",
        "type": "Combat",
        "book": "Core",
        "desc": "Discard draw of 5 or less for new card.",
        "notes": ""
    },
    {
        id: 108,
        "name": "Quick Draw",
        "req": "Novice, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "May draw weapon as a free action.",
        "notes": ""
    },
    {
        id: 109,
        "name": "Rapid Recharge",
        "req": "Seasoned, Spi d6+, Arcane Background",
        "type": "Powers",
        "book": "Core",
        "desc": "Regain 1 Power Point every 30min.",
        "notes": ""
    },
    {
        id: 110,
        "name": "Improved Rapid Recharge",
        "req": "Veteran, Rapid Recharge",
        "type": "Powers",
        "book": "Core",
        "desc": "Regain 1 Power Point every 15min.",
        "notes": ""
    },
    {
        id: 111,
        "name": "Relentless",
        "req": "Novice, Spi d8+",
        "type": "Background",
        "book": "Horror",
        "desc": "Driven to defeat evil. Recover from Shaken grants a single action.",
        "notes": ""
    },
    {
        id: 112,
        "name": "Rich",
        "req": "Novice",
        "type": "Background",
        "book": "Core",
        "desc": "3x starting funds, $150K annual salary.",
        "notes": ""
    },
    {
        id: 113,
        "name": "Filthy Rich",
        "req": "Novice, Noble Birth or Rich",
        "type": "Background",
        "book": "Core",
        "desc": "5x starting funds, $500< annual salary.",
        "notes": ""
    },
    {
        id: 114,
        "name": "Rock and Roll!",
        "req": "Seasoned, Shooting d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignore full-auto penalty if shooter doesn't move.",
        "notes": ""
    },
    {
        id: 115,
        "name": "Rocket Jock",
        "req": "Novice, Piloting d8+, Shooting d6+",
        "type": "Professional",
        "book": "Sci-fi",
        "desc": "Pilot can fire one weapon system per action w/o incurring a multi action penalty while Piloting or Driving.",
        "notes": ""
    },
    {
        id: 116,
        "name": "Scamper",
        "req": "Seasoned, Agility d8+, Half-Folk",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Enemies of man-size or larger subtract -1 from their attack rolls.",
        "notes": ""
    },
    {
        id: 117,
        "name": "Improved Scamper",
        "req": "Veteran, Scamper",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Opponents get no gang-up bonus.",
        "notes": ""
    },
    {
        id: 118,
        "name": "Scavenger",
        "req": "Novice, Luck",
        "type": "Background",
        "book": "Core",
        "desc": "Find an essential piece of equipment once per session.",
        "notes": ""
    },
    {
        id: 119,
        "name": "Scholar",
        "req": "Novice, d8+ in affect skills",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 to two different knowledge skills.",
        "notes": ""
    },
    {
        id: 120,
        "name": "Sidekick",
        "req": "Legendary, Wild Card",
        "type": "Legendary",
        "book": "Core",
        "desc": "Character gains a Novice WC sidekick.",
        "notes": ""
    },
    {
        id: 121,
        "name": "Soul Drain",
        "req": "Seasoned, Arcane Background, Knowledge d10+",
        "type": "Powers",
        "book": "Core",
        "desc": "Specify how many Power Points needed. Make Spirit roll minus the number of points. Failure player takes 1 wound. Success gets needed points.",
        "notes": ""
    },
    {
        id: 122,
        "name": "Sound Mind",
        "req": "Novice, Spi d6+",
        "type": "Social",
        "book": "Horror",
        "desc": "+2 Sanity",
        "notes": ""
    },
    {
        id: 123,
        "name": "Steady Hands",
        "req": "Novice, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Ignore unstable platform penalty, Runny penalty reduced to -1.",
        "notes": ""
    },
    {
        id: 124,
        "name": "Sweep",
        "req": "Novice, Str d8+, Fighting d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "Attack all adj. foes at -2.",
        "notes": ""
    },
    {
        id: 125,
        "name": "Improved Sweep",
        "req": "Veteran, Sweep",
        "type": "Combat",
        "book": "Core",
        "desc": "Attack all adj. foes w/ no penalty.",
        "notes": ""
    },
    {
        id: 126,
        "name": "Strong Willed",
        "req": "Novice, Intimidation d6+, Taunt d6+",
        "type": "Social",
        "book": "Core",
        "desc": "+2 Intimidation and Taunt, +2 to resist Test of Wills.",
        "notes": ""
    },
    {
        id: 127,
        "name": "Sunder",
        "req": "Seasoned, Dwarf",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Weapons cause -1 AP; on raise -2 AP.",
        "notes": ""
    },
    {
        id: 128,
        "name": "Improved Sunder",
        "req": "Veteran, Dwarf",
        "type": "Racial",
        "book": "Fantasy 1",
        "desc": "Same Sunder but -2 AP; on raise -4 AP.",
        "notes": ""
    },
    {
        id: 129,
        "name": "Tactician",
        "req": "Seasoned, Wild Card, Smt d8+, Command",
        "type": "Leadership",
        "book": "Core",
        "desc": "Make a Knowledge (Battle) roll at start of fight. Each success gives an Action Card. Leader can give out to allies.",
        "notes": ""
    },
    {
        id: 130,
        "name": "Take the Hit",
        "req": "Novice, Vigor d10+",
        "type": "Combat",
        "book": "Superpower",
        "desc": "+2 to Soak rolls.",
        "notes": ""
    },
    {
        id: 131,
        "name": "Talisman Craftsman",
        "req": "Novice, Smt d8+, Spi d8+, Arcane Background, Knowledge(Occult) d8+, Casting d8+",
        "type": "Professional",
        "book": "Horror",
        "desc": "Once per session, character can create and imbue a device with arcane energy.",
        "notes": ""
    },
    {
        id: 132,
        "name": "Team Leader",
        "req": "Novice, Smt d8+",
        "type": "Leadership",
        "book": "Superpower",
        "desc": "Smarts roll as action to grant allys withing inches equal to Spirit a +1 on next Trait roll. +2 on raise.",
        "notes": ""
    },
    {
        id: 133,
        "name": "Team Player",
        "req": "Novice, Spi d8+",
        "type": "Social",
        "book": "Superpower",
        "desc": "Counts as an additional ally for purposes of Gang Up. If foe can ignore Gang Up, still counts as +1 bonus.",
        "notes": ""
    },
    {
        id: 134,
        "name": "Thief",
        "req": "Novice, Agi d8+, Climbing d6+, Lockpicking d6+, Stealth d8+",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 Climb, Lockpick, Stealth, or to disarm traps.",
        "notes": ""
    },
    {
        id: 135,
        "name": "Tough as Nails",
        "req": "Legendary",
        "type": "Legendary",
        "book": "Core",
        "desc": "Toughness +1.",
        "notes": ""
    },
    {
        id: 136,
        "name": "Improved Tough as Nails",
        "req": "Legendary, Tough as Nails",
        "type": "Legendary",
        "book": "Core",
        "desc": "Toughness +2.",
        "notes": ""
    },
    {
        id: 137,
        "name": "Tower of Will",
        "req": "Novice, Spi d8+, Vig d8+",
        "type": "Social",
        "book": "Horror",
        "desc": "+2 to resist being mentally controlled and to Test of Wills.",
        "notes": ""
    },
    {
        id: 138,
        "name": "Trademark Weapon",
        "req": "Novice, Fighting or Shooting d10+",
        "type": "Combat",
        "book": "Core",
        "desc": "+1 Fighting or Shooting with specific weapon.",
        "notes": ""
    },
    {
        id: 139,
        "name": "Improved Trademark Weapon",
        "req": "Veteran, Trademark Weapon",
        "type": "Combat",
        "book": "Core",
        "desc": "+2 Fighting or Shooting with specific weapon.",
        "notes": ""
    },
    {
        id: 140,
        "name": "Troubadour",
        "req": "Novice, Arcane Background, Perform d6+",
        "type": "Professional",
        "book": "Fantasy 1",
        "desc": "Use arts as magic. Perform test against audience; gain $1d6 for every 10 members; may add Charisma to roll. Cause Strain if 1 is rolled.",
        "notes": ""
    },
    {
        id: 141,
        "name": "Two-Fisted",
        "req": "Novice, Agi d8+",
        "type": "Combat",
        "book": "Core",
        "desc": "May attack with a weapon in each hand w/ multi-action penalty.",
        "notes": ""
    },
    {
        id: 142,
        "name": "Visions",
        "req": "Novice",
        "type": "Social",
        "book": "Horror",
        "desc": "Once per session the character receives a useful vision. After character must make Smarts test, on fail lose 1 Sanity.",
        "notes": ""
    },
    {
        id: 143,
        "name": "Weapon Master",
        "req": "Legendary, Fighting d12+",
        "type": "Legendary",
        "book": "Core",
        "desc": "Parry +1.",
        "notes": ""
    },
    {
        id: 144,
        "name": "Master of Arms",
        "req": "Legendary, Weapon Master",
        "type": "Legendary",
        "book": "Core",
        "desc": "Parry +2.",
        "notes": ""
    },
    {
        id: 145,
        "name": "Wizard",
        "req": "Novice, Arcane Background, Smt d8+, Knowledge d8+, Casting d6+",
        "type": "Profession",
        "book": "Core",
        "desc": "Each raise reduces cost of spell by 1 point.",
        "notes": ""
    },
    {
        id: 146,
        "name": "Woodsman",
        "req": "Novice, Spi d6+, Survival d8+, Tracking d8+",
        "type": "Profession",
        "book": "Core",
        "desc": "+2 Tracking, Survival, and Stealth",
        "notes": ""
    }
];