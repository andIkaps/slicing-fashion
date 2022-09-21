<script setup>
import { reactive } from '@vue/reactivity'
import product_1 from '@/assets/img/product_1.png'
import product_2 from '@/assets/img/product_2.png'
import product_3 from '@/assets/img/product_3.png'
import Category from './Category.vue'

const categories = reactive([
  {
    id: 1,
    name: 'Hoodies & Sweetshirt',
    image: product_1,
  },
  {
    id: 2,
    name: 'Coats & Parkas',
    image: product_2,
  },
  {
    id: 3,
    name: 'Tees & T-Shirt',
    image: product_3,
  },
])
</script>

<template>
  <div class="flex flex-wrap md:flex-nowrap gap-10 w-full lg:gap-16">
    <Category
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<style>
</style>
