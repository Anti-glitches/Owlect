<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Course from "./components/Course.vue";
import TopicTemplate from "./components/TopicTemplate.vue";
import Courses from "./components/Courses.vue";
import { RouterView } from 'vue-router'

export default {
    components: { Navbar, Course, TopicTemplate, Courses },
};
</script>

<style></style>
