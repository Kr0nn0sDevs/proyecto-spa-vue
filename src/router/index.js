import { createRouter, createWebHashHistory } from 'vue-router'
import EjercicioIf from '../views/EjercicioIf.vue'
import EjercicioShow from '../views/EjercicioShow.vue'
import EjercicioFor from '../views/EjercicioFor.vue'
import EjercicioKey from '../views/EjercicioKey.vue'

const routes = [
  { path: '/', redirect: '/v-if' },
  { path: '/v-if', component: EjercicioIf },
  { path: '/v-show', component: EjercicioShow },
  { path: '/v-for', component: EjercicioFor },
  { path: '/v-bind-key', component: EjercicioKey }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router