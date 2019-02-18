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
 * @param {string} PERCENT_ATK_MULTIPLIER_STR  - Percentage Attack multiplier from Job Breakthrough
 * @param {string} RUNE_MULTIPLIER_STR - Percentage Damage multiplier from Runes
 */
const CALCULATE = (VIT=0, DEX=0, LUK=0, 
                  SHIELD_REFINING_LEVEL=0, 
                  ATK=0, REFINE_ATK=0, 
                  PERCENT_ATK_MULTIPLIER_STR='0%', 
                  RUNE_MULTIPLIER_STR='0%') => {

  const PERCENT_600_STR = '600%';
  const PERCENT_600 = PERCENT_VALUE(PERCENT_600_STR);
  const PERCENT_ATK_MULTIPLIER = PERCENT_VALUE(PERCENT_ATK_MULTIPLIER_STR);
  const RUNE_MULTIPLIER = PERCENT_VALUE(RUNE_MULTIPLIER_STR);
  const SHIELD_BOOM_DAMAGE = (PERCENT_600 * 
                              ((VIT * 8) + 
                              (ROUNDED(VIT*VIT/100)*4) + 
                              ROUNDED(DEX/5) + 
                              ROUNDED(LUK/5) + 
                              (SHIELD_REFINING_LEVEL*SHIELD_REFINING_LEVEL*2)) +
                              ((ATK+REFINE_ATK)*PERCENT_ATK_MULTIPLIER));
  const RUNED_SHIELD_BOOM_DAMAGE = SHIELD_BOOM_DAMAGE + (SHIELD_BOOM_DAMAGE*RUNE_MULTIPLIER);
  return RUNED_SHIELD_BOOM_DAMAGE;
}

console.log(
  'Total Shield Boomerang Damage: ',
  CALCULATE(99+94, 40+37, 0+23, 7, 1438, 180, '90%', '25%')
);

// const VIT = 99 + 94;
// const DEX = 40 + 37;
// const LUK = 0 + 23;
// const SHIELD_REFINING_LEVEL = 7;
// const ATK = 1438;
// const REFINE_ATK = 180;
// const PERCENT_ATK_MULTIPLIER_STR = '90%';
// const PERCENT_ATK_MULTIPLIER = PERCENT_VALUE(PERCENT_ATK_MULTIPLIER_STR);
// const RUNE_MULTIPLIER_STR = '25%';
// const RUNE_MULTIPLIER = PERCENT_VALUE(RUNE_MULTIPLIER_STR);

// const SHIELD_BOOM_DAMAGE = 
//   (PERCENT_600 * 
//   ((VIT * 8) + 
//   (ROUNDED(VIT*VIT/100)*4) + 
//   ROUNDED(DEX/5) + 
//   ROUNDED(LUK/5) + 
//   (SHIELD_REFINING_LEVEL*SHIELD_REFINING_LEVEL*2)) +
//   ((ATK+REFINE_ATK)*PERCENT_ATK_MULTIPLIER));

// const RUNED_SHIELD_BOOM_DAMAGE = SHIELD_BOOM_DAMAGE + (SHIELD_BOOM_DAMAGE*RUNE_MULTIPLIER);

// console.log('Total Shield Boomerang Damage: ', RUNED_SHIELD_BOOM_DAMAGE);