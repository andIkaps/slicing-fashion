<script setup>
import FavoriteImage from './FavoriteImage.vue'
import FavoriteDesc from './FavoriteDesc.vue'

defineProps({
  favorite: Object,
})
</script>

<template>
  <div class="w-full col-span-1">
    <a href="#" class="group">
      <FavoriteImage :image="favorite.image" />

      <FavoriteDesc :title="favorite.title" />
    </a>
  </div>
</template>

<style>
</style>
