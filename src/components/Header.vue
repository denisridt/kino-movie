
<template>

  <div class="header">
    <img src="../../public/8086fe01a572a4feee3b136291356133.jpg" height="100" width="100" alt="Лого">
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
</style>
