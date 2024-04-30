
<template>
  <div class="back">
    <div class="header">
      <h1>Изменение данных</h1>
      <div class="gradient-button">
        <router-link to="/profile"><p>Личные данные</p></router-link>
      </div>
      <div class="gradient-button">

        <router-link to="/smena"><p>Смена данных</p></router-link>
      </div>
    </div>

    <form @submit.prevent="updateUser" class="form-container">
      <div class="form-group">
        <label for="login" class="label">Логин:</label>
        <input type="text" id="login" v-model="user.login" class="input" required>
      </div>
      <div class="form-group">
        <label for="password" class="label">Пароль:</label>
        <input type="password" id="password" v-model="user.password" class="input" required>
      </div>
     <button type="submit" class="submit-button">Сохранить</button>
    </form>
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
import axios from 'axios';
import { ref, reactive } from 'vue';
import { API_URL } from "@/config/index.js";

const user = reactive({
  login: '',
  password: ''
});

async function updateUser() {
  try {
    const api_token = localStorage.getItem('api_token');
    if (!api_token) {
      throw new Error('Токен авторизации не найден');
    }

    // Предположим, что сервер ожидает объект с полями login и password для обновления данных пользователя
    const response = await axios.post(API_URL + `/user/update`, {
      login: user.login,
      password: user.password
    }, {
      headers: {
        'Authorization': `Bearer ${api_token}`
      }
    });

    if (response.status === 200) {
      console.log('Данные пользователя успешно обновлены', response.data);
    } else {
      throw new Error('Ошибка HTTP: ' + response.status);
    }
  } catch (error) {
    console.error('Ошибка при обновлении данных пользователя:', error);
  }
}
</script>


<style scoped>
.form-container {

  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-top: 50px;
  margin-bottom: 20px;
}

.label {
  color: whitesmoke; /* Темно-фиолетовый цвет для меток */
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #6e3667; /* Темно-фиолетовая граница для полей ввода */
  border-radius: 5px;
}

.submit-button {
  background-color: #6e3667; /* Темно-фиолетовый цвет для кнопки */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px; /* Расстояние сверху для кнопки */
  align-self: stretch;
}

.submit-button:hover {
  background-color: #4b2249; /* Темно-фиолетовый цвет при наведении */
}



.back{
  background-color: black;
  width: 1080px;
  height: 500px;
}
.header > h1{
  color: #7d2ae8;
  padding: 20px 0 15px 20px;
}
.gradient-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(to bottom, #4B0082 0%, #000000 100%);
  border: 1px solid #4B0082;

  cursor: pointer;
  text-decoration: none;
}
.gradient-button p{
  color: whitesmoke;
}
.gradient-button:hover {
  background: linear-gradient(to bottom, #800080 0%, #000000 100%);
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