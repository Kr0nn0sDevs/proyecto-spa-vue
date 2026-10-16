<template>
  <div class="vista">
    <h2>Directiva: v-bind:key (:key)</h2>
    
    <p>
      El atributo especial <code>:key</code> le proporciona un identificador único e invariable a cada elemento iterado con <code>v-for</code>[cite: 10]. 
      Esto permite que la de la máquina virtual de Vue realice un seguimiento de los nodos y reutilice componentes sin fallos visuales.
    </p>

    <!-- Ejemplo de la Estructura -->
    <div class="estructura">
      <h3>Sintaxis de la Estructura:</h3>
      <pre><code>&lt;div v-for="objeto in coleccion" :key="objeto.id"&gt;
  &#123;&#123; objeto.nombre &#125;&#125;
&lt;/div&gt;</code></pre>
    </div>

    <!-- Aplicación Práctica -->
    <div class="ejemplo">
      <h3>Aplicación Interactiva:</h3>
      <p>Catálogo de lenguajes de programación enlazados por una Clave Única (ID):</p>

      <table class="tabla-datos">
        <thead>
          <tr>
            <th>Clave Unívoca (:key)</th>
            <th>Lenguaje</th>
            <th>Paradigma</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lenguaje in lenguajes" :key="lenguaje.id">
            <td><code>ID-{{ lenguaje.id }}</code></td>
            <td><strong>{{ lenguaje.nombre }}</strong></td>
            <td>{{ lenguaje.paradigma }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lenguajes = ref([
  { id: 101, nombre: 'JavaScript', paradigma: 'Multiparadigma' },
  { id: 102, nombre: 'Python', paradigma: 'Orientado a Objetos / Funcional' },
  { id: 103, nombre: 'Java', paradigma: 'Orientado a Objetos' },
  { id: 104, nombre: 'C++', paradigma: 'Multiparadigma' }
])
</script>
