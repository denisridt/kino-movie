<template>
  <h1>Сейчас в кино</h1>
  <div class="movie-panel">
    <img src="../../public/Rectangle 4.png" alt="Обложка фильма">
    <div class="info">
      <h2>Город тайн: Исчезнувшая<br>(2D, 18+)</h2>
      <p><strong>Страна:</strong> Страна</p>
      <p><strong>Длительность:</strong> Длительность</p>
      <p><strong>Режисер:</strong> Режисер</p>
      <p><strong>Год:</strong> Год</p>
    </div>
  </div>

  <div class="work-area">
    <div
        v-for="(photo, index) in photos"
        :key="index"
        class="photo-item"
        @mouseenter="showBuyButton(index)"
        @mouseleave="hideBuyButton(index)"
    >
      <img :src="photo.url" alt="photo" />
      <div v-if="photo.showBuyButton" class="buy-button">
        <button>Купить билет</button>
      </div>
    </div>
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
<script>
export default {
  data() {
    return {
      photos: [
        { url: '../../public/film/city.jpg', showBuyButton: false },
        { url: '../../public/film/freid.jpg', showBuyButton: false },
        { url: '../../public/film/imperia.jpg', showBuyButton: false },
        { url: '../../public/film/onegin.jpg', showBuyButton: false },
        { url: '../../public/film/let.jpg', showBuyButton: false },
        { url: '../../public/film/patina.jpg', showBuyButton: false },
        { url: '../../public/film/koral.jpg', showBuyButton: false },
        { url: '../../public/film/zoloto.jpg', showBuyButton: false },
        { url: '../../public/film/sled.jpg', showBuyButton: false },
        { url: '../../public/film/man.jpg', showBuyButton: false },

      ],
    };
  },
  methods: {
    showBuyButton(index) {
      this.photos[index].showBuyButton = true;
    },
    hideBuyButton(index) {
      this.photos[index].showBuyButton = false;
    },
  },
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
.work-area {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 5px;
}

.photo-item {
  position: relative;
  overflow: hidden;
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buy-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный фон */
  display: flex;
  justify-content: center;
  align-items: center;
}

.buy-button button {
  padding: 10px 20px;
  background-color: rebeccapurple;
  color: white;
  border: none;
  cursor: pointer;
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
  color: #fff;
  background-color: rebeccapurple;
  padding: 6px;
  text-align: center;
  width: 210px;
  position: relative;
  top: 20px;
}
</style>