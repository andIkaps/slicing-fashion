<script setup>
import IconArrowRight from './icons/IconArrowRight.vue'

defineProps({
  categoryName: String,
})
</script>

<template>
  <div class="space-y-1 mt-3">
    <h1 class="font-medium text-lg text-[#191919]">{{ categoryName }}</h1>

    <a
      href="#"
      class="flex justify-between items-center text-sm text-[#7F7F7F]"
    >
      <span>Explore now!</span>

      <IconArrowRight class="group-hover:translate-x-3 transition-transform" />
    </a>
  </div>
</template>

<style>
</style>
