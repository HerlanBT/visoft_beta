<script setup>
import BtnThemeMode from './components/btn_theme_mode.vue'
import Header from './components/header.vue';
import banner from './components/banner.vue';
import gridservices from './components/servicesgrid.vue';
import WhyVisoft from './components/WhyVisoft.vue';
import ContactForm from './components/ContactForm.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div class="min-h-screen body-back text-[var(--text)] transition-colors duration-300">

    <!-- HERO IMAGE -->
    <!-- <img src="/image/visoft3.jpg" class="w-full max-h-[340px] object-cover rounded-b-3xl" /> -->

    <!-- HEADER -->
    <Header/>

    <div class="p-6 flex justify-end">
      <!-- <BtnThemeMode class="scale-75" /> -->
    </div>
    <!-- SERVICES -->
    <!-- <service /> -->
    <banner />
    <gridservices />
    <WhyVisoft />
    <ContactForm
      title="¿Listo para llevar tu proyecto al siguiente nivel?"
      subtitle="Contáctanos hoy mismo y descubre cómo Visoft puede ayudarte a alcanzar tus objetivos digitales."
    />
    <Footer />
  </div>
<svg width="0" height="0" style="position:absolute">
  <defs>
    <!-- modo día -->
    <linearGradient id="visoft-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--primary)" />
      <stop offset="100%" stop-color="var(--accent)" />
    </linearGradient>

    <!-- modo noche -->
    <linearGradient id="visoft-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="var(--secondary)" />
      <stop offset="100%" stop-color="var(--accent)" />
    </linearGradient>
  </defs>
</svg>

</template>
