<script setup>
definePageMeta({
    middleware: 'auth'
})
const { sayhello } = useUtils();
sayhello('profile');
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)
const name = ref("ashraful")

// functions that mutate state and trigger updates
function increment() {
    count.value++
}

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
    <button class="border border-amber-400 p-4 m-4 hover:bg-amber-700" @click="increment">Count is: {{ count }}</button>
    <div>My Profile</div>
    <p>{{ name }}</p>
    <p>{{ sayhello(name) }}</p>
</template>