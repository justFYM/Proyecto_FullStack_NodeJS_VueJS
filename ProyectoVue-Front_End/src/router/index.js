import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/',
    name: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue'),
    meta: {requireAuth: true}
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/datos',
    name: 'datos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Datos.vue'),
    meta: {requireAuth: true}
  },
    {
    path: '/notas',
    name: 'notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue'),
    meta: {requireAuth: true}
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {

  const rutaProtegida = to.matched.some(record => record.meta.requireAuth)

  if(rutaProtegida && store.state.token === ''){
    console.log('Es protegida');
    next({name: 'login'});
    

  }else{
    next();
  }
});

export default router
