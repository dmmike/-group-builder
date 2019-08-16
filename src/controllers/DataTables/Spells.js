import Spell from "@/controllers/Spell"

export default {
  'Avada Kedavra': new Spell('Avada Kedavra', 2, 4, Spell.TYPE_DARK, 4, 3, 'Combat Spell. If successful, target model is removed from play, ignoring all normal Damage rules.', false, 0, true),
  'Apparition': new Spell('Apparition', 4, 3, Spell.TYPE_MIXED, null, 2, 'Immediately move the model up to 8 spaces, ignoring obstacles, and treating Difficult and Impassable terrain as Open Terrain.'),
  'Bombarda': new Spell('Bombarda', 1, 2, Spell.TYPE_MIXED, 4, 2, 'Combat Spell. If successful, target model suffers 2 Physical Damage.'),
  'Confundo': new Spell('Confundo', 0, 1, Spell.TYPE_MIXED, 4, 2, 'Combat Spell. If successful, target model loses 1 Action in its next activation (the opponent chooses which Action).'),
  'Counter-Spell': new Spell('Counter-Spell', '?', 3, Spell.TYPE_MIXED, 4, 3, 'Reaction: Model within range casts Spell. Difficulty is equal to the number of Power points used to cast trigger spell, +1. If successful, trigger spell automatically fails.'),
  'Crucio': new Spell('Crucio', 1, 3, Spell.TYPE_DARK, 4, 2, 'Combat Spell. If successful, target model suffers 2 Magical Damage', true, 1, true),
  'Impedimenta': new Spell('Impedimenta', 4, 1, Spell.TYPE_MIXED, 4, 2, 'Target model can\'t perform Move Actions in its next activation'),
  'Jelly-Legs Jinx': new Spell('Jelly-Legs Jinx', 3, 2, Spell.TYPE_MIXED, 4, 2, 'Target model receives the Slow/3 effect.'),
  'Evanesco': new Spell('Evanesco', 5, 3, Spell.TYPE_MIXED, 4, 3, 'Remove target scenery overlay from the board.'),
  'Expecto Patronum': new Spell('Expecto Patronum', 4, 3, Spell.TYPE_LIGHT, 3, 3, 'Place a Patronus marker within range.', true, 2),
  'Expelliarmus': new Spell('Expelliarmus', 0, 1, Spell.TYPE_MIXED, 4, 1, 'Combat Spell. If successful, choose one of the target\'s Item cards. That card may not be used for the rest of the round.'),
  'Obliviate': new Spell('Obliviate', 3, 1, Spell.TYPE_MIXED, 4, 1, 'Target model increases the Difficulty of the next Challenge it is involved in by 2.'),
  'Petrificus Totalus': new Spell('Petrificus Totalus', 1, 2, Spell.TYPE_MIXED, 4, 2, 'Combat Spell. Target model suffers the Petrify Effect'),
  'Protego Maxima': new Spell('Protego Maxima', 5, 3, Spell.TYPE_MIXED, 4, 2, 'Target model gains 2 automatic Successes on all Defense rolls until the end of the round.', true, 2),
  'Reducto': new Spell('Reducto', 5, 3, Spell.TYPE_MIXED, 3, 3, 'Remove target Impassable terrain overlay'),
  'Sectumsempra': new Spell('Sectumsempra', 1, 3, Spell.TYPE_DARK, 4, 2, 'Combat Spell. Target model suffers 1 Physical Damage, and cannot perform Move Actions in its next activation.', true, 2),
  'Stupefy': new Spell('Stupefy', 0, 1, Spell.TYPE_MIXED, 4, 1, 'Combat Spell. Target model suffers 1 Physical Damage.'),
}
