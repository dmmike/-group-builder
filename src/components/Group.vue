<template>
  <b-card id="group" class="mb-0 text-center">
    <b-row slot="header">
      <b-col>
        <b-dropdown
          id="character-dropdown"
          class="float-right"
          :text="orderedFilteredOptions.length === 0 ? 'No Options' : 'Add a character'"
          :disabled="orderedFilteredOptions.length === 0">
          <b-dropdown-item-button
            v-for="(option, index) in orderedFilteredOptions"
            :key="index" @click="$parent.characters.push(option)">
            {{option.name}} ({{option.cost}})
          </b-dropdown-item-button>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row v-for="(character, index) in $parent.characters" :key="index">
      <character class="character" :character="character" @deleteCharacter="$parent.characters.splice(index, 1); character.resetCharacter()"></character>
    </b-row>
  </b-card>
</template>

<script>
    import _ from 'lodash'
    import Characters from "@/controllers/DataTables/Characters"
    import Affiliations from "@/controllers/DataTables/Affiliations"
    import Character from "@/components/Character"

    export default {
        name: "group",
        components: {Character},
        methods: {
            getItemOptionsForCharacter(character) {
                let artefacts = Object.keys(Artefacts).filter(itemName => {
                    let item = Artefacts[itemName]
                    if (item === undefined) {
                        item = Potions[itemName]
                    }

                    return item.cost <= this.$parent.galleonsRemaining && character.doesNotHaveItem(itemName) && this.requirementsFulfilled(character, item.requirements)
                }).map(artefactName => {
                    return Artefacts[artefactName]
                })
                let potions = Object.keys(Potions).filter(itemName => {
                    let item = Artefacts[itemName]
                    if (item === undefined) {
                        item = Potions[itemName]
                    }

                    return (item.cost <= this.$parent.galleonsRemaining) && character.doesNotHaveItem(itemName) && this.requirementsFulfilled(character, item.requirements) && (item.potionLevel <= this.highestPotionLevel)
                }).map(potionName => {
                    return Potions[potionName]
                })

                return {'artefacts': artefacts, 'potions': potions}
            },
            requirementsFulfilled(character, requirements) {
                switch (requirements) {
                    case 'unforgivable':
                        return character.traits.includes('Dark Arts')
                    default:
                        return true
                }
            },
        },
        computed: {
            options() {
                let options = []

                Affiliations[this.$parent.chosenAffiliation].forEach(identifier => {
                    options.push(Characters[identifier])
                })

                return options
            },
            orderedFilteredOptions() {
                let finalOptions = [...this.options]

                this.$parent.characters.forEach(character => {
                    if (!character.isHorde) {
                        let allCharactersFound = false
                        while (!allCharactersFound) {
                            let index = finalOptions.findIndex((option) => {
                                return option.name === character.name
                            })

                            if (index === -1) {
                                allCharactersFound = true
                            } else {
                                finalOptions.splice(index, 1)
                            }
                        }
                    }
                })

                finalOptions = finalOptions.filter(character => {
                    return character.cost <= this.$parent.galleonsRemaining
                })

                return _.orderBy(finalOptions, 'name')
            },
        }
    }
</script>

<style scoped>
  .character {
    margin-bottom: 10px
  }
</style>
