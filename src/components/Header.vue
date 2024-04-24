<template>
  <header class="header">
    <router-link to="/">
      <img src="../../public/pngwing.com.png" height="120" width="250" alt="Лого" />
    </router-link>

    <nav class="nav">
      <router-link to="/afisha">Афиша</router-link>
      <router-link to="/session">Сеансы</router-link>

      <!— Если пользователь не авторизован, показываем Вход и Регистрацию —>
      <template v-if="!isLoggedIn">
        <router-link to="/login">Вход</router-link>
        <router-link to="/register">Регистрация</router-link>
      </template>

      <!— Если пользователь авторизован, показываем Выход —>
      <template v-else>
        <router-link to="/profile">Мой профиль</router-link>
        <button @click="handleLogout">Выход</button>
      </template>
    </nav>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth.js";
import { storeToRefs } from "pinia";
import router from "@/router";

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore); // Проверяем, авторизован ли пользователь

const handleLogout = () => {
  authStore.logout(); // Вызов функции выхода из Pinia
  router.push("/login"); // Перенаправление на страницу входа
};
</script>

<style scoped>
.header {
  font-size: 25px;
  display: flex;
  justify-content: space-between; /* Используем для разделения элементов */
  align-items: center;
  padding: 20px; /* Отступы */
}

.nav {
  display: flex;
  justify-content: space-around;
  gap: 20px; /* Отступ между элементами */
}

a.router-link-exact-active {
  color: rgb(255, 98, 36);
}

a {
  color: white;
  text-decoration: none; /* Убираем подчеркивание */
}

button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 25px;
}

button:hover {
  color: rgb(255, 98, 36); /* Цвет при наведении */
}
</style>