<script setup>
import IconStar from './icons/IconStar.vue'
</script>

<template>
  <main
    class="
      mt-5
      w-full
      bg-secondary-200
      px-9
      py-8
      rounded-2xl
      lg:rounded-[3rem]
      overflow-hidden
      md:px-14 md:py-8
      xl:px-24
      relative
    "
  >
    <div class="w-full md:w-1/2 flex flex-col justify-center">
      <h1
        class="
          text-5xl
          w-10/12
          font-black
          leading-tight
          relative
          z-10
          md:w-1/2
          lg:w-9/12 lg:text-6xl lg:leading-[1.2]
          xl:w-1/2 xl:text-7xl xl:leading-[1.3]
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
            before:-translate-x-4
            lg:before:-translate-x-5 lg:before:h-16 lg:before:w-72
            xl:before:w-[23rem] xl:before:h-20
          "
          >LET’S</span
        >
        EXPLORE
        <span
          class="
            before:w-56
            before:bg-secondary-300
            before:h-14
            before:absolute
            before:-z-10
            before:transform
            before:-rotate-2
            before:bottom-16
            before:left-0
            before:-translate-x-4
            lg:before:-translate-x-4
            lg:before:h-[4.5rem]
            lg:before:w-[19.3rem]
            lg:before:bottom-[4.8rem]
            xl:before:w-[23rem] xl:before:h-20 xl:before:bottom-[6.5rem]
          "
          >UNIQUE</span
        >
        CLOTHES.
      </h1>
      <p class="text-sm mt-5 lg:text-lg">
        Live for Influential and Innovative fashion!
      </p>

      <div class="mt-5 flex md:space-x-3 items-center">
        <svg
          class="w-24 h-24 lg:w-28 lg:h-28 hidden md:block"
          viewBox="0 0 190 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30.6152C48 -11.7848 146.667 -1.05149 190 9.61518C176.4 33.6152 57.6667 33.6152 0 30.6152Z"
            fill="#EBD96B"
          />
        </svg>

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

    <img
      src="@/assets/img/hero-image.png"
      alt="Hero image"
      class="hidden md:block absolute bottom-0 w-[55%] right-0 2xl:w-1/2"
    />

    <IconStar
      class="
        hidden
        absolute
        top-5
        left-72
        md:block
        lg:left-[24rem] lg:top-24
        xl:left-[32rem] xl:top-20
      "
    />
    <IconStar
      class="
        hidden
        absolute
        top-16
        right-20
        md:block
        xl:right-56 xl:top-[104px]
      "
    />
    <IconStar
      class="
        hidden
        absolute
        bottom-1
        left-80
        md:block
        xl:left-[35rem] xl:bottom-7
      "
    />
    <IconStar class="hidden absolute bottom-16 right-24 lg:block lg:right-10" />
  </main>
</template>
