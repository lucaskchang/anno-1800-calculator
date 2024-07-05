<template>
  <div>
    <UButton @click="addedBuildings.lumberjackHut++">
      Add Lumberjack Hut
    </UButton>
    <div>
      <p>Wood: {{ totalResources.wood }} t/min</p>
      <p>Lumberjack Hut: {{ addedBuildings.lumberjackHut }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const totalResources = computed(() => {
  const resources = {
    wood: 0,
  };
  for (const building of Object.keys(addedBuildings.value)) {
    resources.wood += buildings[building].wood * addedBuildings.value[building];
  }
  return resources;
});

const buildings = {
  lumberjackHut: {
    wood: 4,
  },
};

const addedBuildings = ref({
  lumberjackHut: 0,
});
</script>
