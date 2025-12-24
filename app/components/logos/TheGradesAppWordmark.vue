<template>
    <img v-if="colorMode.value === 'light'" src="/icons/grades/light/wordmark.png" alt="The Grades App Logo"
        title="The Grades App" width="450" class="logo" />
    <img v-else src="/icons/grades/dark/wordmark.png" alt="The Grades App Logo" title="The Grades App" width="450"
        class="logo" />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>
