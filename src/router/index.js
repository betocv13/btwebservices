import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/App.vue'; // Your single-page layout
import WorkView from '@/views/WorkView.vue'; // The separate Work page

const routes = [
  { path: '/', component: HomeView },
  { path: '/work', component: WorkView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;