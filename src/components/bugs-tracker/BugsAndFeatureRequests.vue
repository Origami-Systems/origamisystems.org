<template>
    <div class="settings">
        <div class="search">
            <TextField
                v-model="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </div>
        <Dropdown
            :options="['Issues', 'Feature Requests']"
            v-model="mode"
            class="mode"
            aria-label="Type"
        />
        <Dropdown
            :options="['Open', 'Closed']"
            v-model="status"
            class="status"
            width="140px"
            aria-label="Status"
        />
    </div>
    <RoundedContainer v-if="mode === 'Issues'">
        <template #title>Known Issues</template>
        <AppSkeleton v-if="loading" loading label="Loading issues">
            <div v-for="item in placeholders" :key="item.id" class="left-aligned">
                <BugItem :issue="item" />
            </div>
        </AppSkeleton>
        <div
            v-else-if="filtered.length > 0"
            v-for="issue in filtered"
            :key="issue.id"
            class="left-aligned"
        >
            <BugItem :issue="issue" />
        </div>
        <div v-else class="left-aligned">
            <div class="container">
                <span class="title">
                    No known issues at this time. If you encounter any problems,
                    please report them!
                </span>
            </div>
        </div>
    </RoundedContainer>
    <RoundedContainer v-if="mode === 'Feature Requests'">
        <template #title>Enhancements and Feature Requests</template>
        <AppSkeleton v-if="loading" loading label="Loading feature requests">
            <div v-for="item in placeholders" :key="item.id" class="left-aligned">
                <EnhancementItem :enhancement="item" />
            </div>
        </AppSkeleton>
        <div
            v-else-if="filtered.length > 0"
            v-for="enhancement in filtered"
            :key="enhancement.id"
            class="left-aligned"
        >
            <EnhancementItem :enhancement="enhancement" />
        </div>
        <div v-else class="left-aligned">
            <div class="container">
                <span class="title">
                    No known enhancements or feature requests at this time. If
                    you have any ideas for new features, please let us know!
                </span>
            </div>
        </div>
    </RoundedContainer>
</template>

<script setup lang="ts">
import type { GitHubIssue } from "~/types/GitHubIssue";
import { computed, onMounted, ref } from "vue";
import { AppSkeleton, Dropdown, RoundedContainer, TextField } from "@origami-systems/ui";
import BugItem from "./BugItem.vue";
import EnhancementItem from "./EnhancementItem.vue";
import { getEnhancements } from "@utils/GetEnhancements";
import { getIssues } from "@utils/GetIssues";

const mode = ref<"Issues" | "Feature Requests">("Issues");
const status = ref<"Open" | "Closed">("Open");
const search = ref<string>("");

const issues = ref<GitHubIssue[]>([]);
const loading = ref(true);
const placeholders = [1, 2, 3].map(
    (id) =>
        ({
            id,
            number: id,
            title: "Loading an item from the tracker",
            state: "open",
            html_url: "#",
            labels: [],
            body: "",
            state_reason: "",
        }) satisfies GitHubIssue,
);
const enhancements = ref<GitHubIssue[]>([]);

const filtered = computed<GitHubIssue[]>(() => {
    let result: GitHubIssue[] = [];
    if (mode.value === "Issues") {
        result = issues.value;
    } else {
        result = enhancements.value;
    }

    result = result.filter((u) => u.state == status.value.toLowerCase());

    if (search.value.trim() !== "") {
        result = result.filter((u) =>
            u.title.toLowerCase().includes(search.value.toLowerCase().trim()),
        );
    }
    return result;
});

onMounted(async () => {
    const [issueData, enhancementData] = await Promise.all([getIssues(), getEnhancements()]);
    issues.value = issueData;
    enhancements.value = enhancementData;
    loading.value = false;
});
</script>

<style scoped>
.container {
    text-align: center;
}

.settings {
    width: 100%;
    max-width: 700px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    align-items: center;
    justify-items: center;
    transition: all 0.3s ease;
}

@media (max-width: 720px) {
    .settings {
        grid-template-columns: repeat(2, 1fr);
    }
    .search {
        grid-column: span 2;
    }
}
@media (max-width: 460px) {
    .settings {
        grid-template-columns: 1fr;
    }
    .settings .search {
        grid-column: span 1;
    }
}
</style>
