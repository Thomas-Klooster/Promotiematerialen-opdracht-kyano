import { createRouter, createWebHistory } from "vue-router";
import PromotieMaterialenEen from "../views/PromotieMaterialenEen.vue";
import PromotieMaterialenTwee from "../views/PromotieMaterialenTwee.vue";

const routes = [
  { path: '/', redirect: '/promotiematerialen' },
  { path: '/promotiematerialen', name: 'PromotieMaterialenEen', component: PromotieMaterialenEen },
  { path: '/instellingen', name: 'PromotieMaterialenTwee', component: PromotieMaterialenTwee },
]


export default createRouter({
  history: createWebHistory(),
  routes,
});
