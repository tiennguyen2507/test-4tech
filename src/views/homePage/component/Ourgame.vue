<script setup lang="ts">
  import game01 from '@/assets/our-game/game01.png';
  import game02 from '@/assets/our-game/game02.png';
  import game03 from '@/assets/our-game/game03.png';
  import game04 from '@/assets/our-game/game04.png';
  import game05 from '@/assets/our-game/game05.png';
  import game06 from '@/assets/our-game/game06.png';
  import game07 from '@/assets/our-game/game07.png';
  import game08 from '@/assets/our-game/game08.png';
  import game09 from '@/assets/our-game/game09.png';
  import game10 from '@/assets/our-game/game10.png';
  import game11 from '@/assets/our-game/game11.png';
  import game12 from '@/assets/our-game/game12.png';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  const data01 = [
    {
      title: 'E-Space',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game01,
    },
    {
      title: 'Pirates',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game02,
    },
    {
      title: 'magicTree',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game03,
    },
  ];
  const data02 = [
    {
      title: 'Kingland',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game04,
    },
    {
      title: 'Witch Party',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game05,
    },
    {
      title: 'Aborigines',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game06,
    },
  ];
  const data03 = [
    {
      title: 'The Last Game',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game07,
    },
    {
      title: 'Rocky',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game08,
    },
    {
      title: 'Cinderella',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game09,
    },
  ];
  const data04 = [
    {
      title: 'G-Dragon',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game10,
    },
    {
      title: 'Blue Fire',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game11,
    },
    {
      title: 'Egypt Game',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.`,
      image: game12,
    },
  ];
</script>

<template>
  <section id="ourgame" class="ourgame">
    <h2>{{ t('outGame.title') }}</h2>
    <div class="ourgame__content">
      <p>
        {{ t('outGame.description') }}
      </p>
    </div>
    <div class="ourgame__layout">
      <ul class="ourgame__layout__column ourgame__layout__column--row01">
        <li v-for="(item, index) in data01" :key="index" class="ourgame__layout__column__item">
          <img :src="item.image" alt="" />
          <div class="ourgame__layout__column__item__content">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
      <ul class="ourgame__layout__column ourgame__layout__column--row02">
        <li v-for="(item, index) in data02" :key="index" class="ourgame__layout__column__item">
          <img :src="item.image" alt="" />
          <div class="ourgame__layout__column__item__content">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
      <ul class="ourgame__layout__column ourgame__layout__column--row03">
        <li v-for="(item, index) in data03" :key="index" class="ourgame__layout__column__item">
          <img :src="item.image" alt="" />
          <div class="ourgame__layout__column__item__content">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
      <ul class="ourgame__layout__column ourgame__layout__column--row04">
        <li v-for="(item, index) in data04" :key="index" class="ourgame__layout__column__item">
          <img :src="item.image" alt="" />
          <div class="ourgame__layout__column__item__content">
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .ourgame {
    box-sizing: border-box;
    padding: 130px 80px;
    @include mobile {
      padding: 48px 16px;
    }
    @include tablet {
      padding: 130px 25px;
    }
    h2 {
      font-family: 'Playfair Display';
      font-style: normal;
      font-weight: 900;
      font-size: 60px;
      line-height: 60px;
      text-align: center;

      letter-spacing: 3.6px;
      color: #000000;
      @include mobile {
        font-size: 40px;
        line-height: 50px;
      }
    }
    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 24.46px;
      p {
        max-width: 860px;
        width: 100%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;

        text-align: center;
        color: #757575;
        @include mobile {
          max-width: 480px;
        }
      }
    }
    &__layout {
      padding-top: 80px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
      gap: 40px;
      @include mobile {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      @include tablet {
        grid-template-columns: repeat(2, 1fr);
      }
      &__column {
        display: flex;
        flex-direction: column;
        gap: 40px;
        @include mobile {
          gap: 15px;
        }
        &--row01 {
          @include mobile {
            padding-top: 0;
          }
        }
        &--row02 {
          padding-top: 80px;
          @include mobile {
            padding-top: 0;
            grid-column-start: 1;
            grid-row-start: 2;
            transform: translateY(-80px);
          }
          @include tablet {
            padding-top: 0;
            grid-column-start: 1;
            grid-row-start: 2;
            transform: translateY(-80px);
          }
        }
        &--row03 {
          @include mobile {
            grid-column-start: 2;
            grid-row-start: 1;
            margin-top: 80px;
          }
          @include tablet {
            grid-column-start: 2;
            grid-row-start: 1;
            margin-top: 80px;
          }
        }
        &--row04 {
          padding-top: 80px;
          @include mobile {
            padding-top: 0px;
          }
          @include tablet {
            padding-top: 0px;
          }
        }
        &__item {
          position: relative;
          max-height: 560px;

          filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

          img {
            border-radius: 10px;
            width: 100%;
          }
          &__content {
            position: absolute;
            bottom: 40px;
            left: 32px;
            right: 0px;
            @include mobile {
              bottom: 11px;
              left: 8px;
            }
            @include tablet {
              bottom: 11px;
              left: 8px;
            }
            h2 {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 700;
              font-size: 48px;
              line-height: 60px;
              color: #ffffff;
              text-align: start;
              @include mobile {
                font-size: 24px;
                line-height: 30px;
              }
              @include tablet {
                font-size: 24px;
                line-height: 30px;
              }
            }
            p {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 140%;
              color: #ffffff;
              @include mobile {
                font-size: 12px;
                line-height: 15px;
              }
              @include tablet {
                font-size: 12px;
                line-height: 15px;
              }
            }
          }
        }
      }
    }
  }
</style>
