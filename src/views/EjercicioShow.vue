<template>
  <div class="vista">
    <h2>Directiva: v-show</h2>
    
    <p>
      La directiva <code>v-show</code> permite alternar la visibilidad de un elemento modificando la propiedad CSS <code>display: none;</code>[cite: 10]. 
      El elemento permanece siempre montado dentro del DOM a diferencia de <code>v-if</code>.
    </p>

    <!-- Ejemplo de la Estructura -->
    <div class="estructura">
      <h3>Sintaxis de la Estructura:</h3>
      <pre><code>&lt;button @click="mostrar = !mostrar"&gt;Alternar&lt;/button&gt;
&lt;div v-show="mostrar"&gt;Contenido visible/oculto&lt;/div&gt;</code></pre>
    </div>

    <!-- Aplicación Práctica -->
    <div class="ejemplo">
      <h3>Aplicación Interactiva:</h3>
      <p>Haz clic en el botón para alternar el estado lógico de visibilidad:</p>
      
      <button @click="isVisible = !isVisible">
        {{ isVisible ? 'Ocultar Detalle' : 'Mostrar Detalle' }}
      </button>

      <div v-show="isVisible" class="caja-info">
        <p><strong>✨ Panel de Información Toggleable:</strong></p>
        <p>Este panel utiliza <code>v-show</code>. Si inspeccionas el DOM con F12 cuando está oculto, notarás que la etiqueta sigue ahí pero con la regla <code>style="display: none;"</code>.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
</script>
