<template>
    <div>
        <TopMessage />
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Course from "./components/Course.vue";
import TopicTemplate from "./components/TopicTemplate.vue";
import Courses from "./components/Courses.vue";
import { RouterView } from "vue-router";
import TopMessage from "./components/TopMessage.vue";

export default {
    components: { Navbar, Course, TopicTemplate, Courses, TopMessage },
};
</script>,

<style></style>
