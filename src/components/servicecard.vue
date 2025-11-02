<template>
  <li 
    class="w-full flex items-start gap-4 p-6 rounded-xl 
    bg-[var(--background)]/60 dark:bg-[var(--background)]
    backdrop-blur-sm border border-[var(--primary)]/20
    transition-all duration-300 hover:scale-[1.015]"
  >

    <component :is="icons[icon] ?? 'span'" class="w-10 h-10 gradient-icon" />

    <div class="flex flex-col gap-1">
      <h3 class="text-xl font-bold text-visoft-gradient">{{ title }}</h3>
      <p class="opacity-80 text-sm leading-tight">{{ desc }}</p>
      <p class="mt-2 text-xs italic opacity-60">{{ parraf }}</p>
    </div>

  </li>
</template>

<script setup>
import { Laptop, Palette, LineChart } from "lucide-vue-next"

const icons = {
  dev: Laptop,
  design: Palette,
  marketing: LineChart
}

defineProps({
  icon: { type: String, required: true },
  title: String,
  desc: String,
  parraf: String
})
</script>
