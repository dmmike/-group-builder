export default class Spell {
  constructor(cost, name, difficulty, powerCost, type, range, cooldown, effect, hasUpkeep = false, upkeepCost = 0, requirements = null) {
    this.cost = cost
    this.name = name
    this.difficulty = difficulty
    this.cost = powerCost
    this.type = type
    this.range = range
    this.cooldown = cooldown
    this.effect = effect
    this.hasUpkeep = hasUpkeep
    this.upkeepCost = upkeepCost
    this.requirements = requirements
  }

}

Spell.TYPE_NONE = 0
Spell.TYPE_LIGHT = 1
Spell.TYPE_DARK = 2
Spell.TYPE_MIXED = 3

Spell.DAMAGE_TYPE_NONE = 0
Spell.DAMAGE_TYPE_PHYSICAL = 1
Spell.DAMAGE_TYPE_MAGICAL = 2
