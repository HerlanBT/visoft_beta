<template>
  <section id="hero"
  class="w-full flex flex-col items-center justify-center gap-6 py-20">

    <div class="relative w-full flex items-center justify-center h-[500px]">

      <transition-group name="stack" tag="div" class="relative w-full flex items-center justify-center">
  <img 
  v-for="(img, index) in images"
  :key="img.src + index"
  v-show="index === current"
  :src="img.src"
  class="absolute transition-all duration-700 will-change-transform rounded-3xl shadow-xl object-cover"
  :class="img.size === 'big' ? 'w-full max-w-[1400px]' : 'w-[350px]'"
/>

      </transition-group>

    </div>

    <h2 class="text-3xl font-black text mt-4 bordered-text text-center max-w-3xl px-4">
      Tecnología que se ve, se entiende, se transforma.
    </h2>


  </section>
</template>


<script setup>
import { ref, onMounted } from "vue"

const images = [
  {
    src:"/image/visoft3.jpg",
    size:"big"
  },
  {
    src:"/image/visoft4.jpg",
    size:"small-left"
  },
  {
    src:"/image/visoft2.jpeg",
    size:"small-right"
  }
]

const current = ref(0)
let auto

const select = (i)=>{
  current.value = i
  clearInterval(auto) // pausamos auto cuando usuario selecciona
}

onMounted(()=>{
  auto = setInterval(()=>{
    current.value = (current.value + 1) % images.length
  },3500) 
})

</script>


<style scoped>
.stack-enter-from {
  opacity: 0;
  transform: scale(.92) translateY(15px) rotateY(12deg);
  filter: blur(4px);
}
.stack-enter-active {
  transition: all .8s ease;
}
.stack-leave-to {
  opacity: 0;
  transform: scale(1.08) translateY(-15px) rotateY(-10deg);
  filter: blur(4px);
}
.stack-leave-active {
  transition: all .8s ease;
}
</style>
