import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import AfishaView from "@/views/AfishaView.vue";
import SessionView from "@/views/SessionView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import LogPasView from "@/views/LogPasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/afisha',
      name: 'afisha',
      component: AfishaView
    },
    {
      path: '/session',
      name: 'session',
      component: SessionView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/smena',
      name: 'smena',
      component: LogPasView
    },
  ]
})

export default router
