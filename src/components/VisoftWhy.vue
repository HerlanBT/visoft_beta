<template>
  <section class="w-full py-14 flex flex-col gap-12">

    <h2 class="w-full text-center text-4xl font-bold text-visoft-gradient">
      ¿Por qué elegir Visoft?
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <article
        v-for="(item,i) in items"
        :key="i"
        class="relative rounded-2xl p-6 bg-[var(--background)] dark:bg-[var(--secondary)]/30
               overflow-hidden transition-all duration-300"
      >
        <div
          class="flex flex-col gap-3 transform-gpu transition-all duration-300
                 hover:scale-[1.03]"
        >
          <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto
                      bg-[var(--primary)]/20 dark:bg-[var(--accent)]/25">
            <component :is="item.icon" class="w-7 h-7 stroke-[3]" />
          </div>

          <h3 class="text-center text-xl font-semibold">{{ item.title }}</h3>
          <p class="opacity-80 leading-snug text-sm text-center">{{ item.desc }}</p>
        </div>
      </article>

    </div>

  </section>
</template>

<script setup>
import { Layers, Palette, BarChart } from "lucide-vue-next"

const items = [
  {
    icon: Layers,
    title: "Software escalable",
    desc: "Arquitectura moderna, optimizada para crecer y durar."
  },
  {
    icon: Palette,
    title: "Diseño con identidad real",
    desc: "Transmitimos marca auténtica y diferenciación memorable."
  },
  {
    icon: BarChart,
    title: "Marketing que convierte",
    desc: "Funnel + data. No buscamos likes. Buscamos resultados."
  }
]
</script>
