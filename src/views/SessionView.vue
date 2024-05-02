<template>
  <div>
    <h1>Сеансы</h1>
    <FilmSession />
  </div>
</template>

<script>

import {defineComponent} from "vue";
import FilmSession from "@/components/Session.vue";

export default defineComponent({
  components: {FilmSession}
})
</script>


<style scoped>
h1{
  color: #7d2ae8;
}
</style>