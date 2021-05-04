import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PlansList from '../views/PlansList.vue'
import NewPlan from '../views/NewPlan.vue'
import UserSettings from '../views/UserSettings.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/PlansList',
    name: 'Plans List',
    component: PlansList
  },
  {
    path: '/NewPlan',
    name: 'New Plan',
    component: NewPlan
  },
  {
    path: '/UserSettings',
    name: 'User Settings',
    component: UserSettings
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
