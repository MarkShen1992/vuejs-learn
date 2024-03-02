import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from '../views/VideoView.vue'
import VideoInfo1View from '../views/video/VideoInfo1View.vue'
import VideoInfo2View from '../views/video/VideoInfo2View.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/video/:id',
    name: 'video',
    component: VideoView,
    children: [
      { path: 'info1', name: 'info1', component: VideoInfo1View },
      { path: 'info2', name: 'info2', component: VideoInfo2View }
    ],
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log('路由触发了')
  next()
})

export default router
