<script setup>
import { useCounter } from '~/composables/states';
import { useCounterStore } from '~/stores/myStore';
const store = useCounterStore();
const counter = useCounter()
const { increment } = store
function incrementOn() {
    counter.value++
}
</script>

<template>
    <div class="Main">
        <h1 class="text-3xl font-bold  text-emerald-800">
            State page
        </h1>
        <div>
            <p>{{ store.name }}</p>
            <button @click="increment">Change</button>
            <p>Counter: {{ counter }}</p>
            <button @click="incrementOn" class="block">Increment</button>

        </div>
    </div>
</template>