/**
 * Calculate Shield Boomerang Damage
 * @param {integer} VIT - Vitality
 * @param {integer} DEX - Dexterity
 * @param {integer} LUK - Luck
 * @param {integer} SHIELD_REFINE_LEVEL - Shield Refinement Level
 * @param {integer} ATK - Attack
 * @param {integer} REFINE_ATK - Refine Attack
 * @param {string} JOB_BREAKTHROUGH_MULTIPLIER_PERCENTAGE  - Percentage Attack multiplier from Job Breakthrough
 * @param {string} RUNE_MULTIPLIER_PERCENTAGE - Percentage Damage multiplier from Runes
 * @param {boolean} WEARING_MIRROR_SHIELD - True if character is wearing mirror shield
 */
const calculate = (VIT=0, DEX=0, LUK=0, 
                  SHIELD_REFINE_LEVEL=0, 
                  ATK=0, REFINE_ATK=0, 
                  JOB_BREAKTHROUGH_MULTIPLIER_PERCENTAGE='0%', 
                  RUNE_MULTIPLIER_PERCENTAGE='0%',
                  WEARING_MIRROR_SHIELD=false) => {

  const SKILL_MULTIPLIER_PERCENTAGE = '600%';
  const SKILL_MULTIPLIER = percentToDecimal(SKILL_MULTIPLIER_PERCENTAGE);
  const JOB_BREAKTHROUGH_MULTIPLIER = percentToDecimal(JOB_BREAKTHROUGH_MULTIPLIER_PERCENTAGE);
  const RUNE_MULTIPLIER = percentToDecimal(RUNE_MULTIPLIER_PERCENTAGE);
  const MIRROR_SHIELD_MULTIPLIER_PERCENTAGE = '15%';
  const MIRROR_SHIELD_MULTIPLIER = percentToDecimal(MIRROR_SHIELD_MULTIPLIER_PERCENTAGE);
  const SHIELD_BOOM_DAMAGE = (SKILL_MULTIPLIER * 
                              ((VIT * 8) + 
                              (rounded(VIT*VIT/100)*4) + 
                              rounded(DEX/5) + 
                              rounded(LUK/5) + 
                              (SHIELD_REFINE_LEVEL*SHIELD_REFINE_LEVEL*2)) +
                              ((ATK+REFINE_ATK)*JOB_BREAKTHROUGH_MULTIPLIER));
  const RUNED_SHIELD_BOOM_DAMAGE = SHIELD_BOOM_DAMAGE + (SHIELD_BOOM_DAMAGE*RUNE_MULTIPLIER);
  const TOTAL_SHIELD_BOOM_DAMAGE = !WEARING_MIRROR_SHIELD ? RUNED_SHIELD_BOOM_DAMAGE :
                                    RUNED_SHIELD_BOOM_DAMAGE + (RUNED_SHIELD_BOOM_DAMAGE*MIRROR_SHIELD_MULTIPLIER);

  return TOTAL_SHIELD_BOOM_DAMAGE;
}

/**
 * Rounds a number
 * @param {float} value - Number value to be rounded
 */
const rounded = value => Math.round(value);

/**
 * Converts percent to decimal
 * @param {string} percent - String value of the percentage
 */
const percentToDecimal = percent => parseFloat(percent) / 100.0;

/**
 * @description Execute the app
 */
const app = () => {
  // Inputs
  const inputs = [
    {
      description: 'Total Shield Boomerang Damage - Level 98 with 3-star food buffs: ',
      VIT: 99+101,
      DEX: 40+39,
      LUK: 0+21,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1904,
      REFINE_ATK: 287,
      JOB_BREAKTHROUGH_MULTIPLIER: '100%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    },
    {
      description: 'Total Shield Boomerang Damage - Level 97 with basic food buffs: ',
      VIT: 99+100,
      DEX: 41+39,
      LUK: 0+21,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1749,
      REFINE_ATK: 294,
      JOB_BREAKTHROUGH_MULTIPLIER: '100%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    },
    {
      description: 'Total Shield Boomerang Damage - Level 96 with Rye Pet: ',
      VIT: 99+102,
      DEX: 40+37,
      LUK: 0+25,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1530,
      REFINE_ATK: 189,
      JOB_BREAKTHROUGH_MULTIPLIER: '100%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    },
    {
      description: 'Total Shield Boomerang Damage - Level 95 with Rye Pet: ',
      VIT: 99+100,
      DEX: 40+35,
      LUK: 1+23,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1486,
      REFINE_ATK: 191,
      JOB_BREAKTHROUGH_MULTIPLIER: '100%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    },
    {
      description: 'Total Shield Boomerang Damage with Rye Pet and Food Buff: ',
      VIT: 99+94,
      DEX: 40+37,
      LUK: 0+23,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1438,
      REFINE_ATK: 180,
      JOB_BREAKTHROUGH_MULTIPLIER: '90%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    },
    {
      description: 'Total Shield Boomerang Damage with Isis Pet: ',
      VIT: 99+89,
      DEX: 40+37,
      LUK: 0+23,
      SHIELD_REFINE_LEVEL: 7,
      ATK: 1289,
      REFINE_ATK: 180,
      JOB_BREAKTHROUGH_MULTIPLIER: '90%',
      RUNE_MULTIPLIER: '25%',
      WEARING_MIRROR_SHIELD: true
    }
  ];

  inputs.forEach(input => {
    console.log(
      input.description,
      calculate(
        input.VIT,
        input.DEX,
        input.LUK,
        input.SHIELD_REFINE_LEVEL,
        input.ATK,
        input.REFINE_ATK,
        input.JOB_BREAKTHROUGH_MULTIPLIER,
        input.RUNE_MULTIPLIER,
        input.WEARING_MIRROR_SHIELD
    ));
  })
}
app();
