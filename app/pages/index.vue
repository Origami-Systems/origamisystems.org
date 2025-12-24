<template>
    <OrigamiSystemsWordmark />
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
#index {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    max-width: 100%;
}

.intro {
    max-width: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    margin: 10em;
}

.thehouseapp {
    width: 100%;
    max-width: 300px
}

.index-card {
    max-width: 80%;
    width: 100%;
    text-align: left;
}

@media (max-width:750px) {
    .intro {
        flex-direction: column;
        margin: 5em;

        .logo {
            margin-bottom: 2em;
            transform: scale(0.9);
        }
    }
}
</style>
