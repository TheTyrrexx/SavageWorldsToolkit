//User Schemas ============================================================================================

module.exports = function(mongoose)
{
    var charSchema = new mongoose.Schema(
        {
            owner: String,
            campaign: String,
            pc: Boolean,
            notes: String,

            basics:
            {
                name: String,
                player: String,
                race: String,
                rank: String,
                xp: Number,
                setting: String,
                concept: String,

                age: Number,
                eye: String,
                hair: String,
                ht: String,
                wt: String,
                marks: String,

                quote: String,
                backstory: String
            },

            health:
            {
                wounds: Number,
                fatigue: Number,
                sanity: Number,

                woundPenalty: Number,
                fatiguePenalty: Number,

                currentPowerPoints: Number,
                maxPowerPoints: Number,

                bennies: Number,

                shaken: Boolean
            },

            attributes:
            {
                agi: Number,
                agiMod: Number,
                agiTempMod: Number,

                smt: Number,
                smtMod: Number,
                smtTempMod: Number,

                str: Number,
                strMod: Number,
                strTempMod: Number,

                spi: Number,
                spiMod: Number,
                spiTempMod: Number,

                vig: Number,
                vigMod: Number,
                vigTempMod: Number
            },

            derivedAttributes:
            {
                cha: Number,
                chaMod: Number,
                chaTempMod: Number,

                pace: Number,
                paceMod: Number,
                paceTempMod: Number,

                parry: Number,
                parryMod: Number,
                parryTempMod: Number,

                tough: Number,
                toughMod: Number,
                toughTempMod: Number,
                
                armor: Number,
                armorMod: Number,
                armorTempMod: Number,

                curCarry: Number,
                maxCarry: Number,
                encumberancePenalty: Number
            },

            edges: [],
            hindrances: [],

            skills:
            {
                boating: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                casting: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                climbing: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                driving: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                fighting: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                gambling: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                healing: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                intimidation: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                investigation: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                knowledge: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                lockpicking: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                notice: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                persuasion: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                piloting: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                repair: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                riding: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                shooting: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                stealth: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                survival: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                swimming: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                taunt: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                technology: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                throwing: {atr: String, rank: String, mod: String, tempMod: String, text: String},
                tracking: {atr: String, rank: String, mod: String, tempMod: String, text: String}
            },

            specialAbilities: [],

            effects:
                [],

            weapons:
                [],

            armor:
                [],

            gear:
                [
                    {
                        name: String,
                        area: String,
                        qty: Number,
                        wt: Number,
                        equipped: Boolean,
                        effectType: String,
                        effectMod: String,
                        text: String
                    }
                ],

            powers:
                [
                    {
                        name: String,
                        trapping: String,
                        cost: Number,
                        range: String,
                        duration: String,
                        primary: Boolean,
                        text: String
                    }
                ],

            contacts:
                [
                    {
                        name: String,
                        affiliation: String,
                        text: String
                    }
                ],

            vehicles:
                [
                    {
                        name: String,
                        accel: Number,
                        topSpeed: Number,
                        toughness: Number,
                        crew: Number,
                        text: String
                    }
                ]
        });

    var Character = mongoose.model('swtk_chars', charSchema);//Sets model to 'swtk_chars' collection

    return Character;
}