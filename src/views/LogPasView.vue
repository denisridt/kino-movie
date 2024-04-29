
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



  </div>
</template>

<script setup>

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
</style>