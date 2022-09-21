<script setup>
import CategoryImage from './CategoryImage.vue'
import CategoryDesc from './CategoryDesc.vue'

defineProps({
  category: Object,
})
</script>

<template>
  <div class="w-full md:w-2/5 lg:w-1/3 group">
    <CategoryImage :image="category.image" />

    <CategoryDesc :categoryName="category.name" />
  </div>
</template>

<style>
</style>
