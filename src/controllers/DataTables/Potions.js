import Item from "@/controllers/Item"

export default {
  'Antidote to Common Poisons': new Item(1, 'Antidote to Common Poisons', Item.RARITY_COMMON, 'Remove X+1 Poison markers from target model. (X = user\'s Potioneer Level).', 1, 1),
  'Antidote to Uncommon Poisons': new Item(2, 'Antidote to Uncommon Poisons', Item.RARITY_RARE, 'Removes all Poison markers from target model.', 1, 1),
  'Anti-Paralysis Potion': new Item(1, 'Anti-Paralysis Potion', Item.RARITY_COMMON, 'Remove all Petrify markers from target model.', 1, 1),
  'Awakening Potion': new Item(1, 'Awakening Potion', Item.RARITY_RARE, 'Restore all target model\'s Characteristics to their starting value (even if they were higher).', 2, 4),
  'Exploding Potion': new Item(2, 'Exploding Potion', Item.RARITY_RARE, 'Deals 2 + X Physical Damage to target model. (X = user\'s Potioneer Level).', 2, 4),
  'Garrotting Gas': new Item(1, 'Garrotting Gas', Item.RARITY_COMMON, 'Target model may not perform Advanced Actions in its next activation.', 1, 3),
  'Grand Pepperup Potion': new Item(2, 'Grand Pepperup Potion', Item.RARITY_RARE, 'Removes X+2 Damage from target model. (X = user\'s Potioneer Level).', 3, 1),
  'Invigorating Draught': new Item(1, 'Invigorating Draught', Item.RARITY_RARE, 'Target model gains +2 Power points. These points can only be used by that model. If they are not used by end of its next activation, the points are lost.', 3, 1),
  'Invisibility Potion': new Item(1, 'Invisibility Potion', Item.RARITY_COMMON, 'User gains Concealment/10 until the end of the round.', 1, 0),
  'Noxious Potion': new Item(1, 'Noxious Potion', Item.RARITY_COMMON, 'Target model receives X+1 Poison Markers. (X = uer\'s Potioneer Level).', 1 , 3),
  'Pepperup Potion': new Item(1, 'Pepperup Potion', Item.RARITY_RARE, 'Target model heals X+1 Damage levels. (X = user\'s Potioneer Level).', 2, 1),
  'Polyjuice Potion': new Item(1, 'Polyjuice Potion', Item.RARITY_RARE, 'User gains Concealment/12 until it performs any attack, casts a spell, or receives Damage.', 1, 0),
}
