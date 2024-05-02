<template>
  <div class="panel">
    <h2>Афиша</h2>
    <h3>Сегодня</h3>
    <section class="sect" v-for="film in films" :key="film.id">

      <div class="info">
        <img :src="URL_PHOTO + film.photo" alt="F">
        <div class="title-and-info">
          <router-link :to="`/film/${film.id}`">
            <h1>{{ film.name }}</h1>
          </router-link>
          <div class="text-info">
            <div class="row">
              <p><strong>Год:</strong></p>
              <p>{{ film.year }}</p>
            </div>
            <div class="row">
              <p><strong>Страна:</strong></p>
              <p>{{ film.country }}</p>
            </div>
            <div class="row">
              <p><strong>Режисер:</strong></p>
              <p>{{ film.director }}</p>
            </div>
            <div class="row">
              <p><strong>Жанр:</strong></p>
              <p>{{ film.genreName }}</p> <!-- Используем новое свойство -->
            </div>
            <div class="row">
              <p><strong>Продолжительность:</strong></p>
              <p>{{ film.duration }}</p>
            </div>
          </div>
          <div class="row-description">
            <p><strong>Описание:</strong></p>
            <p>{{ film.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>

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

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {URL_PHOTO,API_URL} from "@/config/index.js";

const films = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(API_URL+ '/film');
    const filmsData = response.data;

    films.value = filmsData;
  } catch (error) {
    console.error('Ошибка при получении фильмов:', error);
  }
});

</script>



<style scoped>
a{
  color: mediumorchid;
}
h1{
  margin-bottom: 30px;
  font-size: 34px;
}
h2{
  font-size: 36px;
  margin-left: 50px;
  margin-bottom: 50px;
  color: mediumorchid;
}
h3{
  padding-top: 15px;
  background-color: black;
  width: 1080px;
  display: flex;
  justify-content: center;
  color: white;
  position: relative;
  top: 20px;
  font-size: 30px;
}
.sect{
 padding-top: 1px;
  color: mediumorchid;
  background: black;
  width: 1080px;
  height: 500px;
}

img{
  margin-top: 50px;
  width: 240px;
  height: 350px;
  margin-right: 15px;
}
.text-info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px 10px;
  line-height: 2.8;
}
.info{
  margin-left: 25px;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
}
.title-and-info {
  display: flex;
  flex-direction: column;
}
.row {
  display: contents;

}

.row-description{
  width: 800px;
  font-size: 15px;
  line-height: 20px;
}
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
</style>