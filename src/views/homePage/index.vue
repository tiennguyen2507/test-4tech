<script setup lang="ts">
  import About from './component/About.vue';
  import Footer from './component/Footer.vue';
  import Hero from './component/Hero.vue';
  import Ourgame from './component/Ourgame.vue';
  import Partners from './component/Partners.vue';
  import ScrollTop from './component/ScrollTop.vue';
</script>

<template>
  <div class="container">
    <Hero />
    <About />
    <Ourgame />
    <Partners />
    <Footer />
    <ScrollTop />
  </div>
</template>

<style lang="scss">
  .container {
    max-width: 1920px;
    width: 100%;
    margin: 0px auto;
    overflow-x: hidden;
  }
</style>
