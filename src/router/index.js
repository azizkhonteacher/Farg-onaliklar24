import { createRouter, createWebHistory } from "vue-router";

// views larni import qilamiz
import HomeView from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:slug",
      name: "detail",
      component: () => import("@/views/details.vue"),
    },
    {
      path: "/category/:slug",
      name: "category",
      component: () => import("@/views/categories.vue"),
    },
  ],
});

export default router;
