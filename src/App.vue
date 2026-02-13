<script setup>
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <v-app>
    <AppSidebar />
    <v-app-bar flat height="61" class="topbar pb-8" style="background: #E5007D;
    background: linear-gradient(90deg, rgba(229, 0, 125, 1) 0%, rgba(115, 0, 63, 1) 100%);
    ">
      <div class="w-100 d-flex align-center">
        <div style="font-family: 'Dosis'; font-weight: 600; font-size: 1.5rem;" class="text-h5 text-white">Promotiemateriaal</div>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap');
  .topbar {
    background: #E5007D;
    background: linear-gradient(90deg, rgba(229, 0, 125, 1) 0%, rgba(115, 0, 63, 1) 100%);
    padding-left: 5.5rem;
  }
</style>
