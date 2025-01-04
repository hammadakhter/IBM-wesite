<template>
  <div class="space-y-6">
    <StockChart />
    <UpcomingEarnings />
    <AboutCompany />
    <KeyStats />
    <DividendInfo />
    <FinancialCharts />
    <NewsAndSentiment />
    <PeersComparison />
  </div>
</template>

<script>
import StockChart from '@/components/StockChart.vue'
import UpcomingEarnings from '@/components/UpcomingEarnings.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import KeyStats from '@/components/KeyStats.vue'
import DividendInfo from '@/components/DividendInfo.vue'
import FinancialCharts from '@/components/FinancialCharts.vue'
import NewsAndSentiment from '@/components/NewsAndSentiment.vue'
import PeersComparison from '@/components/PeersComparison.vue'

export default {
  name: 'OverviewDashboard',
  components: {
    StockChart,
    UpcomingEarnings,
    AboutCompany,
    KeyStats,
    DividendInfo,
    FinancialCharts,
    NewsAndSentiment,
    PeersComparison
  }
}
</script>