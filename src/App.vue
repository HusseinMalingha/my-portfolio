<script setup>
import MainCard from './components/MainCard.vue'
</script>

<template>
  <main>
    <MainCard />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@media only screen and (max-width: 567px) {
  html,
  body {
    margin: 0;
    padding: 0;
    background-image: url('vue-portfolio/src/assets/me.jpeg');
  }
}
</style>
