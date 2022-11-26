<script setup>
  import { ref } from 'vue';
  const refContainer = ref(null);

  const back = () => {
    refContainer.value.scrollLeft -= 300;
  };
  const next = () => {
    refContainer.value.scrollLeft += 300;
  };
</script>

<template>
  <div class="slide">
    <div class="slide__container" ref="refContainer">
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle01.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle02.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle03.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle04.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle05.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle06.png" alt="Rectangle01" />
      </div>
      <div class="slide__container__item">
        <img src="@/assets/logo-slide/Rectangle07.png" alt="Rectangle01" />
      </div>
    </div>
    <img
      src="@/assets/icon/arrow-square-left.png"
      alt="left"
      @click="back"
      class="slide__button-left"
    />
    <img
      src="@/assets/icon/arrow-square-right.png"
      alt="right"
      @click="next"
      class="slide__button-right"
    />
  </div>
</template>

<style lang="scss" scoped>
  .slide {
    max-width: 1500px;
    position: relative;
    padding: 0px 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 50%;
    transform: translateX(-50%);
    img {
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
      width: 40px;
      height: 40px;
    }
    &__container {
      max-width: 1500px;
      width: 100%;
      display: flex;
      gap: 40px;
      overflow: hidden;
      scroll-behavior: smooth;
      @include mobile {
        width: 260px;
      }
      &__item {
        display: flex;
        img {
          width: 260px;
          height: 100px;
        }
      }
    }
    &__button-left {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0px;
      z-index: 10;
    }
    &__button-right {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      right: 0px;
      z-index: 10;
    }
  }
</style>
