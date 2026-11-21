<template>
    <a :href="enhancement.html_url" class="link">
        <div class="container">
            <span class="title"
                >#{{ enhancement.number }}: {{ enhancement.title }}</span
            >
            <span
                class="status-text capitalize"
                style="color: var(--always-white)"
                :class="{ [enhancement.state]: true }"
                >{{ enhancement.state }}</span
            >
        </div>
    </a>
</template>

<script setup lang="ts">
import type { GitHubIssue } from "~/types/GitHubIssue";

defineProps<{
    enhancement: GitHubIssue;
}>();
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px;
    border-bottom: 0.5px solid var(--background-0);
}
.container .status-text {
    padding: 6px;
    border-radius: var(--border-radius);
}
.container .status-text.closed {
    background-color: var(--color-purple);
}
.container .status-text.open {
    background-color: var(--color-green);
}

.container:nth-child(odd) {
    background-color: var(--background-1);
}
</style>
