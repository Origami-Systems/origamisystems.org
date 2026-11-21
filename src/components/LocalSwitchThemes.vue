<template>
    <SwitchThemesButton @click="toggleTheme" :colorMode="colorMode" />
</template>

<script setup lang="ts">
import { SwitchThemesButton, useColorTheme } from "@origami-systems/ui";

const { colorMode, switchThemes } = useColorTheme();

// Cross-fade the whole page at once so every element changes color together,
// instead of some elements easing over --transition-time while others snap.
function toggleTheme() {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!("startViewTransition" in document) || reduceMotion) {
        root.classList.add("theme-switching");
        switchThemes();
        // Force a style flush with transitions off, then turn them back on.
        void root.offsetHeight;
        root.classList.remove("theme-switching");
        return;
    }

    root.classList.add("theme-switching");
    const transition = document.startViewTransition(() => switchThemes());
    // Animations can be paused (e.g. background tabs), so don't rely on
    // `finished` alone to turn transitions back on.
    const done = () => root.classList.remove("theme-switching");
    Promise.race([
        transition.finished,
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).finally(done);
}
</script>
