<template>
  <div class="work-area">
    <div v-if="film" class="film-details">
      <div class="photo-row">
        <div
            v-for="(photo, index) in film.photo"
            :key="index"
            class="photo-item"
        >
          <img :src="URL_PHOTO + photo.url" alt="photo" @error="handleImageError(index)" />
          <div class="buy-button-container">
            <button class="buy-button">Купить билет</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {URL_PHOTO} from "@/config/index.js";
export default {
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  methods: {
    URL_PHOTO() {
      return URL_PHOTO;
    },
    handleImageError(index) {
      console.error(`Ошибка при загрузке фотографии с индексом ${index}`);
    }
  }
};
</script>

<style scoped>
.work-area {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.photo-row {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  width: 100%;
}

.photo-item {
  position: relative;
  margin-right: 5px;
}

.photo-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.photo-item:hover img {
  filter: brightness(50%);
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
}
</style>