<template>
  <div class="cinema-container">
    <div class="cinema-hall">
      <div class="row-label side-label"></div>
      <div class="rows">
        <div class="row" v-for="(row, rowIndex) in seats" :key="rowIndex">
          <div class="row-label"><span>{{ rowIndex + 1 }}</span></div>
          <div class="seat" v-for="(seat, seatIndex) in row" :key="seatIndex">
            <label class="seat-label">
              <input type="checkbox" :value="seat" v-model="selectedSeats" class="seat-checkbox">
              <span class="seat-number">{{ seatIndex + 1 }}</span>
            </label>
          </div>
          <div class="row-label"><span>{{ rowIndex + 1 }}</span></div>
        </div>
      </div>
      <div class="row-label side-label"></div>
    </div>
    <div class="info-panel">
      <div class="info-panel-content">
        <h3>Информация о сеансе</h3>
        <p v-if="film">
          Фильм: {{ film.name }}
        </p>
        <p v-if="hall">
          Зал: {{ hall.id }}
        </p>
        <p v-if="hallType">
          Тип зала: {{ hallType.name }}
        </p>
        <p v-if="hall">
          Количество рядов: {{ hall.row_quantity }}
        </p>
        <p v-for="seat in selectedSeats" :key="seat">
          Место: {{ Math.ceil(seat / 15) }} ряд, {{ seat % 15 === 0 ? 15 : seat % 15 }} место
        </p>
        <h2 v-if="selectedSeats.length > 3" class="error-message">
          Количество мест, которое Вы можете приобрести единовременно, не должно превышать 3.
        </h2>
        <button v-if="selectedSeats.length <= 3" @click="pay">Оплатить</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {API_URL} from "@/config/index.js";
export default {
  data() {
    return {
      seats: Array.from({ length: 10 }, (_, i) =>
          Array.from({ length: 15 }, (_, j) => i * 15 + j + 1)
      ),
      selectedSeats: [], // Выбранные места
      film: null,
      session: null,
      hall: null,
      hallType: null,
    };
  },
  methods: {
    fetchData() {
      axios.all([
        axios.get(API_URL + `/film/20`),
        axios.get(API_URL + `/hall/1`),
        axios.get(API_URL + `/typehall/1`)
      ]).then(axios.spread((filmResponse,  hallResponse, hallTypeResponse) => {
        this.film = filmResponse.data;
        this.hall = hallResponse.data;
        this.hallType = hallTypeResponse.data;
      })).catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
    },
    onSeatChange(seat) {
      if (this.selectedSeats.includes(seat) && this.selectedSeats.length > 3) {
        this.selectedSeats.splice(this.selectedSeats.indexOf(seat), 1);
        this.$forceUpdate(); // Принудительно обновляем компонент, чтобы отключить чекбокс
      }
    },
    pay() {
      // Логика оплаты
      alert('Оплата прошла успешно!');
    }
  },
  created() {
    // Замените 20, 1 и 1 на соответствующие ID фильма, сеанса и зала
    this.fetchData(20, 1, 1);
  }
};
</script>

<style scoped>
/* ... стили компонента ... */
</style>

<style scoped>
.error-message {
  font-size: 18px;
  color: red;
}

.cinema-container {
  display: grid;
  grid-template-columns: auto auto; /* Две колонки */
  gap: 20px; /* Расстояние между колонками */
}


.info-panel {
  grid-column: 2; /* Информационная панель располагается во второй колонке */
  width: 300px;
  height: auto;
  line-height: 40px;
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
}

.info-panel-content {
  display: inline-block;

}
.info-panel-content h3{
  font-size: 22px;
  color: aqua;
}
.info-panel-content p{
  font-size: 18px;
  color: wheat;
}

.info-panel button {
  font-size: 20px;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.info-panel button:hover {
  background-color: #0056b3;
}

.cinema-hall {
  grid-column: 1; /* Зал располагается в первой колонке */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Расстояние между рядами */
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 5px; /* Расстояние между рядами */
}

.row {
  display: flex;
  gap: 5px; /* Расстояние между местами в ряду */
}

.seat {
  display: flex;
  flex-direction: column; /* Вертикальное выравнивание для загруженных края */
  align-items: center;
  justify-content: center;
  width: 22px; /* Ширина места */
  height: 26px; /* Высота места */
  background-color: black; /* Дефолтный цвет */
  border: 2px solid aqua; /* Оконтовка аквамаринового цвета */
  cursor: pointer;
}

.seat-label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.seat-checkbox {
  display: none; /* Скрываем чекбокс */
}

.seat-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;
}

/* Применяем стили к .seat, если чекбокс внутри него выбран */
.seat input:checked ~ .seat-number {
  background-color: green; /* Цвет при выборе */
}

.row-label {
  width: 30px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aqua;
}

.side-label {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aqua;
}
</style>