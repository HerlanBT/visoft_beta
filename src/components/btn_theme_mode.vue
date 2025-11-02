<template>
  <button
    @click="toggleTheme"
    class="px-4 py-2 rounded-xl bg-primary text-background font-bold border border-secondary active:scale-95 transition"
  >
    {{ isDark ? '🌙 Dark' : '☀️ Light' }}
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem("theme")
  if (saved === "dark") {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem("theme", isDark.value ? "dark" : "light")
}
</script>
