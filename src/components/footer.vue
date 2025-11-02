<template>
  <footer class="w-full py-10 flex flex-col items-center justify-center gap-6 headercom-back rounded-t-2xl shadow-md shadow-[var(--primary)]/30">

    <p class="text-center text-sm opacity-70">
      Innovación, creatividad y tecnología que impulsan tu marca.
    </p>

    <div class="flex items-center gap-8">

      <a href="https://www.facebook.com/profile.php?id=61579280553826" target="_blank"
         class="flex flex-col items-center hover:scale-110 transition-transform duration-300">
        <Facebook class="w-8 h-8" />
        <span class="text-xs mt-1">Facebook</span>
      </a>

      <a href="https://www.instagram.com/visoftbo/followers/" target="_blank"
         class="flex flex-col items-center hover:scale-110 transition-transform duration-300">
        <Instagram class="w-8 h-8" />
        <span class="text-xs mt-1">Instagram</span>
      </a>

      <a href="https://wa.me/59173579598" target="_blank"
         class="flex flex-col items-center hover:scale-110 transition-transform duration-300">
        <MessageCircle class="w-8 h-8" />
        <span class="text-xs mt-1">WhatsApp</span>
      </a>

    </div>

  </footer>
</template>

<script setup>
import { Facebook, Instagram, MessageCircle } from "lucide-vue-next"
</script>
