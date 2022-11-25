<script setup lang="ts">
  import { ref } from 'vue';
  import flagVN from '@/assets/language/vietnam.png';
  import flagUsa from '@/assets/language/usa.png';
  import { useLanguage } from '@/hooks/useLanguage';

  const { isVieLang } = useLanguage();

  const optionLanguage = [
    {
      label: 'VietNames',
      image: flagVN,
      value: 'VN',
    },
    {
      label: 'English',
      image: flagUsa,
      value: 'EN',
    },
  ];
  const valueSelect = ref(
    isVieLang.value
      ? {
          image: flagVN,
          value: 'VN',
        }
      : {
          image: flagUsa,
          value: 'EN',
        },
  );

  const isOpen = ref(false);

  const selectLanguage = ({ image, value }: any) => {
    valueSelect.value = {
      image,
      value,
    };
    handleClick();
    isVieLang.value = value === 'VN';
  };

  const handleClick = () => {
    isOpen.value = !isOpen.value;
  };
</script>

<template>
  <div class="language">
    <div class="language__select" @click="handleClick">
      <img :src="valueSelect.image" alt="arrow-drop-down" class="language__select__flag" />
      <img
        src="@/assets/icon/arrow-drop-down-black.png"
        alt="arrow-drop-down"
        class="language__select__dropdown language__select__dropdown--black"
      />
      <img
        src="@/assets/icon/arrow-drop-down.png"
        alt="arrow-drop-down"
        class="language__select__dropdown language__select__dropdown--white"
      />
    </div>
    <ul v-if="isOpen" class="language__option">
      <li
        v-for="item in optionLanguage"
        :key="item.value"
        class="language__option__item"
        @click="selectLanguage(item)"
      >
        <div class="language__option__item__check">
          <img
            v-if="item.value === valueSelect.value"
            src="@/assets/icon/tick.png"
            alt="tick"
            class="checked"
          />
        </div>
        <img :src="item.image" alt="usa" />
        <h2>{{ item.label }}</h2>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .language {
    position: relative;
    width: 50px;

    &__select {
      display: flex;
      align-items: center;
      gap: 7.33px;
      cursor: pointer;
      &__flag {
        width: 33.33px;
        height: 33.33px;
      }
      @include mobile {
        width: 80px;
        height: 40px;
        box-sizing: border-box;
        padding: 6px 14px;

        display: flex;
        justify-items: center;
        align-items: center;

        background: #f6f6f6;
        border: 1px solid #afafaf;
        border-radius: 8px;
      }

      &__dropdown {
        width: 24px;
        height: 24px;
        &--black {
          display: none;
          @include mobile {
            display: block;
          }
        }
        &--white {
          @include mobile {
            display: none;
          }
        }
      }
    }
    &__option {
      position: absolute;
      right: 0px;
      top: 110%;
      box-sizing: border-box;
      width: 156px;
      background: #ffffff;
      z-index: 11;
      border: 1px solid #eeeeee;
      border-radius: 8px;
      padding: 3.33px 10px;

      @include mobile {
        left: 0px;
        top: 110%;
      }
      &__item {
        display: flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
        img {
          width: 33.33px;
        }
        h2 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 10px;
          line-height: 18px;
          color: #000000;
        }
        &__check {
          width: 24px;
          img {
            display: none;
            width: 24px;
          }
        }
      }
      .checked {
        display: block;
      }
    }
  }
</style>
