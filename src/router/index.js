import { createRouter, createWebHistory } from 'vue-router'
import OverviewDashboard from '../views/OverviewDashboard.vue'
import KeyFactsPage from '../views/KeyFactsPage.vue'
import FinancialsPage from '../views/FinancialsPage.vue'
import NewsPage from '../views/NewsPage.vue'
import EstimatesPage from '../views/EstimatesPage.vue'
import DividendsPage from '../views/DividendsPage.vue'
import SecFilingsPage from '../views/SecFilingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewDashboard
  },
  {
    path: '/key-facts',
    name: 'KeyFacts',
    component: KeyFactsPage
  },
  {
    path: '/financials',
    name: 'Financials',
    component: FinancialsPage
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  {
    path: '/estimates',
    name: 'Estimates',
    component: EstimatesPage
  },
  {
    path: '/dividends',
    name: 'Dividends',
    component: DividendsPage
  },
  {
    path: '/sec-filings',
    name: 'SecFilings',
    component: SecFilingsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router