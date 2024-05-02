<template >
  <section class="sect" v-for="film in film" :key="film.id">
  <div  class="film-session" >
    <div  class="film-info" >
      <img :src="URL_PHOTO + film.photo" alt="Poster" class="film-poster" >
      <div  class="film-details">
        <router-link :to="`/film/${film.id}`">
          <p>{{ film.name }}</p>
        </router-link>
        <p class="row">Жанр:</p>
        <p>{{ film.genreName }}</p>
        <p class="row">Продолжительность:</p>
        <p>{{ film.duration }}</p>
        <p class="row">Страна:</p>
        <p>{{ film.country }}</p>
      </div>
    </div>
    <div class="free-time">
      <h1>Сеансы сегодня</h1>
      <!-- Здесь будет отображаться свободное время -->
    </div>
  </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { URL_PHOTO, API_URL } from "@/config/index.js";

export default {
  name: 'FilmSession',
  setup() {
    const film = ref({});

    // Имитация получения данных из базы данных
    onMounted(async () => {
      try {
        const response = await axios.get(API_URL+ '/film');
        const filmsData = response.data;

        film.value = filmsData;
      } catch (error) {
        console.error('Ошибка при получении фильмов:', error);
      }
    });
    return { film, URL_PHOTO };
  },
};
</script>

<style scoped>

.film-session {
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 20px;
}
a{
  color: #7d2ae8;
}
.film-info {
  border-right: 1px solid white;
  display: flex;
  width: 500px;
  line-height: 40px;
  font-size: 20px;
}
.film-info > img {
  height: 300px;
  width: 200px;
}
.row{
  color: wheat;
}
.film-poster {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.film-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.free-time {
  /* Стили для свободного времени */
}
</style>