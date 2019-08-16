import Spell from "@/controllers/Spell"

export default class Attack {
  /**
   * @param name
   * @param type
   * @param bonus
   * @param damage
   * @param range
   * @param effect
   */
  constructor(name, type, bonus, damage, range, effect = null) {
    this.name = name
    this.type = type
    this.bonus = bonus
    this.damage = damage
    this.range = range
    this.effect = effect
  }
}

Attack.DAMAGE_TYPE_NONE = Spell.DAMAGE_TYPE_NONE
Attack.DAMAGE_TYPE_MAGICAL = Spell.DAMAGE_TYPE_MAGICAL
Attack.DAMAGE_TYPE_PHYSICAL = Spell.DAMAGE_TYPE_PHYSICAL
