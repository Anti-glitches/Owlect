import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import CoursesView from "../views/CoursesView.vue";
import HistoryView from "../views/HistoryView.vue";
import CourseTemplate from "../views/CourseView.vue";
import TopicTemplate from "../views/TopicView.vue";
import TeacherDashboardView from "../views/Teacher/TDashboardView.vue";
import TeacherReviewActivity from "../views/Teacher/TReviewActivity.vue";
import SignUpView from "../views/SignUpView.vue";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: DashboardView,
    },
    {
        path: "/courses",
        name: "courses",
        component: CoursesView,
    },
    {
        path: "/courses/:courseName",
        name: "courseName",
        component: CourseTemplate,
    },
    {
        path: "/courses/:courseName/:topicName",
        name: "topicName",
        component: TopicTemplate,
    },
    {
        path: "/history",
        name: "history",
        component: HistoryView,
    },
    {
        path: "/teacher/",
        name: "teacher",
        component: TeacherDashboardView,
    },
    {
        path: "/teacher/review-activity",
        name: "review activity",
        component: TeacherReviewActivity,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUpView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
