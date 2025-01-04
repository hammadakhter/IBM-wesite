<template>
  <div class="bg-white shadow rounded-lg p-4 sm:p-6">
    <h2 class="text-xl font-semibold mb-4">Dividends</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <h3 class="text-sm text-gray-500">Latest Dividend</h3>
        <p class="font-semibold">$1.66 per share</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Ex-dividend date</h3>
        <p class="font-semibold">August 9, 2024</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Last 5 years yield average</h3>
        <p class="font-semibold">4.5%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DividendInfo'
}
</script>

