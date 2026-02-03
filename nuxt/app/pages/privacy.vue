<template>
</template>

<script lang="ts" setup>

definePageMeta({
    title: "Privacy Policy"
});
</script>


<style lang="css" scoped>
.card {
    width: 100%;
    max-width: 700px;
}

.container {
    text-align: left;
    counter-reset: section;
}

.container h2 {
    counter-increment: section;
    position: relative;
    padding-left: 2rem;
}

.container h2::before {
    content: counter(section) ".";
    position: absolute;
    left: 0;
    font-weight: 600;
}
</style>
