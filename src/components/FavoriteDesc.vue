<script setup>
import IconArrowRight from './icons/IconArrowRight.vue'

defineProps({
  title: String,
})
</script>

<template>
  <div class="space-y-1 mt-3 flex justify-between items-center">
    <div>
      <h1 class="font-medium text-lg text-[#191919]">{{ title }}</h1>

      <span class="flex justify-between items-center text-xs text-[#7F7F7F]">
        Explore now!
      </span>
    </div>

    <IconArrowRight
      class="text-[#7F7F7F] group-hover:translate-x-2 transition-transform"
    />
  </div>
</template>

<style>
</style>
