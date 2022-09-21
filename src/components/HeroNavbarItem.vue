<script setup>
defineProps({
  showMenu: Boolean,
})
</script>

<template>
  <div
    class="fixed w-full h-screen inset-0 bg-black/95 lg:hidden z-20"
    v-if="showMenu"
  ></div>
  <Transition>
    <ul
      v-if="showMenu"
      class="
        uppercase
        flex flex-col
        space-y-10
        fixed
        inset-0
        items-center
        justify-center
        lg:relative lg:flex-row lg:space-y-0 lg:space-x-3
        xl:space-x-10 xl:text-base
        text-white text-lg
        md:text-sm
        lg:text-black
        font-medium
        tracking-wide
        z-20
      "
    >
      <li>
        <a
          href="#"
          class="
            cursor-pointer
            p-3
            hover:bg-gray-100 hover:text-black
            transition-colors
          "
          >catalogue</a
        >
      </li>
      <li>
        <a
          href="#"
          class="
            cursor-pointer
            p-3
            hover:bg-gray-100 hover:text-black
            transition-colors
          "
          >fashion</a
        >
      </li>
      <li>
        <a
          href="#"
          class="
            cursor-pointer
            p-3
            hover:bg-gray-100 hover:text-black
            transition-colors
          "
          >favourite</a
        >
      </li>
      <li>
        <a
          href="#"
          class="
            cursor-pointer
            p-3
            hover:bg-gray-100 hover:text-black
            transition-colors
          "
          >lifestyle</a
        >
      </li>
      <li>
        <a href="#" class="px-5 py-2.5 button">sign up</a>
      </li>
    </ul>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease-in-out;
  transform: translateY(0) scale(1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%) scale(0);
}
</style>
