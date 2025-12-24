<template>
    <img v-if="colorMode.value === 'light'" src="/icons/light/wordmark.png" alt="Origami Systems Logo"
        title="Origami Systems" width="450" class="logo" />
    <img v-else src="/icons/dark/wordmark.png" alt="Origami Systems Logo" title="Origami Systems" width="450"
        class="logo" />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
