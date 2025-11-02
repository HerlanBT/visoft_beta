<template>
 <section class="w-full flex flex-col gap-6 py-8 overflow-hidden">
<ServiceItem
  icon="dev"
  title="Software & Web Development"
  desc="Frontend · Backend · Apps"
/>

<ServiceItem
  icon="design"
  title="Diseño Gráfico"
  desc="Branding · UI · Identidad"
/>

<ServiceItem
  icon="marketing"
  title="Marketing Digital"
  desc="SEO · Social Ads · Funnels"
/>


  </section>
</template>
<script setup>
import ServiceItem from './serviceitem.vue'
</script>