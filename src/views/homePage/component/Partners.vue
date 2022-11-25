<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <section id="parners" class="parners">
    <h2>{{ t('partners.title') }}</h2>
    <div class="parners__slide">
      <img src="@/assets/icon/arrow-square-left.png" alt="left" />
      <ul>
        <li>
          <img src="@/assets/logo-slide/Rectangle01.png" alt="Rectangle01" />
        </li>
        <li>
          <img src="@/assets/logo-slide/Rectangle02.png" alt="Rectangle01" />
        </li>
        <li>
          <img src="@/assets/logo-slide/Rectangle03.png" alt="Rectangle01" />
        </li>
        <li>
          <img src="@/assets/logo-slide/Rectangle04.png" alt="Rectangle01" />
        </li>
        <li>
          <img src="@/assets/logo-slide/Rectangle05.png" alt="Rectangle01" />
        </li>
      </ul>
      <img src="@/assets/icon/arrow-square-right.png" alt="right" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .parners {
    background-color: #f6f6f6;
    padding-top: 120px;
    @include mobile {
      padding-top: 40px;
    }
    h2 {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 900;
      font-size: 60px;
      line-height: 80px;

      letter-spacing: 3.6px;
      text-align: center;

      color: #000000;
      @include mobile {
        font-size: 40px;
        line-height: 50px;
      }
    }
    &__slide {
      padding: 80px 0px;
      @include mobile {
        padding: 40px 16px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
        width: 40px;
        height: 40px;
      }
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        gap: 40px;
        li {
          width: 260px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
