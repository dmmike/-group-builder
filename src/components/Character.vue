<template>
  <b-card class="w-100 text-left">

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

    <b-row>
      <b-col class="traits" cols="4">
        <p><strong>Traits:</strong><br/>{{character.traits.join(', ')}}</p>
      </b-col>
      <b-col class="spells flex-wrap" cols="4">
        <b-btn class="spell-button" disabled>{{character.innate.name}}</b-btn>

        <b-btn @click="character.spellsChosen.splice(index, 1)" v-for="(spell, index) in character.spellsChosen" :key="index" class="spell-button">{{spell.name}}</b-btn>

        <b-dropdown
          class="spell-button"
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

    export default {
        name: "character",
        components: {Spellcard},
        props: {
            character: {
                type: Character,
                required: true
            }
        },
        computed: {
            innateIsSpell() {
                return this.character.innate instanceof Spell
            },
            spellOptions() {
                return Object.keys(Spells).filter(spellName => {
                    return Spells[spellName].cost <= this.$parent.$parent.galleonsRemaining &&
                        this.character.doesNotHaveSpell(spellName) &&
                        this.$parent.requirementsFulfilled(this.character, Spells[spellName].requirements) &&
                        this.character.spellsChosen.length < this.character.spellbook
                }).map(spellName => {
                    return Spells[spellName]
                })
            }
        }
    }
</script>

<style scoped>
  .spell-button {
    margin:2%;
    width:45%;
  }
</style>
