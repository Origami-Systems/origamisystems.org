<template>
    <OrigamiSystemsWordmark class="origamisystems" />
    <h1>
        We are the creators of
    </h1>
    <TheHouseAppWordmark class="thehouseapp" />
    <h1>
        and more to come!
    </h1>

    <Card>
        <h1>Get Started Today!</h1>
        <!-- TODO: link to services site -->
        <NuxtLink to="/contact" class="link">
            <AppSubmitButton primary>Contact Us</AppSubmitButton>
        </NuxtLink>
    </Card>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Origami Systems"
});
</script>

<style scoped lang="css">
.thehouseapp {
    width: 100%;
    max-width: 300px
}

@media (max-width: 460px) {
    .origamisystems {
        width: 100%;
        max-width: 100%;
    }
}
</style>
