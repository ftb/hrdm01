import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PlansList from '../views/PlansList.vue'
import NewPlan from '../views/NewPlan.vue'
import UserSettings from '../views/UserSettings.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/PlansList',
    name: 'PlansList',
    component: PlansList
  },
  {
    path: '/NewPlan',
    name: 'NewPlan',
    component: NewPlan
  },
  {
    path: '/UserSettings',
    name: 'UserSettings',
    component: UserSettings
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
