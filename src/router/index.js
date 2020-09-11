import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: "index",
    path: "/",
    alias: "/index",
    component: () => import("../views/index")
  },
  {
    name: "zhuanye",
    path: "/zhuanye",
    component: () => import("../views/zhuanye")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
