import { createRouter, createWebHistory } from 'vue-router';
import routes from './router.config';

export const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
  scrollBehavior: (to) => {
    if (to.hash)
      return {
        el: to.hash,
        behavior: 'smooth',
      };
  },
});
