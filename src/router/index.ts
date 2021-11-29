import { createRouter, createWebHashHistory, RouteRecordRaw, routerKey } from "vue-router"

export type AppRouterRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/addTodo',
      component: () => import('../views/AddTodo.vue'),
      hidden: true
    }
  ] as AppRouterRecordRaw[]
})

router.beforeEach((to, from, next) => {
  if (from.path === '/addTodo') {
    console.log("触发路由守卫 from.path === '/addTodo' ")
  }
  next()
})

export default router