<template>
  <b-card class="w-100 text-left" id="character-card">

    <b-row slot="header">
      <b-col>
        <strong>{{character.name}}</strong>
      </b-col>
      <b-col class="text-center">
        <strong>Cost (Total): </strong> {{character.cost}} ({{character.totalCost()}})
      </b-col>
      <b-col class="text-center">
        <strong>Cunning: </strong> {{character.cunning}}
      </b-col>
      <b-col class="text-center">
        <strong>Spells: </strong> {{character.spellsChosen.length}} / {{character.spellbook}}
      </b-col>
      <b-col class="text-center">
        <strong>Items: </strong> {{character.itemsChosen.length}} / {{character.items}}
      </b-col>
      <b-col class="text-right">
        <b-button @click="$emit('deleteCharacter')">X</b-button>
      </b-col>
    </b-row>

    <b-row id="character-info">
      <!--      Traits -->
      <b-col class="traits">
        <p><strong>Traits:</strong><br/>{{character.traits.join(', ')}}</p>
      </b-col>

      <!--      Spells -->
      <b-col class="spells flex-wrap">
        <b-btn class="spell-item-button" disabled>{{character.innate.name}}</b-btn>

        <b-btn @click="character.spellsChosen.splice(index, 1)" v-for="(spell, index) in character.spellsChosen"
               :key="index" class="spell-item-button">{{spell.name}}
        </b-btn>

        <b-dropdown
          class="spell-item-button"
          id="spell-dropdown"
          text="Add Spell"
          v-if="spellOptions.length > 0">
          <b-dropdown-item-button
            v-for="(option, index) in spellOptions"
            :key="index" @click="character.spellsChosen.push(option)">
            {{option.name}} ({{option.cost}})
          </b-dropdown-item-button>
        </b-dropdown>
      </b-col>

      <!--      Items -->
      <b-col class="items" cols="4">
        <b-btn @click="character.itemsChosen.splice(index, 1)" v-for="(item, index) in character.itemsChosen"
               :key="index" class="spell-item-button">{{item.name}}
        </b-btn>

        <b-dropdown
          class="spell-item-button"
          id="item-dropdown"
          text="Add Item"
          v-if="artefacts.length + potions.length > 0">
          <b-dropdown-header v-if="artefacts.length">Artefacts</b-dropdown-header>
            <b-dropdown-item-button
              v-for="(option, index) in artefacts"
              :key="option.name + index" @click="character.itemsChosen.push(option)">
              {{option.name}} ({{option.cost}})
            </b-dropdown-item-button>
          <b-dropdown-divider v-if="potions.length"></b-dropdown-divider>
          <b-dropdown-header v-if="potions.length">Potions</b-dropdown-header>
            <b-dropdown-item-button
              v-for="(option, index) in potions"
              :key="option.name + index" @click="character.itemsChosen.push(option)">
              {{option.name}} ({{option.cost}})
            </b-dropdown-item-button>
        </b-dropdown>
      </b-col>
    </b-row>

    <b-row slot="footer" class="text-center">
      <b-col cols="3">
        <strong>Magic: </strong> {{character.magic}}
      </b-col>
      <b-col cols="3">
        <strong>Courage: </strong> {{character.courage}}
      </b-col>
      <b-col cols="3">
        <strong>Temper: </strong> {{character.temper}}
      </b-col>
      <b-col cols="3">
        <strong>Wisdom: </strong> {{character.wisdom}}
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
    import Character from "@/controllers/Character"
    import Spell from "@/controllers/Spell"
    import Spellcard from "@/components/SpellCard"
    import Spells from "@/controllers/DataTables/Spells"
    import Artefacts from "@/controllers/DataTables/Artefacts"
    import Potions from "@/controllers/DataTables/Potions"
    import Affiliations from "@/controllers/DataTables/Affiliations"

    export default {
        name: "character",
        components: {Spellcard},
        props: {
            character: {
                type: Character,
                required: true
            }
        },
        methods: {
            isUnique(itemName) {
                return this.requirementsFulfilled('unique', itemName)
            },
            requirementsFulfilled(requirements, itemName = null) {
                switch (requirements) {
                    case 'unforgivable':
                        return this.character.traits.includes('Dark Arts')
                    case 'unique':
                        let isUnique = true
                        this.$parent.$parent.characters.forEach(character => {
                            character.itemsChosen.forEach(item => {
                                if (item.name === itemName) isUnique = false
                            })
                        })
                        return isUnique
                    case 'deatheaters':
                        return Affiliations["Death Eaters"].includes(this.character.id)
                    case 'potter':
                        return this.character.name.indexOf('Harry Potter') > -1 && this.isUnique(itemName)
                    case 'hallows':
                        let hasHallows = false
                        this.character.itemsChosen.forEach(item => {
                            if (item.requirements === 'hallows') hasHallows = true
                        })

                        return !hasHallows && this.isUnique(itemName)
                    default:
                        return true
                }
            },
        },
        computed: {
            allItems() {
                return Object.keys(Artefacts).concat(Object.keys(Potions))
            },
            innateIsSpell() {
                return this.character.innate instanceof Spell
            },
            spellOptions() {
                return Object.keys(Spells).filter(spellName => {
                    return Spells[spellName].cost <= this.$parent.galleonsRemaining &&
                        this.character.doesNotHaveSpell(spellName) &&
                        this.requirementsFulfilled(Spells[spellName].requirements) &&
                        this.character.spellsChosen.length < this.character.spellbook
                }).map(spellName => {
                    return Spells[spellName]
                })
            },
            itemOptions() {
                let options = {
                    'artefacts': [],
                    'potions': [],
                }

                if (this.character.itemsChosen.length < this.character.items) {
                    this.allItems.forEach(itemName => {
                        let itemType = 'artefacts'
                        let item = Artefacts[itemName]
                        if (item === undefined) {
                            itemType = 'potions'
                            item = Potions[itemName]
                        }

                        if (
                            item.cost <= this.$parent.galleonsRemaining &&
                            this.character.doesNotHaveItem(itemName) &&
                            this.requirementsFulfilled(item.requirements, item.name) &&
                            this.character.rarityAllowed(item.rarity) &&
                            (item.potionLevel === null || item.potionLevel <= this.$parent.$parent.highestPotionLevel)
                        ) {
                            options[itemType].push(item)
                        }
                    })
                }

                return options
            },
            artefacts() {
                return this.itemOptions['artefacts']
            },
            potions() {
                return this.itemOptions['potions']
            },
        }
    }
</script>

<style scoped>
  .spells {
    display: flex;
    flex-wrap: wrap;
  }

  .spell-item-button {
    margin: 2px;
    width: calc(50% - 8px);
    font-size: small;
    height: 52px
  }

  #character-info {
  }
</style>
