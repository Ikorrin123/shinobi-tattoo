import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/calendar",
    name: "calendar",

    component: () => import("../views/CalendarView.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",

    component: () => import("../views/GalleryView.vue"),
  },

  {
    path: "/login",
    name: "login",

    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
