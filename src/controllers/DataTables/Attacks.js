import Attack from "@/controllers/Attack"

export default {
  '005': new Attack('Bash', Attack.DAMAGE_TYPE_PHYSICAL, 2, 1, 1),
  '009': new Attack('Bash', Attack.DAMAGE_TYPE_PHYSICAL, 0, 1, 1),
  '036': new Attack('Bash', Attack.DAMAGE_TYPE_PHYSICAL, 1, 3, 2),
  '037': new Attack('Dementor\'s Kiss', Attack.DAMAGE_TYPE_PHYSICAL, 3, 2, 2, 'If this Attack is successful, target model can\'t perform Basic Actions in its next activation.'),
  '038': new Attack('Bash', Attack.DAMAGE_TYPE_PHYSICAL, 2, 1, 2),
  '044': new Attack('Stop!', Attack.DAMAGE_TYPE_PHYSICAL, 1, 0, 3, 'Slow/2'),
  '045': new Attack('Magical Strike', Attack.DAMAGE_TYPE_MAGICAL, 1, 1, 2),
  '046': new Attack('Magical Strike', Attack.DAMAGE_TYPE_MAGICAL, 1, 1, 2),
}
