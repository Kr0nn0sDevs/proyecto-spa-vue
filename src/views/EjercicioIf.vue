<template>
  <div class="vista">
    <h2>Directivas: v-if, v-else-if y v-else</h2>
    
    <p>
      La directiva <code>v-if</code> se utiliza para renderizar condicionalmente un bloque en el DOM. 
      A diferencia de <code>v-show</code>, los elementos dentro de un <code>v-if</code> no existen en el árbol HTML si la condición no se cumple.
    </p>

    <!-- Ejemplo de la Estructura -->
    <div class="estructura">
      <h3>Sintaxis de la Estructura:</h3>
      <pre><code>&lt;div v-if="condicion === 1"&gt;Bloque A&lt;/div&gt;
&lt;div v-else-if="condicion === 2"&gt;Bloque B&lt;/div&gt;
&lt;div v-else&gt;Bloque C&lt;/div&gt;</code></pre>
    </div>

    <!-- Aplicación Práctica -->
    <div class="ejemplo">
      <h3>Aplicación Interactiva:</h3>
      <p>Selecciona la calificación del alumno para ver cómo renderiza Vue el elemento:</p>
      
      <div class="botones-grupo">
        <button @click="calificacion = 5">Reprobado (5)</button>
        <button @click="calificacion = 7">En Revisión (7)</button>
        <button @click="calificacion = 10">Aprobado (10)</button>
      </div>

      <div class="resultado">
        <p v-if="calificacion < 7" class="estado reprobado">
          🔴 <strong>Estado (v-if):</strong> Reprobado. El alumno debe presentar evaluación extraordinaria.
        </p>
        <p v-else-if="calificacion >= 7 && calificacion < 9" class="estado revision">
          🟡 <strong>Estado (v-else-if):</strong> En revisión. El alumno cuenta con calificación regular.
        </p>
        <p v-else class="estado aprobado">
          🟢 <strong>Estado (v-else):</strong> Aprobado. El alumno acreditó satisfactoriamente la materia.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const calificacion = ref(10)
</script>
