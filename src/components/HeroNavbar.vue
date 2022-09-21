<script setup>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import IconMenu from './icons/IconMenu.vue'
import HeroNavbarItem from './HeroNavbarItem.vue'
import IconClose from './icons/IconClose.vue'

const showMenu = ref(false)
onMounted(() => {
  if (window.innerWidth >= 1024) {
    showMenu.value = true
  }
})
</script>

<template>
  <nav class="flex justify-between py-5">
    <a
      href="#"
      class="
        font-black
        flex
        text-xl
        items-center
        uppercase
        tracking-wide
        xl:text-2xl
      "
    >
      <img src="@/assets/img/logo.png" alt="logo" class="w-4 mr-1.5 xl:w-5" />
      Fashion
    </a>

    <button
      class="cursor-pointer lg:hidden z-30"
      :class="{ 'text-white': showMenu }"
      @click="showMenu = !showMenu"
    >
      <IconMenu v-if="!showMenu" />
      <IconClose v-else />
    </button>

    <HeroNavbarItem :showMenu="showMenu" />
  </nav>
</template>

<style>
</style>
