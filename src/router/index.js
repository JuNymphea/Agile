import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    component: Layout, // 修改为 Layout 组件
    children: [
      {
        path: '',
        component: () => import( '../views/Home.vue'),
      }
    ]
  },
  {
    path: '/main',
    component: Layout,
    children: [{
        path: 'stu/personalinfo',
        component: () => import('../views/stu/stu-personalinfo')
      },
      {
        path: 'pro/personalinfo',
        component: () => import('../views/pro/pro-personalinfo')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
