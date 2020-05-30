import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Verification from '../views/Verification.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    meta: { title: 'Registration' }
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification,
    props: true,
    meta: { title: 'Verification' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
    meta: { title: 'Login' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard' }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
