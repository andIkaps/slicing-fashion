<script setup>
import IconArrowRight from './icons/IconArrowRight.vue'
import Favorites from './Favorites.vue'

const youngsFavorite = [
  {
    id: 1,
    title: 'Trending on instagram',
    image: 'src/assets/img/product_4.png',
  },
  {
    id: 2,
    title: 'All Under $40',
    image: 'src/assets/img/product_5.png',
  },
]
</script>

<template>
  <main class="w-full px-5 md:px-10 lg:px-16 mb-10 relative">
    <h1 class="font-black tracking-wider text-lg lg:text-xl">
      Young’s Favourite
    </h1>
    <svg
      class="absolute left-32 w-20 top-4 -z-10 md:left-36 lg:left-48 lg:top-4"
      viewBox="0 0 186 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
        fill="#EBD96B"
      />
    </svg>

    <Favorites :youngsFavorite="youngsFavorite" />
  </main>
</template>

<style>
</style>
