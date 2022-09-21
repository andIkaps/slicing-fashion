<script setup>
defineProps({
  image: String,
})
</script>

<template>
  <div class="w-full overflow-hidden">
    <img :src="image" class="object-cover" alt="" />
  </div>
</template>

<style>
</style>
