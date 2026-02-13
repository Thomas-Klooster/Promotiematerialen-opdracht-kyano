<script setup>
import { ref } from "vue";
const tab = ref("one");
</script>

<template>
  <div class="main-content">
    <v-tabs
      v-model="tab"
      class="dfm-tabs"
      align-tabs="start"
      height="32"
      slider-color="#e6007e"
    >
      <v-tab value="one">Promotiematerialen</v-tab>
      <v-tab value="two">Instellingen</v-tab>
    </v-tabs>
    <div class="dmf-heading">
      <div class="mb-3 font-weight-medium dfm-header">
        Promotiematerialen
      </div>

      <div class="text-subtitle-1 dmf-subtitle">
        Sanday Groningen
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
</style>