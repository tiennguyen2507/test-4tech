<script setup>
  import { onUnmounted, ref } from 'vue';
  const isActive = ref(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      isActive.value = true;
    } else {
      isActive.value = false;
    }
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div class="scrollTop">
    <a href="#hero">
      <img
        src="@/assets/icon/arrow-circle-up.png"
        alt="circle-up"
        :class="{
          active: isActive,
        }"
      />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .scrollTop {
    img {
      transition: all 0.3s linear;
      width: 66.67px;
      height: 66.67px;
      position: fixed;
      bottom: 86px;
      right: 86px;
      @include mobile {
        bottom: 20px;
        right: 20px;
      }
    }
  }
  .active {
    transform: scaleY(-1);
  }
</style>
