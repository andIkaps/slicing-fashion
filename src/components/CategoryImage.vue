<script setup>
defineProps({
  image: String,
})
</script>

<template>
  <div class="w-full h-64 rounded-lg overflow-hidden lg:h-[24rem] xl:h-[30rem]">
    <img
      :src="image"
      alt="category image"
      class="
        w-full
        h-full
        object-cover object-center
        transform
        hover:scale-125
        transition-transform
        duration-300
      "
    />
  </div>
</template>

<style>
</style>
