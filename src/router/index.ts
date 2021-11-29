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
    alert('注意保存哟')
  }
  next()
})

export default router