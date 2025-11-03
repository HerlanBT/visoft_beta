<template>
  <section id="why"
    class="w-full py-14 flex flex-col gap-12 px-6 items-center">

    <h2 class="text-center text-3xl md:text-4xl font-bold text max-w-3xl">
      ¿Por qué elegir Visoft?
    </h2>

    <div class="flex flex-col gap-6 w-full max-w-4xl">

      <article
        v-for="(item,i) in items"
        :key="i"
        class="relative rounded-2xl p-5 md:p-6
               bg-[var(--background)] dark:bg-[var(--secondary)]/10
               border border-[var(--primary)]/6 dark:border-[var(--secondary)]/10
               text-[var(--text)] dark:text-[var(--text)]
               overflow-hidden transition-all duration-300 hover:scale-[1.01]">
        <div class="flex items-start gap-3 md:gap-4">

          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                      bg-[var(--primary)] text-[text-visoft-gradient] shrink-0 ">
            <component :is="item.icon" class="w-5 h-5 md:w-6 md:h-6 stroke-[3]  " />
          </div>

          <div class="flex flex-col gap-1">
            <h4 class="font-semibold text-lg md:text-xl leading-tight">
              {{ item.title }}
            </h4>
            <p class="opacity-80 text-sm md:text-base leading-tight">
              {{ item.desc }}
            </p>
          </div>

        </div>
      </article>

    </div>

  </section>
</template>

<script setup>
/* importa los iconos desde lucide-vue-next (ya los usaste antes) */
import { Layers, Palette, BarChart } from "lucide-vue-next"

/* items que se muestran (puedes editar textos aquí) */
const items = [
  {
    icon: Layers,
    title: "Arquitectura y desarrollo moderno escalable",
    desc:
      "Aplicamos buenas prácticas enfocadas a escalabilidad real, optimización y software duradero."
  },
  {
    icon: Palette,
    title: "Diseño que transmite marca e identidad real",
    desc:
      "No sólo estética. Nuestro enfoque visual genera significado, diferenciación y recordación."
  },
  {
    icon: BarChart,
    title: "Marketing digital aplicado a conversión",
    desc:
      "Estrategias basadas en data, automatización y funnel performance. No likes, resultados."
  }
]
</script>

<style scoped>
/* pequeñas protecciones visuales si quieres ajustar */
section { contain: content; }
article { will-change: transform; }
</style>
