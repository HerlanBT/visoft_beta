<template>
  <section class="w-full flex flex-col items-center px-6 py-14 gap-6">

    <h2 id="services" class="text-center text-3xl md:text-4xl font-extrabold text">
      Nuestros Servicios
    </h2>

    <p class="text-center text-sm md:text-base opacity-80 max-w-3xl">
      Innovamos con creatividad y tecnología desde Bolivia para impulsar tu marca con diseño, publicidad y desarrollo digital a tu medida.
    </p>

    <div 
      class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">

      <ServiceCard icon="dev" title="Software & Web Development" desc="Frontend · Backend · Apps"
      parraf="Desarrollo de aplicaciones web y móviles a medida, utilizando las últimas tecnologías y mejores prácticas. Soluciones escalables y mantenibles." />

      <ServiceCard icon="design" title="Diseño Gráfico" desc="Branding · UI · Identidad"
      parraf="Creación de identidad visual, diseño de marca y experiencias de usuario atractivas. Materiales gráficos que comunican tu mensaje de forma efectiva." />

      <ServiceCard icon="marketing" title="Marketing Digital" desc="SEO · Social Ads · Funnels"
      parraf="Estrategias de marketing digital orientadas a resultados. Optimización SEO, gestión de redes sociales y creación de embudos de conversión." />

    </div>

  </section>
</template>

<script setup>
import ServiceCard from './servicecard.vue'
</script>
