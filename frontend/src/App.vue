<template>
  <div class="main">
    <img :src="logo" width="200" height="147" alt="VueWork" />
    <h1>Добро пожаловать!</h1>
    <p>
      Это личный кабинет пользователя SkyScada<br />
      <b>SkyScada - лучшая скада в Мире!</b>
    </p>
  </div>
</template>

<script setup>
import logo from "@/assets/img/logo.svg";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";

#app {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $green-300;
  top: 0;
  left: 0;
}

.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $black-700;

  img {
    display: block;
    margin: 0 auto;
  }

  h1 {
    @include xl-s35-h53;
    text-align: center;
    margin-bottom: 0;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  b {
    font-size: 1.2em;
  }
}
</style>
