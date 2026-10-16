<template>
  <div class="vista">
    <h2>Directiva: v-show</h2>
    <p>
      La directiva <code>v-show</code> altera la visibilidad de un elemento modificando su propiedad CSS 
      <code>display</code>. A diferencia de <code>v-if</code>, el elemento permanece en el DOM independientemente de si es visible o no.
    </p>
    <div class="ejemplo">
      <button @click="isVisible = !isVisible">Alternar Visibilidad</button>
      <p v-show="isVisible" style="margin-top: 15px; font-weight: bold; color: #42b983;">
        ✨ ¡Este mensaje se oculta y muestra alternando la propiedad CSS display!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
</script>