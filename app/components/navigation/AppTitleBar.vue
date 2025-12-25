<template>
    <TitleBar>
        <template #icon>
            <ClientOnly>
                <NuxtLink :to="`/`" v-if="colorMode.value === 'dark'">
                    <div class="icon">
                        <img src="/icons/dark/favicon.png" width="55" class="logo" alt="Origami Systems Logo" />
                    </div>
                </NuxtLink>
                <NuxtLink :to="`/`" v-else>
                    <div class="icon">
                        <img src="/icons/light/favicon.png" width="55" class="logo" alt="Origami Systems Logo" />
                    </div>
                </NuxtLink>
            </ClientOnly>
        </template>
        <template #tabs>
            <TitleBarItem to="/">Home</TitleBarItem>
            <TitleBarItem to="/products">Products</TitleBarItem>
            <TitleBarItem to="/bugs-tracker">Bugs Tracker</TitleBarItem>
            <TitleBarItem to="/blog">Blog</TitleBarItem>
            <TitleBarItem to="/contact">Contact</TitleBarItem>
        </template>
        <template #sidebar-items>
            <AppSidebar />
        </template>
    </TitleBar>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style scoped lang="css">
.icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
}
</style>
