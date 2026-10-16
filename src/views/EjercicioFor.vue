<template>
  <div class="vista">
    <h2>Directiva: v-for</h2>
    <p>
      La directiva <code>v-for</code> se utiliza para renderizar una lista de elementos basada en un arreglo de datos. 
      Itera sobre cada elemento del arreglo y genera una estructura repetitiva en la plantilla.
    </p>
    <div class="ejemplo">
      <h3 style="margin-top: 0; color: #2c3e50;">Lista de Tecnologías:</h3>
      <ul>
        <li v-for="tecnologia in tecnologias">
          {{ tecnologia }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tecnologias = ref(['HTML5', 'CSS3', 'JavaScript', 'Vue.js'])
</script>