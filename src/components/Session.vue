<template>
  <div>
    <section class="sect" v-for="film in sortedFilms" :key="film.id">
      <div class="film-session">
        <div class="film-info">
          <img :src="URL_PHOTO + film.photo" alt="Poster" class="film-poster">
          <div class="film-details">
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
          <h1>Сеансы</h1>
          <div v-for="session in film.sessions" :key="session.id">
            <p>Время начала: {{ session.time_start }}</p>
            <!-- Другая информация о сеансе -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { URL_PHOTO, API_URL } from "@/config/index.js";

export default {
  name: 'FilmSession',
  setup() {
    const groupedSessions = ref({});

    // Получение сеансов и группировка по фильму
    const getSessions = async () => {
      try {
        const response = await axios.get(API_URL + '/session');
        const sessions = response.data;

        for (const session of sessions) {
          // Проверяем, есть ли уже информация о фильме в groupedSessions
          if (!groupedSessions.value[session.film]) {
            // Если нет, запрашиваем информацию о фильме и жанре
            const filmResponse = await axios.get(API_URL + `/film/${session.film}`);
            const film = filmResponse.data;
            const genreResponse = await axios.get(API_URL + `/genre/${film.genre_id}`);
            const genre = genreResponse.data;

            // Добавляем информацию о жанре в фильм
            film.genreName = genre.name;

            // Добавляем фильм в groupedSessions с пустым массивом сеансов
            groupedSessions.value[session.film] = { ...film, sessions: [] };
          }

          // Добавляем сеанс в массив сеансов для соответствующего фильма
          groupedSessions.value[session.film].sessions.push(session);
        }

        // Преобразование groupedSessions в массив для использования в шаблоне
        groupedSessions.value = Object.values(groupedSessions.value);
      } catch (error) {
        console.error('Ошибка при получении сеансов:', error);
      }
    };

    onMounted(getSessions);

    const sortedFilms = computed(() => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Устанавливаем время начала дня

      return Object.values(groupedSessions.value)
          .filter(film => {
            // Фильтруем сеансы, чтобы они начинались с сегодняшней даты
            film.sessions = film.sessions
                .filter(session => new Date(session.time_start) >= today)
                .sort((a, b) => new Date(a.time_start) - new Date(b.time_start)); // Сортируем сеансы по времени начала
            return film.sessions.length > 0; // Отфильтровываем фильмы без сеансов на сегодня
          })
          .sort((a, b) => new Date(a.sessions[0].time_start) - new Date(b.sessions[0].time_start)); // Сортируем фильмы по времени начала первого сеанса
    });

    return { sortedFilms, URL_PHOTO };
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
  color: cyan;
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
  /* Ваши стили для класса .free-time */
  background-color: #f8f9fa;
  padding: 10px 30px 10px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.free-time h1 {
  margin-left: 120px;
  color: #333;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.free-time p {
  color: #6c757d;
  font-size: 1em;
  margin-bottom: 5px;
}
</style>