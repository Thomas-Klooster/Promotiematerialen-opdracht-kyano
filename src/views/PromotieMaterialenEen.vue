<script setup>
import programmaposter from '@/assets/images/Programmaposter.png'
import card_1 from '@/assets/images/card-1.png'
import card_2 from '@/assets/images/card-2.png'
import card_3 from '@/assets/images/card-3.png'
import { ref } from "vue";
const tab = ref("one");
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

    <v-card
      variant="outlined"
      rounded="lg"
      class="promo-card pa-2"
    >
      <div class="d-flex align-center ga-4">
        <!-- thumbnail -->
        <v-avatar rounded="lg" size="64">
          <v-img :src="programmaposter" cover />
        </v-avatar>

        <!-- text -->
        <div class="flex-grow-1">
          <div style="font-family: 'Open Sans'; margin-bottom: .5rem;" class="text-body-1 font-weight-medium">Programmaposter</div>
          <div style="font-family: 'Open Sans';" class="text-body-2 text-medium-emphasis">
            Overzicht van meerdere activiteiten binnen een periode.
          </div>
        </div>

        <!-- kebab -->
        <v-btn icon variant="text">
          <v-icon icon="mdi-dots-vertical" />
        </v-btn>
      </div>
    </v-card>

    <div class="filters mt-8">
      <v-select
        class="filter"
        density="compact"
        variant="outlined"
        rounded="lg"
        hide-details
        label="Filter locatie"
        :items="[]"
        menu-icon="mdi-chevron-down"
      />

      <v-select
        class="filter"
        density="compact"
        variant="outlined"
        rounded="lg"
        hide-details
        label="Filter activiteit"
        :items="[]"
        menu-icon="mdi-chevron-down"
      />

      <v-select
        class="filter"
        density="compact"
        variant="outlined"
        rounded="lg"
        hide-details
        label="Filter jaar"
        :items="[]"
        menu-icon="mdi-chevron-down"
      />


      <v-text-field
        class="filter sort"
        density="compact"
        variant="outlined"
        rounded="lg"
        hide-details
        label="Sorteren"
        readonly
        append-inner-icon="mdi-sort-variant"
      />
    </div>

    <div class="mt-8">
      <div class="text-h5 font-weight-semibold mb-2" style="font-family: 'Dosis';">Jouw activiteiten</div>
      <div class="d-flex ga-4">
        <v-card
          class="pa-2 activity-card"
          min-width="14.8125rem"
          rounded="lg"
        >
          <v-img :src="card_1" rounded class="w-100" height="217" cover></v-img>
          <v-card-text class="ff-dosis"> Workshop Vitaliteit</v-card-text>
        </v-card>
        <v-card
          class="pa-2 activity-card"
          min-width="14.8125rem"
          rounded="lg"
        >
          <v-img :src="card_2" rounded class="w-100" height="217" cover></v-img>
          <v-card-text class="ff-dosis"> Workshop Bodypercussie </v-card-text>
        </v-card>
        <v-card
          class="pa-2 activity-card"
          min-width="14.8125rem"
          rounded="lg"
        >
          <v-img :src="card_3" rounded class="w-100" height="217" cover></v-img>
          <v-card-text class="ff-dosis"> Stoelyoga </v-card-text>
        </v-card>
      </div>
    </div>
  </div>

</template>

<style scoped>
.dfm-tabs {
  font-family: 'Open Sans';
  font-weight: 500;
  margin-bottom: 2.5rem;
}

.ff-dosis {
  font-family: 'Dosis';
  font-weight: 500;
  font-size: 1rem;
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
  margin: 3rem 5.5rem 0 5.5rem;
  max-width: 63.625rem;
}

.filters {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.filter {
  max-width: 14rem;
}

.sort {
  margin-left: auto;
}

.promo-card {
  border-color: rgba(0,0,0,0.10);
}
.activity-card {
  border: 2px solid transparent;
  transition: all .2s ease-in-out;
}

.activity-card:hover {
  border: 2px solid #E5007D;
  cursor: pointer;
}


</style>