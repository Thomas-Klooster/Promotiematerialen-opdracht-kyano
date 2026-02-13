<script setup>
import logo from '@/assets/images/dfm-logo.png'
</script>

<template>
      <v-navigation-drawer
        width="316"
        theme="light"
        permanent
      >
        <img :src="logo" alt="de fitte medewerker logo" class="pt-6 px-6">
        <v-list lines="two" class="px-4">
            <v-list-item prepend-icon="mdi-view-dashboard-outline" title="Dashboard"></v-list-item>
            <v-list-item prepend-icon="mdi-meditation" title="Activiteiten"></v-list-item>
            <v-list-item prepend-icon="mdi-briefcase-outline" title="Bedrijfspagina's"></v-list-item>
            <v-list-item prepend-icon="mdi-account-circle-outline" title="Accountgegevens"></v-list-item>
            <v-list-item prepend-icon="mdi-star-outline" title="Reviews"></v-list-item>
            <v-list-item prepend-icon="mdi-cog-outline" title="Instellingen"></v-list-item>
            <v-list-item prepend-icon="mdi-account-box-outline" title="Specialisten"></v-list-item>
        </v-list>

        <template v-slot:append>
            <v-divider></v-divider>
            <v-list-item
                lines="two"
                class="px-6 py-6"
                prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                subtitle="Admin"
                title="Jane Smith"
                append-icon="mdi-logout"
            ></v-list-item>
        </template>
      </v-navigation-drawer>
</template>

<style scoped>

</style>
