import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
    // component: () => import("@/layouts/default/Default.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
