<script setup>
import bannerImage from '@/assets/img/banner.png'
import IconStar from './icons/IconStar.vue'
</script>

<template>
  <section class="w-full mb-10 md:grid md:grid-cols-2 bg-banner">
    <div class="hidden md:block md:col-span-1 relative">
      <IconStar class="absolute bottom-16 right-10 transform -rotate-180" />
      <IconStar class="absolute top-16 right-16 transform -rotate-180" />
      <IconStar class="absolute top-24 left-16 transform -rotate-180" />
      <IconStar class="absolute bottom-40 left-20 transform -rotate-180" />
      <img :src="bannerImage" alt="Banner image" />
    </div>

    <div
      class="
        md:col-span-1
        bg-banner
        px-10
        py-10
        lg:px-16
        flex flex-col
        justify-center
      "
    >
      <h1
        class="
          text-5xl
          font-black
          leading-tight
          relative
          uppercase
          z-10
          lg:text-6xl lg:leading-[1.2]
          xl:text-7xl xl:leading-[1.3]
        "
      >
        <span
          class="
            before:w-56
            before:bg-white
            before:h-14
            before:absolute
            before:-z-10
            before:transform
            before:-rotate-2
            before:-translate-x-2
            lg:before:-translate-x-5 lg:before:h-16 lg:before:w-72
            xl:before:w-[23rem] xl:before:h-20
          "
          >Payday</span
        >
        <br class="hidden xl:block" />
        Sale now
      </h1>
      <p class="text-base my-5 font-medium lg:text-xl">
        Spend minimal $100 get 30% <br class="hidden xl:block" />
        off voucher code for your next purchase
      </p>
      <p class="flex flex-col space-y-3">
        <span class="font-bold">1 June - 10 June 2021</span>
        *Terms & Conditions apply
      </p>

      <div class="mt-5">
        <a
          href="#"
          class="
            button
            px-6
            py-2.5
            capitalize
            font-medium
            lg:py-3 lg:text-lg
            md:whitespace-nowrap
          "
          >shop now</a
        >
      </div>
    </div>
  </section>
</template>
