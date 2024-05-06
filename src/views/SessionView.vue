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
div{
  display: flex;
  flex-direction:column ;
}
h1{
  color: cyan;
  align-self: center;
  margin: 0 0 20px 0;
}
</style>