export default class Spell {
  constructor(name, difficulty, cost, type, range, cooldown, effect, hasUpkeep = false, upkeepCost = 0) {
    this.name = name
    this.difficulty = difficulty
    this.cost = cost
    this.type = type
    this.range = range
    this.cooldown = cooldown
    this.effect = effect
    this.hasUpkeep = hasUpkeep
    this.upkeepCost = upkeepCost
  }

}

Spell.TYPE_NONE = 0
Spell.TYPE_LIGHT = 1
Spell.TYPE_DARK = 2
Spell.TYPE_MIXED = 3

Spell.DAMAGE_TYPE_NONE = 0
Spell.DAMAGE_TYPE_PHYSICAL = 1
Spell.DAMAGE_TYPE_MAGICAL = 2
