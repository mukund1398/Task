import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("./components/Home.vue"),
  },

  {
    path: "/setting",
    name: "SettingPage",
    component: () => import("./components/Settings.vue"),
  },
  {
    path: "/cards",
    name: "CardPage",
    component: () => import("./components/Cards.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
