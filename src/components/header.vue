<template>
  <header class="w-full py-6 px-6 
    flex flex-col items-center justify-center gap-4
    headercom-back 
    rounded-b-2xl shadow-md shadow-[var(--primary)]/30">

    <div class="flex flex-col items-center gap-2 ">
      <img src="/image/visoft.png" class="w-24 h-24 md:w-32 md:h-32 object-contain rounded-2xl logo-back p-4 visoft-orbit" />

      <h1 class="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-1">
        Visoft<span class="text-sm md:text-xl align-super">BO</span>
      </h1>

      <p class="text-xs md:text-sm opacity-80 italic">
        make it visual
      </p>
    </div>

    <nav>
      <ul 
      class="flex gap-4 md:gap-10 text-base md:text-lg font-medium text">
        <li @click="go('services')" class="hover:text-[var(--secondary)] transition cursor-pointer">Servicios</li>
        <li @click="go('why')" class="hover:text-[var(--secondary)] transition cursor-pointer">Nosotros</li>
        <li @click="go('contact')" class="hover:text-[var(--secondary)] transition cursor-pointer">Contacto</li>
      </ul>
    </nav>

  </header>
</template>

<script setup>
const go = (section) => {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
