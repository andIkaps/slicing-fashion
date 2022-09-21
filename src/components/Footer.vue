<script setup>
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
</script>

<template>
  <footer
    class="
      w-full
      px-5
      md:px-10
      lg:px-16
      bg-black
      text-white
      py-16
      grid grid-cols-1
      gap-y-10
      md:grid-cols-2
      xl:grid-cols-5
    "
  >
    <div class="col-span-1 space-y-3.5 xl:col-span-2">
      <h1 class="font-black text-xl uppercase tracking-wider">Fashion</h1>
      <p class="text-[#8E8E8E] text-sm font-roboto">
        Complete your style with awesome clothes from us.
      </p>

      <div class="flex space-x-3.5">
        <a
          href="#"
          class="
            w-10
            h-10
            bg-primary
            flex
            items-center
            justify-center
            rounded-md
            transition-transform
            duration-100
            hover:translate-y-0.5
          "
        >
          <IconFacebook />
        </a>
        <a
          href="#"
          class="
            w-10
            h-10
            bg-primary
            flex
            items-center
            justify-center
            rounded-md
            transition-transform
            duration-100
            hover:translate-y-0.5
          "
        >
          <IconInstagram />
        </a>
        <a
          href="#"
          class="
            w-10
            h-10
            bg-primary
            flex
            items-center
            justify-center
            rounded-md
            transition-transform
            duration-100
            hover:translate-y-0.5
          "
        >
          <IconTwitter />
        </a>
        <a
          href="#"
          class="
            w-10
            h-10
            bg-primary
            flex
            items-center
            justify-center
            rounded-md
            transition-transform
            duration-100
            hover:translate-y-0.5
          "
        >
          <IconLinkedIn />
        </a>
      </div>
    </div>

    <div class="col-span-1 space-y-3.5 font-roboto">
      <h3 class="text-lg text-[#D9D9D9]">Company</h3>

      <ul class="text-[#8E8E8E] space-y-4">
        <li><a href="#">About</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div class="col-span-1 space-y-3.5 font-roboto">
      <h3 class="text-lg text-[#D9D9D9]">Quick Link</h3>

      <ul class="text-[#8E8E8E] space-y-4">
        <li><a href="#">Share Location</a></li>
        <li><a href="#">Orders Tracking</a></li>
        <li><a href="#">Size Guide</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
    </div>

    <div class="col-span-1 space-y-3.5 font-roboto">
      <h3 class="text-lg text-[#D9D9D9]">Legal</h3>

      <ul class="text-[#8E8E8E] space-y-4">
        <li><a href="#">Terms & conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </footer>
</template>

<style>
</style>
