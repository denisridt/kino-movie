
<template>

  <div class="header">
    <router-link to="/"><img src="../../public/pngwing.com.png" height="120" width="250" alt="Лого"></router-link>
    <div class="nav">
      <router-link to="afisha"><p>Афиша</p></router-link>
      <router-link to="session"><p>Сеансы</p></router-link>
      <router-link to="/login"><p>Вход</p></router-link>
      <router-link to="register"><p>Регистрация</p></router-link>

    </div>
  </div>
</template>

<style scoped>

.header {
  font-size: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav {
  width: 500px;
  display: flex;
  justify-content: space-around;
}
a.router-link-exact-active {
  color: rgb(255, 98, 36);
}
a{
  color: white;
}
</style>
<script setup>
</script>