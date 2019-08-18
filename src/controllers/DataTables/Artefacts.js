import Item from "@/controllers/Item"

export default {
  'Acromantula Venom': new Item(1, 'Acromantula Venom', Item.RARITY_RARE, 'A model may discard this card to add the Poison/1 Effect to one Attack with the Physical Damage type'),
  'Bellatix Lestrange\'s Knife': new Item(2, 'Bellatrix Lestrange\'s Knife', Item.RARITY_RARE, 'This card grants the following attack: B4, D1 (P), R4', null, null, 'unique'),
  'Death Eater Mask': new Item(1, 'Death Eater Mask', Item.RARITY_RARE, 'The first time this model suffers Damage in the game, it reduces the number of Damage markers received by 1.', null, null, 'deatheaters'),
  'Death Eater Wand': new Item(1, 'Death Eater Wand', Item.RARITY_RARE, 'Once per game before making a Casting roll, this model can choose to add 1 automatic Success.', null, null, 'deatheaters'),
  'Death Eater Robe': new Item(1, 'Death Eater Robe', Item.RARITY_RARE, 'Once per game before making a Defense roll, this model an choose to add 1 automatic Success.', null, null, 'deatheaters'),
  // Deluminator commented out as its benefits are useless until the traits it mentions are actually added to the game
  // 'Deluminator': new Item(2, 'Deluminator', Item.RARITY_RARE, 'Choose at the start of the model\'s activation: Gain the Stealth rule until the end of the round, or: Target model within 6 spaces loses the Stealth rule until the end of the round.', null, null, 'unique'),
  'Hedwig': new Item(2, 'Hedwig', Item.RARITY_COMMON, 'A model with this card attached gains +1 Wisdom and the Scout rule.', null, null, 'potter'),
  'Invisibility Cloak': new Item(2, 'Invisibility Cloak', Item.RARITY_LEGENDARY, 'A model with this card can spend an Advanced Action to gain Concealment/12 until the end of the round.', null, null, 'hallows'),
  'Knife': new Item(1, 'Knife', Item.RARITY_COMMON, 'This card grants the following attack: B3, D1 (P), R1.'),
  'Spellbook': new Item(1, 'Spellbook', Item.RARITY_COMMON, 'A model with this card may attach an extra Spell to its Spellbook.'),
  'Sword': new Item(2, 'Sword', Item.RARITY_COMMON, 'This card grants the following attack: B2, D2, (P), R1.'),
  'Time-Turner': new Item(2, 'Time-Turner', Item.RARITY_RARE, 'Once per round, a model with this card can spend an Advanced Action to choose one of the following options: Advance the Cooldown Clock one step for one spell, or: Move anywhere within 3 spaces.', null, null, 'unique'),
  'Unicorn Blood': new Item(2, 'Unicorn Blood', Item.RARITY_RARE, 'A model may discard this card to remove all its Damage markers. However, for the remainder of the game the model must reduce its Cunning by 1, and deduct 1 Success from its Casting Rolls.', null, null, 'deatheaters'),
}
