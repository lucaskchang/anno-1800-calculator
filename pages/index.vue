<template>
  <div class="min-h-screen bg-[#dfcaa7] p-4">
    <p class="ubuntu mt-8 text-center text-6xl font-bold">
      Anno 1800 Needs Calculator
    </p>
    <div class="mx-auto mt-12 md:w-2/3">
      <UTabs
        :items="tabs"
        :ui="{
          list: { background: 'bg-[#c59f5f] dark:bg-[#c59f5f]',
                  tab: { inactive: 'text-gray-500 dark:text-gray-500 font-bold', active: 'text-gray-800 dark:text-gray-800', font: 'font-bold' },
                  marker: { background: 'bg-[#dfcaa7] dark:bg-[#dfcaa7]' } },
        }"
      >
        <template #item="{ item }">
          <div class="p-4">
            <BtoP v-if="item.label === 'Buildings to People'" />
            <PtoB v-else />
          </div>
        </template>
      </UTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { label: 'Buildings to People' },
  { label: 'People to Buildings' },
];
</script>
