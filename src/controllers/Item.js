export default class Item {
  constructor (cost, name, rarity, effect, potionLevel = null, range = null, requirements = null) {
    this.cost = cost
    this.name = name
    this.rarity = rarity
    this.effect = effect
    this.requirements = requirements
    this.potionLevel = potionLevel
    this.range = range
  }
}

Item.RARITY_COMMON = 'common'
Item.RARITY_RARE = 'rare'
Item.RARITY_LEGENDARY = 'legendary'
