<template>
  <b-card id="settings" class="mb-0">
    <b-row slot="header">
      <b-col class="text-center">
        <h4>Game Settings</h4>
      </b-col>
    </b-row>

    <b-card-body>
      <b-row align-h="around">
        <b-col class="text-center">
          <strong>Affiliation:</strong>
          <b-dropdown id="affiliation-dropdown" :text="$parent.chosenAffiliation" ref="dropdown" class="m-2">
            <b-dropdown-item-button v-for="(affiliation, index) in affiliations" :key="index"
                                    @click="$parent.chosenAffiliation = affiliation">{{affiliation}}
            </b-dropdown-item-button>
          </b-dropdown>
        </b-col>
        <b-col class="text-center">
          <strong>Galleon Limit:</strong>
          <b-dropdown id="galleon-dropdown" :text="$parent.galleonLimit.toString()" ref="dropdown" class="m-2">
            <b-dropdown-item-button
              v-for="(value, index) in standardGalleonLimits"
              :key="index" @click="$parent.galleonLimit = value">
              {{index}} ({{value}})
            </b-dropdown-item-button>
            <!-- TODO: Implement custom point setting-->
          </b-dropdown>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
    import Affiliations from "@/controllers/DataTables/Affiliations"

    export default {
        name: "settings",
        data() {
            return {
                standardGalleonLimits: {
                    'Small': 30,
                    'Normal': 50,
                    'Large': 75,
                    'Huge': 100,
                },
                affiliations: Object.keys(Affiliations),
            }
        }
    }
</script>

<style scoped>

</style>
