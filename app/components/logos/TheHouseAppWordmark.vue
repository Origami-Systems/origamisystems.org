<template>
    <img v-if="colorMode.value === 'light'" src="/icons/house/light/wordmark.png" alt="The House App Logo"
        title="The House App" width="450" class="logo" />
    <img v-else src="/icons/house/dark/wordmark.png" alt="The House App Logo" title="The House App" width="450"
        class="logo" />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
