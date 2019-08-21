<template>
  <b-card id="group" class="mb-0 text-center">
    <b-row slot="header">
      <b-col>
        <h4>Group Statistics</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col><h5>Primary Group Statistics</h5></b-col>
    </b-row>

    <b-row>
      <b-col class="text-center"><strong>Galleons Spent:</strong> {{galleonsSpent}} / {{$parent.galleonLimit}}</b-col>
      <b-col><strong>Total Cunning:</strong> {{getTotalOfAttribute('cunning')}}</b-col>
      <b-col><strong>Total Models:</strong> {{getTotalOfAttribute('models')}}</b-col>
      <b-col><strong>Maximum Potion Level:</strong> {{highestPotionLevel}}</b-col>
    </b-row>

    <hr/>

    <b-row>
      <b-col><h5>Characteristics</h5></b-col>
    </b-row>

    <b-row>
        <b-col><strong>Total Magic:</strong> {{getTotalOfAttribute('magic')}}</b-col>
        <b-col><strong>Total Courage:</strong> {{getTotalOfAttribute('courage')}}</b-col>
        <b-col><strong>Total Temper:</strong> {{getTotalOfAttribute('temper')}}</b-col>
        <b-col><strong>Total Wisdom:</strong> {{getTotalOfAttribute('wisdom')}}</b-col>
    </b-row>
  </b-card>
</template>

<script>
    export default {
        name: "statistics",
        props: {
            galleonsSpent: {
                type: Number,
                required: true,
                default: 0,
            },
            highestPotionLevel: {
                type: Number,
                required: true,
                default: 1,
            }
        },
        methods: {
            getTotalOfAttribute(attribute) {
                let values = this.$parent.characters.map(character => {
                    return character[attribute]
                })

                return values.length > 0 ? values.reduce((total, amount) => total + amount) : 0
            }
        }
    }
</script>

<style scoped>

</style>
