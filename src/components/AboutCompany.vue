<template>
  <div class="bg-white shadow rounded-lg p-4 sm:p-6">
    <h2 class="text-xl font-semibold mb-4">About International Business Machines Corporation</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div>
        <h3 class="text-sm text-gray-500">Sector</h3>
        <p class="font-semibold">Technology Services</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Industry</h3>
        <p class="font-semibold">Packaged Software</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">CEO</h3>
        <p class="font-semibold">Arvind Krishna</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Website</h3>
        <a href="https://www.ibm.com" class="text-blue-600 hover:underline">ibm.com</a>
      </div>
    </div>
    <p class="text-sm text-gray-600">
      International Business Machines Corporation (IBM) is a technology company. The Company operates through five segments: Cognitive Solutions, Global Business Services (GBS), Technology Services & Cloud Platforms, Systems and Global Financing. The Cognitive Solutions segment delivers a spectrum of capabilities, from descriptive, predictive and prescriptive analytics to cognitive systems...
    </p>
    <button class="mt-2 text-blue-600 hover:text-blue-800">Read more</button>
  </div>
</template>

<script>
export default {
  name: 'AboutCompany'
}
</script>

