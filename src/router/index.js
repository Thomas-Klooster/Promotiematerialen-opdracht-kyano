import { createRouter, createWebHistory } from "vue-router";
import PromotieMaterialenEen from "../views/PromotieMaterialenEen.vue";
import PromotieMaterialenTwee from "../views/PromotieMaterialenTwee.vue";

const routes = [
  { path: "/PromotieMaterialenEen", name: "PromotieMaterialenEen", component: PromotieMaterialenEen },
  { path: "/PromotieMaterialenTwee", name: "PromotieMaterialenTwee", component: PromotieMaterialenTwee },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
