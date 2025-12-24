<template>
    <TitleBar />
    <div class="all">
        <slot />
    </div>
    <Footer />
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Origami Systems",
    description: "",
    ogTitle: "Origami Systems",
    ogUrl: "https://origamisystems.org",
    // ogImage: "https://origamisystems.org/web-app-manifest-192x192.png",
    // twitterImage: "https://origamisystems.org/web-app-manifest-192x192.png",
    twitterTitle: "Origami Systems",
})
</script>

<style scoped lang="css"></style>
