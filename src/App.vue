<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4">
          <img 
            src="./assets/ibm-logo.png"  
            alt="IBM Logo" 
            class="w-12 h-12"
          />
          <div>
            <h1 class="text-3xl font-bold text-gray-900">
              International Business Machines Corporation
            </h1>
            <div class="mt-2">
              <span class="text-3xl font-bold">208.87</span>
              <span class="ml-2 text-sm text-green-600">+0.46 (+0.22%)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex space-x-8">
              <router-link 
                v-for="tab in tabs" 
                :key="tab.path"
                :to="tab.path"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                :class="[
                  $route.path === tab.path
                    ? 'border-b-2 border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                ]"
              >
                {{ tab.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabs: [
        { name: 'Overview', path: '/' },
        { name: 'Key Facts', path: '/key-facts' },
        { name: 'Financials', path: '/financials' },
        { name: 'News & Sentiment', path: '/news' },
        { name: 'Estimates', path: '/estimates' },
        { name: 'Dividends', path: '/dividends' },
        { name: 'SEC Filings', path: '/sec-filings' }
      ]
    }
  }
}
</script>