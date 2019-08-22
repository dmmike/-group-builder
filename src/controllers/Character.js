import Spell from "@/controllers/Spell"

export default class Character {
  /**
   * @param id
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
  constructor(id, name, cost, mastery, defense, cunning, type, magic, courage, temper, wisdom, traits, innate, spellbook, items, isHorde = false, health = 5, models = 1) {
    this.id = id
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
    this.innateType = innate instanceof Spell ? 'spell' : 'attack'
    this.spellbook = spellbook
    this.items = items

    this.cost = cost
    this.isHorde = isHorde
    this.health = 5
    this.models = 1

    this.spellsChosen = []
    this.itemsChosen = []

    this.totalCost = () => {
      let totalCost = this.cost
      this.spellsChosen.forEach(spell => {
        totalCost += spell.cost
      })

      this.itemsChosen.forEach(item => {
        totalCost += item.cost
      })
      return totalCost
    }

    this.doesNotHaveSpell = function (spellName) {
      return this.innate.name !== spellName && this.spellsChosen.findIndex(spell => {
        return spell.name === spellName
      }) === -1
    }

    this.doesNotHaveItem = function (itemName) {
      return this.itemsChosen.findIndex( item => {
        return item.name === itemName
      }) === -1
    }

    this.resetCharacter = () => {
      this.spellsChosen = []
      this.itemsChosen = []
    }
  }

}
