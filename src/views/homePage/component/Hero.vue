<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import NarBar from './NarBar.vue';

  const { t } = useI18n();
</script>

<template>
  <section id="hero" class="hero">
    <NarBar />
    <div class="hero__content">
      <h2>{{ t('hero.title') }}</h2>
      <div class="hero__content__countdown">
        <div class="hero__content__countdown__item">
          <h2>30</h2>
          <p>{{ t('hero.day') }}</p>
        </div>
        <h2>:</h2>
        <div class="hero__content__countdown__item">
          <h2>18</h2>
          <p>{{ t('hero.hour') }}</p>
        </div>
        <h2>:</h2>
        <div class="hero__content__countdown__item">
          <h2>20</h2>
          <p>{{ t('hero.minutes') }}</p>
        </div>
        <h2>:</h2>
        <div class="hero__content__countdown__item">
          <h2>11</h2>
          <p>{{ t('hero.second') }}</p>
        </div>
      </div>
      <div class="hero__content__newletter">
        <p>
          {{ t('hero.content') }}
        </p>
      </div>
      <div class="hero__content__input">
        <input type="text" :placeholder="t('hero.enterYourEmail')" />
        <img src="@/assets/icon/arrow-right.png" alt="" />
      </div>
    </div>
    <img src="@/assets/ong_tien_1.png" alt="ong_tien_1" class="hero__ongTien" />
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    max-width: 1920px;
    width: 100%;
    height: 988px;
    background-image: url('@/assets/BG.png');
    background-size: cover;
    background-position: center;
    position: relative;
    padding-bottom: 29.36px;
    @include mobile {
      height: 832px;
    }
    @include tablet {
      height: 832px;
    }
    &__ongTien {
      max-width: 938px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 3;
      transform: translate(40px);
      @include mobile {
        bottom: -25%;
      }
      @include tablet {
        width: 450px;
        bottom: -20%;
      }
    }
    &__content {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;

      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      z-index: 10;
      @include mobile {
        padding: 0px 16px;
      }
      @include tablet {
        padding: 0px 16px;
      }
      h2 {
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 900;
        font-size: 80px;
        line-height: 120px;
        color: #ffffff;

        text-align: center;
        letter-spacing: 0.6px;
        @include mobile {
          font-size: 40px;
          line-height: 50px;
        }
        @include tablet {
          font-size: 40px;
          line-height: 50px;
        }
      }

      &__countdown {
        box-sizing: border-box;
        max-width: 756px;
        width: 100%;

        padding: 26px 39.1px;
        margin-top: 21px;

        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 21px;

        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 52px;
        @include mobile {
          gap: 4px;
        }
        @include tablet {
          gap: 4px;
        }
        h2 {
          padding-bottom: 8px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 65.1724px;
          line-height: 79px;
          text-align: center;
          letter-spacing: -0.651724px;
          color: #000000;
          @include mobile {
            font-size: 36px;
            line-height: 45px;
          }
        }
        &__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          h2 {
            // width: 79.51px;
            // height: 79.51px;
            font-family: 'Playfair Display';
            font-style: normal;
            font-weight: 900;
            font-size: 60px;
            line-height: 64px;
            text-align: center;
            letter-spacing: 4.8px;
            color: #000000;
            @include mobile {
              font-size: 36px;
              line-height: 45px;
            }
          }
          p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 15.6414px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.651724px;
            color: #000000;
          }
        }
      }
      &__newletter {
        p {
          margin-top: 97.1px;
          max-width: 560px;
          width: 100%;

          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 126%;

          color: #ffffff;
          text-align: center;
          @include mobile {
            margin-top: 40px;
          }
        }
      }
      &__input {
        box-sizing: border-box;
        max-width: 560px;
        width: 100%;
        height: 56px;
        background: #ffffff;
        border-radius: 8px;
        margin-top: 32px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 14px;
        input {
          outline: none;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;
          flex-grow: 1;
        }
        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        @include mobile {
          margin-top: 16px;
        }
      }
    }
  }
</style>
