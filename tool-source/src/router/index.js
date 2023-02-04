import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: () => import("@/layout"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home"),
      },
      {
        path: "/memrise",
        name: "Memrise",
        component: () => import("@/views/memrise"),
      },
      {
        path: "/translate",
        name: "Translate",
        component: () => import("@/views/translate"),
      },
      {
        path: "/cheatography",
        name: "Cheatography",
        component: () => import("@/views/cheatography"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  mode: "history",
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
