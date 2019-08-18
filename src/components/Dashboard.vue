<template>
  <div>
    <p>{{costTotal}} of <input type="number" v-model="costLimit"></p>
    <label id="affiliationSelectLabel" for="affiliationSelect">Affiliation:</label>
    <select id="affiliationSelect" v-model="chosen_affiliations">
      <option v-for="affiliation in affiliations">{{affiliation}}</option>
    </select>
    <hr>
    <button disabled v-if="orderedFilteredOptions.length === 0">No character available for available cost</button>
    <dropdown :close-on-click="true" v-if="orderedFilteredOptions.length > 0">
      <template slot="btn">Add a character</template>
      <template slot="body">
        <ul>
          <li v-for="option in orderedFilteredOptions" @click="characters.push(option)" :title="option.innate.name">
            {{option.name}} ({{option.cost}})
          </li>
        </ul>
      </template>
    </dropdown>
    <table>
      <thead>
      <th>Character</th>
      <th>Cost (Total)</th>
      <th>Spells</th>
      <th></th>
      <th>Items</th>
      <th></th>
      <th></th>
      </thead>
      <tbody>
      <tr v-for="(character, index) in characters">
        <td>{{character.name}}</td>
        <td>{{character.cost}} ({{character.totalCost()}})</td>
        <td><span v-if="character.innateType === 'spell'">{{character.innate.name}}</span><span
          v-for="(spell, index) in character.spellsChosen" @click="character.spellsChosen.splice(index, 1)">{{spell.name}}</span>
        </td>
        <td>
          <dropdown :close-on-click="true" v-if="character.spellsChosen.length < character.spellbook">
            <template slot="btn">Add spell</template>
            <template slot="body">
              <ul>
                <li v-for="spell in getSpellOptionsForCharacter(character)" @click="character.spellsChosen.push(spell)">
                  {{spell.name}} ({{spell.cost}})
                </li>
              </ul>
            </template>
          </dropdown>
        </td>
        <td>
          <span v-for="(item, index) in character.itemsChosen" @click="character.itemsChosen(index, 1)">{{item.name}}</span>
        </td>
        <td></td>
        <td>
          <button @click="characters.splice(index, 1)">Verwijder</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import _ from 'lodash'
    import Affiliations from "@/controllers/DataTables/Affiliations"
    import Characters from "@/controllers/DataTables/Characters"
    import Spells from "@/controllers/DataTables/Spells"

    export default {
        data() {
            return {
                affiliations: Object.keys(Affiliations),
                chosen_affiliations: 'Hogwarts',
                characters: [],
                costLimit: 50,
            }
        },
        computed: {
            options() {
                let options = []

                Affiliations[this.chosen_affiliations].forEach(identifier => {
                    options.push(Characters[identifier])
                })

                return options
            },
            costTotal() {
                let cost = this.characters.map(character => {
                    return character.cost
                })
                return cost.length > 0 ? cost.reduce((total, amount) => total + amount) : 0
            },
            orderedFilteredOptions() {
                let finalOptions = [...this.options]

                this.characters.forEach(character => {
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
                    return character.cost <= (this.costLimit - this.costTotal)
                })

                return _.orderBy(finalOptions, 'name')
            },
            goldRemaining() {
                return this.costLimit - this.costTotal
            }
        },
        methods: {
            getSpellOptionsForCharacter(character) {
                return Object.keys(Spells).filter(spellName => {
                    return Spells[spellName].cost <= this.goldRemaining && character.doesNotHaveSpell(spellName) && this.requirementsFulfilled(character, Spells[spellName].requirements)
                }).map(spellName => {
                    return Spells[spellName]
                })
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
        mounted() {
        }
    }
</script>

<style scoped>
</style>
