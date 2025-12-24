<template>
    <LargeTitleText>Products</LargeTitleText>
    <!-- <CardGrid> -->
    <div class="container">
        <Card class="card">
            <NuxtLink to="https://the-house-app.com" target="_blank" rel="noopener noreferrer" class="link">
                <TheHouseAppWordmark class="wordmark" />
            </NuxtLink>
            <section>
                <span class="heading">Key Features</span>
                <ul>
                    <li>Customizable Houses: Create and manage house names, colors, and the number of houses to fit your
                        school’s culture.
                    </li>
                    <li>Instant Recognition: Administrators can quickly award points to students, providing immediate
                        feedback.
                    </li>
                    <li>Announcements: Broadcast important messages to all users for clear communication and
                        transparency.
                    </li>
                    <li>Calendar Management: Create calendars for students, leaders, and administrators to stay
                        organized.
                    </li>
                    <li>Flexible for Any Organization: While built for schools, the app can be tailored for other types
                        of
                        organizations as needed.
                    </li>
                </ul>
            </section>
            <section>
                <NuxtLink to="https://desktop.the-house-app.com/example" target="_blank" rel="noopener noreferrer"
                    class="link">
                    <AppSubmitButton theme="house" primary>Try it out</AppSubmitButton>
                </NuxtLink>
            </section>
        </Card>
        <Card class="card">
            <TheGradesAppWordmark class="wordmark" />
            <section>
                <span class="heading">Comming soon!</span>
            </section>
        </Card>
        <!-- <Card> -->
        <!--     <span class="heading">More comming soon!</span> -->
        <!-- </Card> -->
    </div>
    <!-- </CardGrid> -->
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.wordmark {
    width: 250px;
}

li {
    text-align: left;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    .card {
        width: 100%;
        max-width: 700px;
    }
}

section {
    text-align: left;
    margin-top: 10px;
}

.heading {
    font-weight: bold;
    font-size: 1.2em;
}
</style>
