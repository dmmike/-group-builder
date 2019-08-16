<template>
  <div>
    <label id="affiliationSelectLabel" for="affiliationSelect">Affiliation:</label>
    <select id="affiliationSelect" v-model="chosen_affiliations" @change="getOptions">
      <option v-for="affiliation in affiliations">{{affiliation}}</option>
    </select>
    <hr>
    <table class="table table-striped">
      <colgroup>
        <col width="auto">
        <col width="auto">
      </colgroup>
      <thead>
      <th>Cost</th>
      <th>Name</th>
      </thead>
      <tbody>
      <tr v-for="option in options">
        <td>{{option.cost}}</td>
        <td>
          {{option.name}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    import Affiliations from "@/controllers/DataTables/Affiliations"
    import Characters from "@/controllers/DataTables/Characters"

    export default {
        data() {
            return {
                affiliations: Object.keys(Affiliations),
                chosen_affiliations: 'Hogwarts',
                options: [],
            }
        },
        methods: {
            getOptions() {
                this.options = []

                Affiliations[this.chosen_affiliations].forEach(identifier => {
                    this.options.push(Characters[identifier])
                })
            }
        },
        mounted() {
            this.getOptions()
        }
    }
</script>

<style scoped>
</style>
