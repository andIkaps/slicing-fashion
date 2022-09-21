<script setup>
</script>

<template>
  <section class="flex justify-center items-center bg-primary py-24">
    <div class="w-10/12 text-center text-white md:w-3/5 lg:w-1/2 xl:w-2/5">
      <h1 class="text-2xl font-black lg:tracking-wider lg:leading-snug">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h1>
      <p class="text-[#FFFCF8] text-sm my-4 lg:text-base">
        Type your email down below and be young wild generation
      </p>

      <form @submit.prevent="" class="flex justify-center">
        <div class="relative w-full md:w-3/5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Add your email here"
            class="
              w-full
              text-sm
              px-6
              py-4
              outline-none
              text-[#767676]
              placeholder:text-[#767676]
              rounded-md
              lg:py-3.5
            "
          />

          <button
            type="submit"
            class="
              uppercase
              font-medium
              tracking-wider
              px-6
              py-2
              bg-black
              rounded-md
              absolute
              right-2
              top-1.5
              lg:py-1.5
            "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
</style>
