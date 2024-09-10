import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OtherView from '../views/OtherView.vue'
import SettingView from '../views/SettingView.vue'
import TestView from '../views/TestView.vue'
import TestTabView from '../views/TestTabView.vue'
import SlotGameView from '../views/SlotGameView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/other/:testValue',
    name: "other",
    component: OtherView
  },
  {
    path: '/gameView',
    name: 'gameView',
    component: () => import('../views/GameView.vue')
  },
  {
    path: '/settingView',
    name: 'settingView',
    component: SettingView
  },
  {
    path: '/testView/:settingValue',
    name: 'testView',
    component: TestView
  },
  {
    path: '/testTab',
    name: 'testTab',
    component: TestTabView
  },
  {
    path: '/slotGame',
    name: 'slotGame',
    component: SlotGameView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(), //要讓router路徑可以正確讀取，必須將createWebHistory改為createWebHashHistory，不然點到分頁還是會出現錯誤
  routes
})

export default router
