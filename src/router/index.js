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
    meta: { title: 'Registration - Multi-Step Form' }
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification,
    props: true,
    meta: { title: 'Verification - Multi-Step Form' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
    meta: { title: 'Login - Multi-Step Form' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard - Multi-Step Form' }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default router
