<template>
  <div class="bg-white shadow rounded-lg p-6">
    <h1 class="text-2xl font-bold mb-4">Key Facts</h1>
    <div v-if="isLoading" class="text-center">
      <p class="text-gray-600">Loading key facts...</p>
    </div>
    <div v-else-if="error" class="text-center">
      <p class="text-red-600">{{ error }}</p>
    </div>
    <div v-else-if="keyFacts">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(value, key) in keyFacts" :key="key" class="bg-gray-100 p-4 rounded-lg">
          <h2 class="text-lg font-semibold mb-2">{{ formatKey(key) }}</h2>
          <p class="text-gray-800">{{ value }}</p>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p class="text-gray-600">No key facts available.</p>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'KeyFactsPage',
  setup() {
    const store = useStore()

    const keyFacts = computed(() => store.getters.getKeyFacts)
    const isLoading = computed(() => store.getters.isLoading)
    const error = computed(() => store.getters.getError)

    onMounted(() => {
      store.dispatch('fetchKeyFacts')
    })

    const formatKey = (key) => {
      return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    return {
      keyFacts,
      isLoading,
      error,
      formatKey
    }
  }
}
</script>