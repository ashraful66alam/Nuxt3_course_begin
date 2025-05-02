<script setup>
const response = await $fetch('/api/hello');
console.log(response)
</script>
<template>
    <h1>Login</h1>
</template>