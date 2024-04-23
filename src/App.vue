<script setup>
import {RouterView } from 'vue-router'
import Header from "@/components/Header.vue";

</script>

<template>
  <body>
  <div class="container">
    <Header />
    <RouterView />

  </div>
  </body>
</template>

<style scoped>

body {
  background-image: url('/public/temnyi-fon-391.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
</style>