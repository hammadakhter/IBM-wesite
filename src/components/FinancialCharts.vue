<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Financials</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 class="text-lg font-semibold mb-2">Performance</h3>
        <img src="../assets/second-image.png" alt="Performance Chart" class="w-screen h-[50vh] object-cover" />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">Revenue vs Profit Comparison</h3>
        <img src="../assets/third-image.png" alt="Revenue vs Profit Chart" class="w-screen h-[50vh] object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialCharts'
}
</script>