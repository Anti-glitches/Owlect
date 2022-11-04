import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import CoursesView from "../views/CoursesView.vue";
import HistoryView from "../views/HistoryView.vue";
import CourseTemplate from "../views/CourseView.vue";
import TeacherDashboardView from "../views/Teacher/TDashboardView.vue";

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
        path: "/history",
        name: "history",
        component: HistoryView,
    },
    {
        path: "/teacher/",
        name: "teacher",
        component: TeacherDashboardView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
