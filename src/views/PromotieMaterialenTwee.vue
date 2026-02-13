<script setup>
import { computed, ref } from "vue";
import PromoMaterialRow from "@/components/PromoMaterialRow.vue";

import poster1 from "@/assets/images/Programmaposter.png";
import poster2 from "@/assets/images/poster2.png";
const tab = ref("one");
const selected = ref([]);
const items = ref([
  {
    id: 1,
    title: "Uitnodigingsmail",
    subtitle: "Tekst om te kopiëren en als mailconcept te gebruiken.",
    status: "Gepubliceerd",
    statusColor: "green",
    thumb: null,
  },
  {
    id: 2,
    title: "Poster/Flyer",
    subtitle: "Visueel promotiemateriaal per activiteit.",
    status: "Gepubliceerd",
    statusColor: "green",
    thumb: poster2,
  },
  {
    id: 3,
    title: "Deurposter",
    subtitle: "Informatief materiaal per activiteit-datum en tijdslot.",
    status: "Gepubliceerd",
    statusColor: "green",
    thumb: poster2,
  },
  {
    id: 4,
    title: "Intekenlijst",
    subtitle: "Planninglijst voor 1-op-1 activiteiten met tijdsloten en deelnemers.",
    status: "Gearchiveerd",
    statusColor: "grey",
    thumb: poster1,
  },
]);

const bulkDisabled = computed(() => selected.value.length === 0);
</script>
<template>
  <div class="main-content">
    <v-tabs align-tabs="start" height="32" class="dfm-tabs" slider-color="#e6007e">
      <v-tab :to="{ name: 'PromotieMaterialenEen' }">Promotiematerialen</v-tab>
      <v-tab :to="{ name: 'PromotieMaterialenTwee' }">Instellingen</v-tab>
    </v-tabs>
    <div class="dmf-heading">
      <div class="mb-3 font-weight-medium dfm-header">
        Promotiematerialen
      </div>

      <div class="text-subtitle-1 dmf-subtitle">
        Sanday Groningen
      </div>
    </div>
    <v-card class="materials-card pa-4" variant="outlined" rounded="xl">
      <div class="d-flex flex-column ga-3">
        <PromoMaterialRow
          v-for="item in items"
          :key="item.id"
          :item="item"
          v-model="selected"
        />
      </div>
    </v-card>

    <!-- bulk action -->
    <div class="mt-6" style="max-width: 280px;">
      <v-select
        variant="outlined"
        rounded="lg"
        hide-details
        label="Bulk actie uitvoeren"
        :items="['Archiveren', 'Publiceren']"
        :disabled="bulkDisabled"
      />
    </div>
  </div>

</template>

<style scoped>
.dfm-tabs {
  font-family: 'Open Sans';
  font-weight: 500;
  margin-bottom: 2.5rem;
}

.dfm-tabs :deep(.v-tabs-slider) {
  height: 4px;
  top: 1px;
}

.dfm-tabs :deep(.v-tab) {
  text-transform: none;
  letter-spacing: -0.475px;
  padding-inline: 0;
  margin-right: .5rem;
  font-size: 1.05rem;
}

.dfm-tabs :deep(.v-tab.v-tab--selected) {
  color: #E5007D;
}

.dmf-heading {
  margin-bottom: 2.5rem;
}

.dfm-header {
  font-family: 'Dosis';
  font-size: 2.5rem;
  color: #4E4E4E;
}

.dmf-subtitle {
  font-weight: 600;
  color:#4E4E4E;
  font-family: 'Open Sans';
}

.main-content {
  margin: 3rem 0 0 5.5rem;
}

.materials-card {
  border-color: rgba(0,0,0,0.10);
  background: #fff;
  max-width: 63.625rem;
}
</style>