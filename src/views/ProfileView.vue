
<template>
  <div class="back">
    <div class="header">
        <h1>Профиль</h1>
      <div class="gradient-button">
        <router-link to="/profile"><p>Личные данные</p></router-link>
      </div>
      <div class="gradient-button">
        <router-link to="/smena"><p>Смена данных</p></router-link>
      </div>
    </div>

    <div v-if="userData" class="data">
      <div class="text-info">
        <div class="row">
        <p>Имя:</p>
        <p>{{ userData.name }}</p>
        </div>
        <div class="row">
        </div>
      <p>Фамилия:</p>
        <p>{{ userData.surname }}</p>
          <div class="row">
          </div>
      <p>Отчество:</p>
        <p>{{ userData.patronymic }}</p>
            <div class="row">
            </div>
      <p>Номер телефона</p>
        <p>{{ userData.phone_number }}</p>
              <div class="row">
              </div>
      <p>Дата рождения:</p>
        <p>{{ userData.birth }}</p>
                <div class="row">
      <p>Логин:</p>
        <p>{{ userData.login }}</p>
                </div>
                  <div class="row">
      <p>Почта:</p>
        <p>{{ userData.email }}</p>
                  </div>
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

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { API_URL } from "@/config/index.js";

const userData = ref({});
async function fetchUserData() {
  try {
    // Получаем токен из localStorage
    const api_token = localStorage.getItem('api_token');

    // Если токен не найден, выбрасываем ошибку
    if (!api_token) {
      throw new Error('Токен авторизации не найден');
    }
    // Отправляем GET-запрос к API с токеном авторизации
    const response = await axios.get(API_URL + `/user`, {
      headers: {
        'Authorization': `Bearer ${api_token}` // Используйте 'Bearer' с токеном авторизации
      }
    });
    // Если запрос успешен, возвращаем данные пользователя
    if (response.status === 200) {
      userData.value = response.data

    } else {
      throw new Error('Ошибка HTTP: ' + response.status);
    }
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    throw error; // Перебрасываем ошибку, чтобы ее можно было обработать где-то выше
  }
}


// Вызываем функцию fetchUserData при загрузке компонента
fetchUserData().then(userData => {
  // Обработка данных пользователя
}).catch(error => {
  // Обработка ошибки
});
</script>


<style scoped>
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
.data {
  color: whitesmoke;
  display: grid;
  grid-template-columns: auto;
  gap: 5px 10px;
  line-height: 2.8;
}
.text-info {
  margin: 10px 0 0 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px 10px;
  line-height: 2.8;
}
.row {
  display: contents;
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