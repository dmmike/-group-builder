<template>
  <b-container>
    <b-row align-h="center">

    </b-row>

    <b-row>
      <b-card-body>
        <settings></settings>
      </b-card-body>
    </b-row>
    <b-row>
      <b-card-body>
        <statistics :highest-potion-level="highestPotionLevel" :galleons-spent="galleonsSpent"></statistics>
      </b-card-body>
    </b-row>
    <b-row>
      <b-card-body>
        <group></group>
      </b-card-body>
    </b-row>

  </b-container>
</template>

<script>
    import settings from "@/components/Settings"
    import statistics from "@/components/GroupStatistics"
    import group from "@/components/Group"

    export default {
        components: {group, statistics, settings},
        data() {
            return {
                chosenAffiliation: 'Hogwarts',
                characters: [],
                galleonLimit: 50,
                snackbar: false,
                spellHover: null,
            }
        },
        computed: {
            galleonsSpent() {
                let cost = 0
                this.characters.forEach(character => {
                    cost += character.totalCost()
                })
                return cost
            },
            galleonsRemaining() {
                return this.galleonLimit - this.galleonsSpent
            },
            highestPotionLevel() {
                let potioneerLevel = 0

                this.characters.forEach(character => {
                    for (let i = 1; i <= 3; i++) {
                        if (character.traits.includes('Potioneer ' + i) && i > potioneerLevel) {
                            potioneerLevel = i
                            break
                        }
                    }
                })

                return potioneerLevel + 1
            },
        },
        methods: {
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
