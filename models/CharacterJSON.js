var character =
{
    "owner": "Tyrrexx",
    "campaign": "Void Knights",

    "basics":
    {
        "name": "Jason Fields",
        "player": "Jesse",
        "race": "Human",
        "setting": "Modern Horror",
        "profession": "Hacker",
        "age": "28",
        "ht": "73 in",
        "wt": "159 lb",
        "quote": "Information is everything. The more knowledge you have the more powerful you are.",
        "background": "Life long hacker and programmer. Recently turned vampire. He uses his newfound immortality for good."
    },

    "attributes":
    {
        "agi": "8",
        "smt": "10",
        "str": "4",
        "spi": "6",
        "vig": "6"
    },

    "derivedAttributes":
    {
        "wounds": "0",
        "fatigue": "0",
        "dmgPenalty": "0",
        "cha": "1",
        "pace": "6",
        "parry": "2",
        "toughness": "4",
        "bennies": "3",
        "powerPoints": "10",
        "encumberance": "20",
        "carried": "19",
        "encumberancePenalty": "0"
    },

    "edges":
    [
        {"name": "Super Hacker", "effect": "+2 when using computers."},
        {"name": "Witty", "effect": "+2 charisma."}
    ],

    "hindrances":
    [
        {"name": "Arrogant", "effect": "-1 charisma."},
        {"name": "Vow", "effect": "Will do anything to protect his freedom...anything."}
    ],

    "specialAbilities":
    [
        {"name": "Vampire", "effect": "All the things that come with being a vampire."}
    ],

    "injuries":
    [
        {"name": "Broken Arm", "type": "Temporary", "effect": "-2 to actions that require two arms."},
        {"name": "Facial Scare", "type": "Permanent", "effect": "Large scare on face. No real negative effect."}

    ],

    "positiveEffects":
    [
        {"name": "Courage", "type": "Temporary", "effect": "Adrenaline is pumping. +1 to attack rolls."}
    ],

    "negativeEffects":
    [
        {"name": "Drunk", "type": "Temporary", "effect": "-1 to smarts checks."}
    ],

    "weapons":
    [
        {"name": "Sniper Rifle", "range": "20", "rof": "1/action", "dmg": "1d12 + 2", "ap": "-2", "wt": "10", "notes": ".50 Calibur Death Machine."},
        {"name": "Vampiric Sword", "range": "1", "rof": "-", "dmg": "1d6", "ap": "0", "wt": "5", "notes": "Vigor check on attack. Pass heals 1 wound."}
    ],

    "armor":
    [
        {"name": "Heavy Jacket", "area": "Torso", "armorValue": "1", "wt": "4", "notes": "Stylish and protective."}
    ],

    "gear":
    [
        {"name": "Laptop", "location": "backpack", "qty": "1", "notes": "Top of the line gaming laptop."},
        {"name": "Fruit Snacks", "location": "backpack", "qty": "2", "notes": "Yummy!"}
    ],

    "powers":
    [
        {"name": "Celerity", "trapping": "Light", "cost": "2", "range": "self", "effect": "Pace becomes 10. +4 to reactions.", "duration": "5", "notes": "Nothing special."}
    ],

    "allies":
    [
        {"name": "Rose", "type": "Girlfriend", "notes": "Super cute!"},
        {"name": "Meowzilla", "type": "Pet", "notes": "Ferocious!"}
    ],

    "vehicle":
    [
        {"name": "Mitsubishi", "accel": "5", "topSpeed": "80", "toughness": "5", "crew": "4", "notes": "Stylish."}
    ]
}