<template>
  <section
    :class="[
      'w-full flex justify-center py-8',
      compact ? 'px-4' : 'px-6'
    ]"
    id="contact"
  >
    <form
      @submit.prevent="onSubmit"
      ref="formRef"
      class="w-full max-w-2xl
             bg-[var(--background)] 
             backdrop-blur-sm rounded-2xl p-6 shadow-md
             border border-transparent dark:visoft-border-form
             transition-colors"
      aria-label="Formulario de contacto Visoft"
    >
      <!-- Header -->
      <div class="mb-4 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-visoft-gradient">
          {{ title }}
        </h2>
        <p class="mt-2 text-sm opacity-80">
          {{ subtitle }}
        </p>
      </div>

      <!-- Inputs -->
      <div :class="compact ? 'space-y-3' : 'grid grid-cols-1 gap-4'">
        <input
          v-model="form.name"
          type="text"
          placeholder="Nombre completo *"
          class="w-full p-3 rounded-lg border border-[var(--primary)]/10
                 bg-transparent text-[var(--text)] placeholder:opacity-60 focus:outline-none
                 focus:ring-2 focus:ring-[var(--primary)]/30"
          aria-required="true"
        />

        <input
          v-model="form.company"
          type="text"
          placeholder="Empresa (opcional)"
          class="w-full p-3 rounded-lg border border-[var(--primary)]/10
                 bg-transparent text-[var(--text)] placeholder:opacity-60 focus:outline-none
                 focus:ring-2 focus:ring-[var(--primary)]/30"
        />

        <input
          v-model="form.email"
          type="email"
          placeholder="Email (opcional)"
          class="w-full p-3 rounded-lg border border-[var(--primary)]/10
                 bg-transparent text-[var(--text)] placeholder:opacity-60 focus:outline-none
                 focus:ring-2 focus:ring-[var(--primary)]/30"
        />

        <input
          v-model="form.phone"
          type="tel"
          placeholder="Teléfono (opcional)"
          class="w-full p-3 rounded-lg border border-[var(--primary)]/10
                 bg-transparent text-[var(--text)] placeholder:opacity-60 focus:outline-none
                 focus:ring-2 focus:ring-[var(--primary)]/30"
        />

        <textarea
          v-model="form.message"
          placeholder="Describe brevemente tu proyecto *"
          rows="5"
          class="w-full p-3 rounded-lg border border-[var(--primary)]/10
                 bg-transparent text-[var(--text)] placeholder:opacity-60 focus:outline-none
                 focus:ring-2 focus:ring-[var(--primary)]/30"
          aria-required="true"
        ></textarea>
      </div>

      <!-- validation errors -->
      <div v-if="error" class="mt-3 text-sm text-red-500">
        {{ error }}
      </div>

      <!-- Actions -->
      <div class="mt-5 flex flex-col sm:flex-row items-center gap-3 justify-center">
        <button
          :disabled="isSending"
          type="submit"
          class="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold
                 bg-[var(--primary)] text-[var(--background)] transition-all
                 hover:brightness-95 disabled:opacity-60"
        >
          <!-- Optional icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 15a2 2 0 0 1-2 2h-4l-3 3v-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Enviar a Visoft vía WhatsApp
        </button>

        <button
          type="button"
          @click="clearForm"
          class="px-4 py-2 rounded-lg border border-[var(--primary)]/20 text-[var(--text)] hover:bg-[var(--primary)]/10 transition"
        >
          Limpiar
        </button>
      </div>

      <!-- helper -->
      <p class="mt-4 text-center text-xs opacity-70">
        Al enviar se abrirá WhatsApp con un mensaje pre-llenado. Revisa los datos antes de enviar.
      </p>
    </form>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

/* -------- CONFIG -------- */
const WA_NUMBER = '59173579598' // tu número (sin +)
const baseMessage = 'Hola! quiero cotizar un proyecto con ustedes.' // elegiste opción 2

/* -------- props -------- */
const props = defineProps({
  compact: { type: Boolean, default: false }, // compact view para home
  title: { type: String, default: '¿Listo para empezar?' },
  subtitle: { type: String, default: 'Rellena tus datos y te contactaremos por WhatsApp.' }
})

/* -------- reactive form -------- */
const formRef = ref(null)
const isSending = ref(false)
const error = ref('')
const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})

/* -------- helpers -------- */
function validate() {
  error.value = ''
  if (!form.name || form.name.trim().length < 2) {
    error.value = 'Por favor ingresa tu nombre completo.'
    return false
  }
  if (!form.message || form.message.trim().length < 8) {
    error.value = 'Por favor describe brevemente tu proyecto (mínimo 8 caracteres).'
    return false
  }
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
    error.value = 'Correo inválido.'
    return false
  }
  return true
}

function buildWhatsAppText() {
  // estructura limpia
  const lines = [
    baseMessage,
    '',
    `Nombre: ${form.name || '-'}`,
    `Empresa: ${form.company || '-'}`,
    `Email: ${form.email || '-'}`,
    `Teléfono: ${form.phone || '-'}`,
    '',
    `Mensaje: ${form.message || '-'}`
  ]
  return encodeURIComponent(lines.join('\n'))
}

function openWhatsApp() {
  const text = buildWhatsAppText()
  const url = `https://wa.me/${WA_NUMBER}?text=${text}`
  window.open(url, '_blank')
}

/* -------- actions -------- */
async function onSubmit() {
  // validation first (user wanted validation then open WA)
  if (!validate()) return

  isSending.value = true
  try {
    // small UX delay to show feedback (optional)
    await new Promise(r => setTimeout(r, 250))

    openWhatsApp()
  } finally {
    isSending.value = false
  }
}

function clearForm() {
  form.name = ''
  form.company = ''
  form.email = ''
  form.phone = ''
  form.message = ''
  error.value = ''
}
</script>

<style scoped>
/* micro tweaks to ensure no overflow issues and consistent look */
form { contain: content; }
</style>
