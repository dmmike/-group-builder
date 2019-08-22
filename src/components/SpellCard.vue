<template>
  <b-col cols="3" class="spellcard">
    <b-card>
      <b-row slot="header">
        {{spell.name}}
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
    import Spell from "@/controllers/Spell"

    export default {
        name: "spellcard",
        props: {
            spell: {
                type: Spell,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
