<script setup>
const { $hello } = useNuxtApp()
</script>

<template>
    <div class="Main">
        <h1 class="text-3xl font-bold  text-emerald-800">
            index page
        </h1>
        <div>
            {{ $hello('worlds') }}
        </div>
        <IconsAdidas></IconsAdidas>
        <img src="@/assets/img/2.webp" alt="image">
        <!-- <img src="/1.jpg" alt="image"> -->


    </div>
</template>