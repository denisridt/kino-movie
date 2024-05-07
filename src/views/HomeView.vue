<template>
  <h1>Сейчас в кино</h1>
  <div class="movie-panel">
    <img src="../../public/Rectangle 4.jpg" alt="Обложка фильма">
    <div class="info">
      <h2>{{ film.name }}</h2>
      <p><strong>Страна:</strong> {{ film.country }}</p>
      <p><strong>Длительность:</strong> {{ film.duration }}</p>
      <p><strong>Режиссер:</strong> {{ film.director }}</p>
      <p><strong>Год:</strong> {{ film.year }}</p>
    </div>
  </div>

    <SectPhotos :film="film"/>

  <div class="footer">
    <div class="address">
      <p>
        г. Томск, пр. Комсомольский 13б,<br>
        ТРЦ «Изумрудный город», 3 этаж.</p>

      <p> Мы в социальных сетях:</p>
      <a href="https://vk.com/pukpak"><img src="../../public/footer/vk.png" alt="Вк"></a>
      <img src="../../public/footer/telega.png" alt="Телега">
    </div>
    <p>© 2014 – 2024. ООО «Popcorn film».</p>
  </div>

</template>
<script>
import axios from 'axios';
import {API_URL, URL_PHOTO} from "@/config/index.js";
import SectPhotos from "@/components/SectPhotos.vue";

export default {
  components: {SectPhotos},
  data() {
    return {
      film: {},
    };
  },
  methods: {

  },
  mounted() {
// Выполняем запрос к API для получения данных фильма
    axios.get(API_URL + '/film/1') // Здесь 1 - это ID фильма, который вы хотите получить
        .then(response => {
          this.film = response.data // Предполагается, что API возвращает объект с данными фильма
          console.log(this.film)
        })
        .catch(error => {
          console.error('Ошибка при получении данных фильма', error);
        });
  }
};


</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.address {
  display: flex;
  margin-bottom: 15px;

}

.address p {
  margin: 0;
  line-height: 1.5;
}
.address p:nth-child(2) {
  margin-left: 150px;
}

.address img {
  position: relative;
  top: 30px;
  right: 130px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 5px 25px 0 0;
}

.footer p {

  margin: 0;
  font-size: 17px;
  color: #fff;
}



.movie-panel {

  display: flex;
  align-items: flex-start;
  padding-bottom: 60px;
  padding-top: 20px;
}
.movie-panel img {
  width: 629px;
  height: 354px;
  margin-right: 20px;
}
.movie-panel .info {
  display: flex;
  flex-direction: column;

}
.movie-panel .info h2 {
  color: #fff;
  margin-left: 55px ;
}
.movie-panel .info p {

  color: #fff;
  margin: 14px 0;
}
h1{
  font-size: 27px;
  color: #fff;
  background-color: rebeccapurple;
  padding: 6px;
  text-align: center;
  width: 230px;
  position: relative;
  top: 20px;
}
</style>