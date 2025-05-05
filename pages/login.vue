<script setup>
import { useState } from 'nuxt/app';

const response = await $fetch('/api/hello');
console.log(response);
const isUserLoggedOut=useState('logout',()=>0);
const isUserRegistered=useState('register',()=>0);

</script>
<template>
    <h1>Login</h1>
    <div>
   <button v-if="isUserRegistered">Register</button>
   <button v-else-if="isUserLoggedOut">Login</button>
   <button v-else>Logout</button>
 </div>
</template>