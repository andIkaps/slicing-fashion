<script setup>
import hm from '@/assets/img/hm.png'
import obey from '@/assets/img/obey.png'
import shopify from '@/assets/img/shopify.png'
import lacoste from '@/assets/img/lacoste.png'
import levis from '@/assets/img/levis.png'
import amazon from '@/assets/img/amazon.png'
import { reactive } from '@vue/reactivity'

const brands = reactive([
  {
    id: 1,
    name: 'hm',
    image: hm,
  },
  {
    id: 2,
    name: 'obey',
    image: obey,
  },
  {
    id: 3,
    name: 'shopify',
    image: shopify,
  },
  {
    id: 4,
    name: 'lacoste',
    image: lacoste,
  },
  {
    id: 5,
    name: 'levis',
    image: levis,
  },
  {
    id: 6,
    name: 'amazon',
    image: amazon,
  },
])
</script>

<template>
  <section
    class="
      w-full
      px-5
      md:px-10
      lg:px-16
      my-10
      bg-primary
      flex flex-wrap
      justify-around
      gap-8
      items-center
      py-10
    "
  >
    <img
      v-for="brand in brands"
      :key="brand.id"
      :src="brand.image"
      :alt="brand.name"
      class="w-24 md:w-20 lg:w-24"
      :class="{ 'w-28 md:w-28 lg:w-28': brand.name === 'lacoste' }"
    />
  </section>
</template>

<style>
</style>
