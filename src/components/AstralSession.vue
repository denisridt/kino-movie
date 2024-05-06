<template>
  <div class="div">
    <h2>Ближайшие сеансы на фильм</h2>
  </div>
  <div class="timeline">
    <div v-if="film">
      <h3>{{ film.name }}</h3>
      <div v-for="session in sortedSessions" :key="session.id">
        <p>Время начала: {{ session.time_start }}</p>
        <!-- Другая информация о сеансе -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { URL_PHOTO, API_URL } from "@/config/index.js";

export default {
  name: 'FilmSession',
  setup() {
    const film = ref(null);
    const sessions = ref([]);

    // Получение информации о фильме
    const getFilm = async () => {
      try {
        const response = await axios.get(API_URL + '/film/20');
        film.value = response.data;
      } catch (error) {
        console.error('Ошибка при получении информации о фильме:', error);
      }
    };

    // Получение сеансов для фильма
    const getSessions = async () => {
      try {
        const response = await axios.get(API_URL + '/session');
        sessions.value = response.data.filter(session => session.film === 20);
      } catch (error) {
        console.error('Ошибка при получении сеансов:', error);
      }
    };

    onMounted(async () => {
      await getFilm();
      await getSessions();
    });

    const sortedSessions = computed(() => {
      return sessions.value
          .filter(session => new Date(session.time_start) >= new Date())
          .sort((a, b) => new Date(a.time_start) - new Date(b.time_start));
    });

    return { film, sortedSessions, URL_PHOTO };
  },
};
</script>

<style scoped>
.div{
  display: flex;
  flex-direction:column ;
}
.div > h2{
  color: cyan;
  align-self: center;
  margin: 20px 0 20px 0;
  font-size: 34px;
}
.timeline{
  display: flex;
  color: white;
  width: 1080px;
  height: 100px;
  background-color: black;
}
.timeline  h3{
  color: aqua;
  margin: 15px;
}
.timeline  p{
  color: wheat;
  margin: 15px;
}
</style>