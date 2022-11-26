<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <section id="about" class="about">
    <div class="about__content">
      <div class="about__content__title">
        <h2>{{ t('about.aboutUs') }}</h2>
        <p>
          {{ t('about.description') }}
        </p>
        <div class="about__content__title__frame">
          <div class="about__content__title__frame__item-- first">
            <h2>600M+</h2>
            <p>{{ t('about.users') }}</p>
          </div>
          <div class="about__content__title__frame__item--last">
            <h2>135+</h2>
            <p>{{ t('about.games') }}</p>
          </div>
        </div>
      </div>
      <ul class="about__content__desc">
        <li class="about__content__desc__item">
          <div class="about__content__desc__item__icon">
            <img src="@/assets/icon/calendar-tick.png" alt="" />
          </div>
          <div>
            <h3>{{ t('about.twentyFourHour') }}</h3>
            <p>{{ t('about.twentyFourHourContent') }}</p>
          </div>
        </li>
        <li class="about__content__desc__item">
          <div class="about__content__desc__item__icon">
            <img src="@/assets/icon/pen-tool-2.png" alt="" />
          </div>
          <div>
            <h3>{{ t('about.design') }}</h3>
            <p>
              {{ t('about.designContent') }}
            </p>
          </div>
        </li>
        <li class="about__content__desc__item">
          <div class="about__content__desc__item__icon">
            <img src="@/assets/icon/people.png" alt="" />
          </div>
          <div>
            <h3>{{ t('about.team') }}</h3>
            <p>
              {{ t('about.teamContent') }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="about__image">
      <div class="about__image__witch">
        <img src="@/assets/witch.png" alt="witch" />
      </div>
      <div class="about__image__map">
        <img src="@/assets/Map.png" alt="witch" />
      </div>
      <div class="about__image__bg"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    margin-top: 157.36px;
    padding: 0px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @include mobile {
      margin-top: 264px;
      padding: 0px;
    }
    &__content {
      display: flex;
      justify-content: center;
      gap: 40px;
      @include mobile {
        flex-direction: column;
      }
      @include tablet {
        flex-direction: column;
      }
      &__title {
        max-width: 560px;
        width: 100%;

        @include mobile {
          padding: 16px;
        }
        h2 {
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 900;
          font-size: 60px;
          line-height: 60px;

          letter-spacing: 3.6px;
          color: #000000;
        }
        p {
          margin-top: 40px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;

          color: #757575;
        }
        &__frame {
          margin-top: 59.29px;
          @include mobile {
            display: flex;
            margin-top: 40px;
            gap: 55px;
          }
          h2 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            line-height: 98px;

            letter-spacing: -1px;
            color: #079bee;
            @include mobile {
              font-size: 44px;
              line-height: 54px;
            }
          }
          p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            color: #000000;
            margin: 4px;
          }
          &__item {
            &--last {
              margin-top: 39px;
              @include mobile {
                margin-top: 0px;
              }
            }
          }
        }
      }
      &__desc {
        box-sizing: border-box;
        max-width: 560px;
        width: 100%;
        background: #eeeeee;
        padding: 113px 75px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 41.62px;
        @include mobile {
          padding: 40px 16px;
        }
        &__item {
          display: flex;
          gap: 24px;
          h3 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;

            color: #000000;
          }
          p {
            max-width: 336px;
            width: 100%;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            color: #757575;
            @include mobile {
              max-width: 283px;
            }
          }
          &__icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #e3fcff;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 24px;
            }
          }
        }
      }
    }
    &__image {
      max-width: 1160px;
      width: 100%;
      height: 832px;
      @include mobile {
        height: 375px;
      }
      img {
        max-width: 1160px;
      }
      position: relative;
      &__witch {
        @keyframes witch {
          from {
            transform: translateX(-20px);
          }
          50% {
            transform: translateX(40px);
          }
          to {
            transform: translateX(-20px);
          }
        }
        display: flex;
        justify-content: center;
        position: absolute;
        top: 68px;
        width: 100%;
        z-index: 10;
        @include mobile {
          top: 40px;
        }
        img {
          max-width: 533px;
          width: 100%;

          animation-name: witch;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          @include mobile {
            max-width: 300px;
            width: 100%;
          }
        }
      }
      &__map {
        position: absolute;
        bottom: 0px;
        img {
          width: 100%;
        }
      }
      &__bg {
        max-width: 1158.98px;
        width: 100%;
        height: 198.42px;
        position: absolute;
        bottom: 0px;
        z-index: 10;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) -26.4%, #ffffff 82.58%);
      }
    }
  }
</style>
