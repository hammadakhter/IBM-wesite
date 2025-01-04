<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">Peers Comparison</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="peer in peers" :key="peer.symbol" class="text-center">
        <div class="font-semibold">{{ peer.symbol }}</div>
        <div :class="peer.change >= 0 ? 'text-green-600' : 'text-red-600'">
          {{ peer.price }} {{ peer.change >= 0 ? '▲' : '▼' }} {{ Math.abs(peer.change) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeersComparison',
  data() {
    return {
      peers: [
        { symbol: 'MSFT', price: '338.37', change: 0.39 },
        { symbol: 'NVDA', price: '113.84', change: -0.80 },
        { symbol: 'AAPL', price: '222.77', change: 0.02 },
        { symbol: 'AMD', price: '150.77', change: 1.41 }
      ]
    }
  }
}
</script>

