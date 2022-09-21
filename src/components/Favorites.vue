<script setup>
import Favorite from './Favorite.vue'

defineProps({
  youngsFavorite: Array,
})
</script>

<template>
  <section class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
    <Favorite
      v-for="favorite in youngsFavorite"
      :key="favorite.id"
      :favorite="favorite"
    />
  </section>
</template>

<style>
</style>
