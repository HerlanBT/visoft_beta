<template>
  <section class="w-full py-14 flex flex-col gap-12" id="why">

    <h2 class="w-full text-center text-4xl font-bold text">
      ¿Por qué elegir Visoft?
    </h2>

    <div class="flex flex-col gap-6">

      <article
        v-for="(item,i) in items"
        :key="i"
        class="relative rounded-2xl p-6 bg-[var(--text)] dark:bg-[var(--background)]
               overflow-hidden transition-all duration-300 hover:scale-[1.01]"
      >
        <div class="flex items-start gap-4">

          <div class="w-12 h-12 rounded-full flex items-center justify-center
                      bg-[var(--primary)] text-visoft-gradient-border shrink-0">
            <component :is="item.icon" class="w-6 h-6 stroke-[3]" />
          </div>

          <div class="flex flex-col gap-1">
            <h4 class="font-semibold text-xl text-visoft-gradient">
              {{ item.title }}
            </h4>
            <p class="opacity-80 leading-tight text-base">
              {{ item.desc }}
            </p>
          </div>

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
    title: "Arquitectura y desarrollo moderno escalable",
    desc: "Aplicamos buenas prácticas enfocadas a escalabilidad real, optimización y software duradero."
  },
  {
    icon: Palette,
    title: "Diseño que transmite marca e identidad real",
    desc: "No sólo estética. Nuestro enfoque visual genera significado, diferenciación y recordación."
  },
  {
    icon: BarChart,
    title: "Marketing digital aplicado a conversión",
    desc: "Estrategias basadas en data, automatización y funnel performance. No likes, resultados."
  }
]
</script>
