import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const cfication = () => import('../views/cfication/cfication')
const javascript = () => import('../views/javascript/javascript')
const vue = () => import('../views/vue/vue')
// const bolgchild = () => ('../views/bolg/bolgchild/bolgchild')
// const bolgchild1 = () => ('../views/bolg/bolgchild/bolgchild1')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // name: homes,
    component: home,
  },
  {
    path: '/cfication/:cfi',
    component: cfication,
  },
  {
    path: "/javascript",
    component: javascript,
  },
  {
    path: "/vue",
    component: vue,
  },

]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
