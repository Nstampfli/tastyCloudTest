import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Bar from '../views/Bar.vue';
import Cuisine from '../views/Cuisine.vue';


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/bar',
    component: Bar,
  },
  {
    path: '/cuisine',
    component: Cuisine,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;