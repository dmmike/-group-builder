export default class Character {
  /**
   * @param name
   * @param cost
   * @param mastery
   * @param defense
   * @param cunning
   * @param type
   * @param magic
   * @param courage
   * @param temper
   * @param wisdom
   * @param traits
   * @param innate
   * @param spellbook
   * @param items
   * @param isHorde
   * @param health
   * @param models
   */
  constructor(name, cost, mastery, defense, cunning, type, magic, courage, temper, wisdom, traits, innate, spellbook, items, isHorde = false, health = 5, models = 1) {
    this.name = name
    this.mastery = mastery

    this.defense = defense

    this.cunning = cunning
    this.type = type

    this.magic = magic
    this.courage = courage
    this.temper = temper
    this.wisdom = wisdom

    this.traits = traits
    this.innate = innate
    this.spellbook = spellbook
    this.items = items

    this.cost = cost
    this.isHorde = isHorde
    this.health = 5
    this.models = 1
  }

}
