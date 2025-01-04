<template>
  <div class="bg-white shadow rounded-lg p-4 sm:p-6">
    <h2 class="text-xl font-semibold mb-4">Upcoming earnings</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <h3 class="text-sm text-gray-500">Next report date</h3>
        <p class="font-semibold">October 24</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Report period</h3>
        <p class="font-semibold">Q3 2024</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">EPS estimate</h3>
        <p class="font-semibold">$2.23/53</p>
      </div>
      <div>
        <h3 class="text-sm text-gray-500">Revenue estimate</h3>
        <p class="font-semibold">$14,28.45/43</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingEarnings'
}
</script>