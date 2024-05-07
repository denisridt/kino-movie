<template>
  <div class="photo-slider">
    <div class="photo-slider-inner" :style="{ transform: `translateX(-${currentIndex * 20}%)` }">
      <div class="photo-item" v-for="(film, index) in films" :key="film.id">
        <img :src="urlPhoto + film.photo" :alt="film.title">
        <div class="buy-button-container">
          <router-link :to="`/film/${film.id}`" class="buy-button">Купить билет</router-link>
        </div>
      </div>
    </div>
    <div class="slider-controls">
      <button @click="prevSlide" :disabled="currentIndex === 0" class="slider-arrow slider-prev">
        <i class="arrow left"></i>
      </button>
      <button @click="nextSlide" :disabled="currentIndex === maxIndex" class="slider-arrow slider-next">
        <i class="arrow right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL, URL_PHOTO } from "@/config/index.js";

export default {
  data() {
    return {
      films: [],
      urlPhoto: URL_PHOTO,
      currentIndex: 0,
    };
  },
  computed: {
    maxIndex() {
      return Math.max(this.films.length - 5, 0);
    },
  },
  async created() {
    try {
      const response = await axios.get(API_URL + '/film');
      this.films = response.data.map(film => ({
        ...film,
        showBuyButton: false
      }));
    } catch (error) {
      console.error('Ошибка при получении фильмов:', error);
    }
  },
  methods: {
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style scoped>
.photo-slider {
  overflow: hidden;
  position: relative;
}

.photo-slider-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.photo-item {
  flex: 0 0 20%;
  max-width: 20%;
  position: relative;
  overflow: hidden;
  display: flex; /* Добавляем flex контейнер */
  justify-content: center; /* Выравниваем по горизонтали */
  align-items: center; /* Выравниваем по вертикали */
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buy-button-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-item:hover .buy-button-container {
  opacity: 1;
}

.buy-button {
  padding: 10px 20px;
  background-color: rebeccapurple;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  bottom: 70px;
  display: inline-block;
}

.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.slider-arrow {
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  padding: 10px;
}

.arrow {
  border: solid aqua;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;
}

.left {
  transform: rotate(135deg);
}

.right {
  transform: rotate(-45deg);
  position: relative;
  right: 20px;
}
</style>