/**
 * Rounds a number
 * @param {float} value - Number value to be rounded
 */
const ROUNDED = value => Math.round(value);

/**
 * Converts percent to decimal
 * @param {string} percent - String value of the percentage
 */
const PERCENT_VALUE = percent => parseFloat(percent) / 100.0;

/**
 * Calculate Shield Boomerang Damage
 * @param {integer} VIT - Vitality
 * @param {integer} DEX - Dexterity
 * @param {integer} LUK - Luck
 * @param {integer} SHIELD_REFINING_LEVEL - Shield Refinement Level
 * @param {integer} ATK - Attack
 * @param {integer} REFINE_ATK - Refine Attack
 * @param {string} JOB_BREAKTHROUGH_PERCENTAGE  - Percentage Attack multiplier from Job Breakthrough
 * @param {string} RUNE_MULTIPLIER_PERCENTAGE - Percentage Damage multiplier from Runes
 * @param {boolean} WEARING_MIRROR_SHIELD - True if character is wearing mirror shield
 */
const CALCULATE = (VIT=0, DEX=0, LUK=0, 
                  SHIELD_REFINING_LEVEL=0, 
                  ATK=0, REFINE_ATK=0, 
                  JOB_BREAKTHROUGH_PERCENTAGE='0%', 
                  RUNE_MULTIPLIER_PERCENTAGE='0%',
                  WEARING_MIRROR_SHIELD=false) => {

  const SKILL_MULTIPLIER_PERCENTAGE = '600%';
  const SKILL_MULTIPLIER = PERCENT_VALUE(SKILL_MULTIPLIER_PERCENTAGE);
  const JOB_BREAKTHROUGH = PERCENT_VALUE(JOB_BREAKTHROUGH_PERCENTAGE);
  const RUNE_MULTIPLIER = PERCENT_VALUE(RUNE_MULTIPLIER_PERCENTAGE);
  const MIRROR_SHIELD_MULTIPLIER_PERCENTAGE = '15%';
  const MIRROR_SHIELD_MULTIPLIER = PERCENT_VALUE(MIRROR_SHIELD_MULTIPLIER_PERCENTAGE);
  const SHIELD_BOOM_DAMAGE = (SKILL_MULTIPLIER * 
                              ((VIT * 8) + 
                              (ROUNDED(VIT*VIT/100)*4) + 
                              ROUNDED(DEX/5) + 
                              ROUNDED(LUK/5) + 
                              (SHIELD_REFINING_LEVEL*SHIELD_REFINING_LEVEL*2)) +
                              ((ATK+REFINE_ATK)*JOB_BREAKTHROUGH));
  const RUNED_SHIELD_BOOM_DAMAGE = SHIELD_BOOM_DAMAGE + (SHIELD_BOOM_DAMAGE*RUNE_MULTIPLIER);
  const TOTAL_SHIELD_BOOM_DAMAGE =
      WEARING_MIRROR_SHIELD ?
        RUNED_SHIELD_BOOM_DAMAGE + (RUNED_SHIELD_BOOM_DAMAGE*MIRROR_SHIELD_MULTIPLIER) :
        RUNED_SHIELD_BOOM_DAMAGE;

  return TOTAL_SHIELD_BOOM_DAMAGE;
}

console.log(
  'Total Shield Boomerang Damage: ',
  CALCULATE(99+94, 40+37, 0+23, 7, 1438, 180, '90%', '25%', true)
);

console.log(
  'Total Shield Boomerang Damage: ',
  CALCULATE(100, 55, 20, 4, 0, 0, '0%', '0%', true)
);

console.log(
  'Total Shield Boomerang Damage: ',
  CALCULATE(100, 55, 20, 7, 0, 0, '0%', '0%', true)
);

// const VIT = 99 + 94;
// const DEX = 40 + 37;
// const LUK = 0 + 23;
// const SHIELD_REFINING_LEVEL = 7;
// const ATK = 1438;
// const REFINE_ATK = 180;
// const JOB_BREAKTHROUGH_PERCENTAGE = '90%';
// const JOB_BREAKTHROUGH = PERCENT_VALUE(JOB_BREAKTHROUGH_PERCENTAGE);
// const RUNE_MULTIPLIER_PERCENTAGE = '25%';
// const RUNE_MULTIPLIER = PERCENT_VALUE(RUNE_MULTIPLIER_PERCENTAGE);

// const SHIELD_BOOM_DAMAGE = 
//   (SKILL_MULTIPLIER * 
//   ((VIT * 8) + 
//   (ROUNDED(VIT*VIT/100)*4) + 
//   ROUNDED(DEX/5) + 
//   ROUNDED(LUK/5) + 
//   (SHIELD_REFINING_LEVEL*SHIELD_REFINING_LEVEL*2)) +
//   ((ATK+REFINE_ATK)*JOB_BREAKTHROUGH));

// const RUNED_SHIELD_BOOM_DAMAGE = SHIELD_BOOM_DAMAGE + (SHIELD_BOOM_DAMAGE*RUNE_MULTIPLIER);

// console.log('Total Shield Boomerang Damage: ', RUNED_SHIELD_BOOM_DAMAGE);