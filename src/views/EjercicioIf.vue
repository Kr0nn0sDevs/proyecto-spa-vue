<template>
  <div class="vista">
    <h2>Directivas: v-if, v-else-if y v-else</h2>
    <p>
      La directiva <code>v-if</code> se utiliza para renderizar condicionalmente un bloque en el DOM. 
      Si la condición se evalúa como verdadera, el elemento se crea; de lo contrario, se elimina por completo.
    </p>
    <div class="ejemplo">
      <button @click="calificacion = (calificacion + 1) % 3">Cambiar Estado</button>
      <p style="margin-top: 15px; font-weight: bold;">
        <span v-if="calificacion === 0">🔴 Estado: Reprobado (v-if)</span>
        <span v-else-if="calificacion === 1">🟡 Estado: En revisión (v-else-if)</span>
        <span v-else>🟢 Estado: Aprobado (v-else)</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const calificacion = ref(0)
</script>