<template>
    <form @submit.prevent class="form">
        <TextField
            v-model="name"
            label="Name"
            placeholder="Enter your name"
            autocomplete="name"
            required
        />
        <EmailField
            v-model="email"
            label="Email Address"
            placeholder="Enter your email"
            required
        />
        <TextField
            v-model="organization"
            label="Organization"
            placeholder="Your company, school, or group"
            autocomplete="organization"
            required
        />
        <Field
            label="How did you hear about us?"
            required
            full-width
            v-slot="field"
        >
            <Dropdown
                :id="field.id"
                v-model="hear"
                :options="howDidYouHearAboutUsOptions"
                width="100%"
                required
            />
        </Field>
        <TextField
            v-if="hear === 'Other'"
            v-model="howDidYouHearAboutUs"
            label="Please specify"
            placeholder="Tell us where you heard about us"
            required
            stacked
            full-width
        />
        <TextArea
            v-model="question"
            label="What would you like to know more about?"
            placeholder="Tell us what interests you or any questions you have"
            stacked
            full-width
        />
        <input
            type="text"
            v-model="hp_field"
            name="hp_field"
            autocomplete="off"
            tabindex="-1"
            aria-hidden="true"
            style="display: none"
        />
        <AppSubmitButton @click="submit" primary :disabled
            >Send Message</AppSubmitButton
        >
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
    AppSubmitButton,
    Dropdown,
    EmailField,
    Field,
    TextArea,
    TextField,
    useNotifications,
} from "@origami-systems/ui";
import { SubmitContact } from "@utils/SubmitContact";

const hp_field = ref("");
const name = ref("");
const email = ref("");
const organization = ref("");
const howDidYouHearAboutUsOptions = [
    "Website",
    "Social Media",
    "Friend or Colleague",
    "Advertisement",
    "Other",
];
const hear = ref("Website");
const howDidYouHearAboutUs = ref("");
const question = ref("");
const notifications = useNotifications();

const disabled = computed(
    () =>
        !name.value ||
        !email.value ||
        !organization.value ||
        !hear.value ||
        (hear.value === "Other" && !howDidYouHearAboutUs.value),
);

const submit = async (done: () => void) => {
    try {
        if (!name.value || !email.value || !organization.value || !hear.value) {
            notifications.error("Please fill out all required fields.");
            return;
        }
        if (hp_field.value !== "") {
            // Honeypot field filled out, likely a bot
            notifications.error("Submission failed. Please try again.");
            return;
        }
        const hearValue =
            hear.value === "Other" ? howDidYouHearAboutUs.value : hear.value;
        const result = await SubmitContact(
            name.value,
            email.value,
            organization.value,
            hearValue,
            question.value.trim() === "" ? undefined : question.value.trim(),
        );
        if (result) {
            notifications.success(
                "Your message has been sent successfully. We will get back to you shortly.",
            );
            hp_field.value = "";
            name.value = "";
            email.value = "";
            organization.value = "";
            hear.value = "Website";
            howDidYouHearAboutUs.value = "";
            question.value = "";
        }
    } finally {
        done();
    }
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
</style>
