<template>
  <div class="vista">
    <h2>Directiva: v-bind:key</h2>
    <p>
      El atributo especial <code>:key</code> (v-bind:key) le proporciona una pista a Vue para rastrear la identidad de cada nodo dentro de un bucle. 
      Esto permite optimizar el rendimiento y reutilizar elementos del DOM eficientemente durante actualizaciones.
    </p>
    <div class="ejemplo">
      <h3 style="margin-top: 0; color: #2c3e50;">Lista de Lenguajes con ID único:</h3>
      <ul>
        <li v-for="lenguaje in lenguajes" :key="lenguaje.id">
          <strong>ID {{ lenguaje.id }}:</strong> {{ lenguaje.nombre }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const lenguajes = ref([
  { id: 101, nombre: 'Python' },
  { id: 102, nombre: 'Java' },
  { id: 103, nombre: 'C++' }
])
</script>