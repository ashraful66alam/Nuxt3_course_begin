<script setup>
import { useState } from 'nuxt/app';

const response = await $fetch('/api/hello');
console.log(response);
const isUserLoggedOut=useState('logout',()=>0);
const isUserRegistered=useState('register',()=>0);

import { onMounted, onUnmounted, ref } from 'vue'

const messages = ref([])
let source

onMounted(() => {
  source = new EventSource('http://localhost:3000/api/stream') // full URL

  source.onmessage = (event) => {
    messages.value.push(event.data)
  }

  source.onerror = (err) => {
    console.error('SSE error:', err)
    source.close()
  }
})

onUnmounted(() => {
  source?.close()
})
</script>
<template>
    <!-- <h1>Login</h1>
    <div>
   <button v-if="isUserRegistered">Register</button>
   <button v-else-if="isUserLoggedOut">Login</button>
   <button v-else>Logout</button>
 </div> -->
 <div class="p-4">
    <h1 class="text-xl font-bold">SSE Messages</h1>
    <ul>
      <li v-for="(msg, i) in messages" :key="i">{{ msg }}</li>
    </ul>
  </div>
</template>