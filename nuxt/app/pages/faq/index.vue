<template>
    <LargeTitleText>Frequently<br>Asked Questions</LargeTitleText>
    <div class="items">
        <div class="faq-items" v-for="(section, index) in allQuestions" :key="index">
            <DisclosureGroup :label="section.name">
                <div class="faq-item" v-for="(item, index) in section.questions" :key="index">
                    <h3 class="question">{{ item.q }}</h3>
                    <p class="answer">{{ item.a }}</p>
                </div>
            </DisclosureGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
interface answers {
    name: string,
    questions: { q: string, a: string }[]
}

const allQuestions = ref<answers[]>([
])
</script>

<style lang="css" scoped>
.items {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
    width: 80%;
}

.faq-item {
    text-align: left;

    .question {
        color: var(--text-0)
    }

    .answer {
        margin-left: 10px;
        color: var(--text-1)
    }
}
</style>
