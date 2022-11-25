<script setup lang="ts">
  import GSelectLanguage from '@/components/GSelectLanguage.vue';
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const isActive = ref(false);

  const { t } = useI18n();

  const openMenu = () => {
    isActive.value = true;
  };
  const closeMenu = () => {
    isActive.value = false;
  };
</script>

<template>
  <header class="narbar">
    <div class="narbar__logo">
      <a href="#hero">
        <img src="@/assets/logo.png" alt="logo" />
      </a>
    </div>
    <div class="narbar__menu"><img src="@/assets/icon/menu.png" alt="" @click="openMenu" /></div>
    <div class="narbar__right" :class="isActive ? 'narbar__right--active' : ''">
      <ul class="narbar__right__menu" @click="closeMenu">
        <li>
          <a href="#about">{{ t('narbar.aboutUs') }}</a>
        </li>
        <hr />
        <li>
          <a href="#ourgame">{{ t('narbar.game') }}</a>
        </li>
        <hr />
        <li>
          <a href="#parners">{{ t('narbar.partners') }}</a>
        </li>
        <hr />
        <li>
          <a href="#footer">{{ t('narbar.contactUs') }}</a>
        </li>
      </ul>
      <GSelectLanguage />
      <div class="narbar__right__close">
        <img src="@/assets/icon/close.png" alt="usa" @click="closeMenu" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .narbar {
    box-sizing: border-box;
    position: fixed;
    max-width: 1920px;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    padding: 20px 79px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) -25%, rgba(0, 0, 0, 0) 100%);

    @include mobile {
      padding: 48px 16px;
    }
    @include tablet {
      padding: 48px 16px;
    }

    &__logo {
      img {
        width: 108.82px;
        height: 64px;
      }
      cursor: pointer;

      @include mobile {
        width: 68.01px;
      }
      @include tablet {
        width: 68.01px;
      }
    }
    &__menu {
      display: none;
      @include mobile {
        display: block;
      }
      @include tablet {
        display: block;
      }
      img {
        width: 40px;
      }
    }

    &__right {
      display: flex;
      gap: 85px;
      @include mobile {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 50;
        flex-direction: column;
        background: rgb(255, 255, 255);
        padding: 48px 16px;
        transition: all 0.3s linear;
        transform: translateX(100%);
        gap: 40px;
      }
      @include tablet {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 50;
        flex-direction: column;
        background: rgb(255, 255, 255);
        padding: 48px 16px;

        transform: translateX(100%);
        gap: 40px;
      }

      &--active {
        transition: all 0.3s linear;
        transform: translateX(0);
      }
      &__menu {
        display: flex;
        align-items: center;
        gap: 85px;
        @include mobile {
          padding-right: 0px;
          flex-direction: column;
          gap: 24px;
          order: 2;
          flex-grow: 1;
        }
        @include tablet {
          padding-right: 0px;
          flex-direction: column;
          gap: 24px;
          order: 2;
          flex-grow: 1;
        }
        li {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          cursor: pointer;
          a {
            color: #ffffff;
          }
          @include mobile {
            a {
              color: #000000;
            }
            padding-right: 0px;
          }
          @include tablet {
            color: #000000;
            padding-right: 0px;
          }
        }
        hr {
          display: none;
          width: 100%;
          height: 1px;
          background: #eeeeee;
          border: 0px;
          @include mobile {
            display: block;
          }
          @include tablet {
            display: block;
          }
        }
      }
      &__close {
        display: none;
        position: fixed;
        right: 16px;
        top: 48px;
        img {
          width: 40px;
        }
        @include mobile {
          display: block;
        }
        @include tablet {
          display: block;
        }
      }
    }
  }
</style>
