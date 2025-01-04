<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">News & Sentiment</h2>
    <div class="space-y-4">
      <div v-for="(item, index) in newsItems" :key="index" class="border-b pb-4 last:border-b-0">
        <h3 class="font-semibold text-blue-600">{{ item.title }}</h3>
        <p class="text-sm text-gray-600">{{ item.description }}</p>
        <div class="mt-2 text-xs text-gray-500">{{ item.source }} - {{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsAndSentiment',
  data() {
    return {
      newsItems: [
        {
          title: 'IBM Stock Can Keep Setting Records, Analyst Says',
          description: 'IBM stock can keep setting records, analyst says. How high shares could go.',
          source: 'Barrons.com',
          date: '2 hours ago'
        },
        {
          title: 'IBM Stock Can Keep Setting Records, Analyst Says',
          description: 'IBM stock can keep setting records, analyst says. How high shares could go.',
          source: 'Barrons.com',
          date: '3 hours ago'
        },
        {
          title: 'IBM Stock Can Keep Setting Records, Analyst Says',
          description: 'IBM stock can keep setting records, analyst says. How high shares could go.',
          source: 'Barrons.com',
          date: '5 hours ago'
        }
      ]
    }
  }
}
</script>