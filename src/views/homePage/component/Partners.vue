<script setup lang="ts">
  import GPannerSlide from '@/components/common/GPannerSlide.vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
</script>

<template>
  <section id="parners" class="parners">
    <h2>{{ t('partners.title') }}</h2>
    <GPannerSlide />
  </section>
</template>

<style lang="scss" scoped>
  .parners {
    background-color: #f6f6f6;
    padding-top: 120px;
    padding-bottom: 120px;
    @include mobile {
      padding-top: 40px;
    }
    h2 {
      padding-bottom: 80px;
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
  }
</style>
