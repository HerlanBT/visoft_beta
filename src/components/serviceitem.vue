<template>
  <li
    class="w-full flex items-start gap-4 p-6 rounded-xl cursor-pointer
    hover:bg-[var(--accent)] hover:text-[var(--background)]
    dark:hover:bg-[var(--background)] dark:hover:text-[var(--text)]
    transition-all duration-300
    will-change-transform hover:scale-[1.02]"
  >

    <component :is="icons[icon]" class="w-10 h-10 gradient-icon" />

    <div class="flex flex-col gap-1">
      <h3 class="text-xl font-bold text-visoft-gradient">{{ title }}</h3>
      <p class="opacity-80 text-sm leading-tight">{{ desc }}</p>
    </div>
  </li>
</template>


<script setup>
import { defineProps } from 'vue'
import { Laptop, Palette, LineChart } from "lucide-vue-next"

defineProps({
  icon: String,
  title: String,
  desc: String
})

const icons = {
  dev: Laptop,
  design: Palette,
  marketing: LineChart
}
</script>
