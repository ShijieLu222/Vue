import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // 示例页面路由
  // { path: '/venue', component: () => import('@/views/VenueList.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 