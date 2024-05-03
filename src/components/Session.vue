<template>
  <div>
    <section class="sect" v-for="session in sessions" :key="session.id">
      <div class="film-session">
        <div class="film-info">
          <img :src="URL_PHOTO + session.film.photo" alt="Poster" class="film-poster">
          <div class="film-details">
            <router-link :to="`/film/${session.film.id}`">
              <p>{{ session.film.name }}</p>
            </router-link>
            <p class="row">Жанр:</p>
            <p>{{ session.film.genre_id  }}</p>
            <p class="row">Продолжительность:</p>
            <p>{{ session.film.duration }}</p>
            <p class="row">Страна:</p>
            <p>{{ session.film.country }}</p>
          </div>
        </div>
        <div class="free-time">
          <h1 v-if="session.id === sessions[0].id">Сеансы сегодня</h1>
          <p>Время начала: {{ session.time_start }}</p>
          <!-- Другая информация о сеансе -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { URL_PHOTO, API_URL } from "@/config/index.js";
import {makeRequest} from "@/api/makeRequest.js";

export default {
  name: 'FilmSession',
  setup() {
    const sessions = ref([]);

    // Получение сеансов
    const getSessions = async () => {
      try {
        const response = await axios.get(API_URL + '/session');
        sessions.value = response.data;
        // Добавляем это для отладки
        console.log(sessions.value);

        // Получение информации о фильме для каждого сеанса
        for (const session of sessions.value) {
          const filmResponse = await axios.get(API_URL + `/film/${session.id}`);
          session.film = filmResponse.data;
        }
        if (id) {
          const genreResponse = await makeRequest(API_URL + `genre/${id}`, 'GET');
          session.film.genreName = genreResponse.data.name; // Предполагается, что в ответе есть поле name с именем жанра
        }
      } catch (error) {
        console.error('Ошибка при получении сеансов:', error);
      }
    };

    onMounted(getSessions);

    return { sessions, URL_PHOTO };
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
.free-time{
  /* Дополнительные стили для класса .free-time, если нужно */
}
</style>