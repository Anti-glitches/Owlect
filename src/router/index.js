import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import CoursesView from "../views/CoursesView.vue";
import HistoryView from "../views/HistoryView.vue";
import HumanAnatomy from "../views/Course.vue";

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
        path: "/courses/human-anatomy",
        name: "courseName",
        component: HumanAnatomy(),
    },
    {
        path: "/courses/human-anatomy/basic-human-anatomy",
        name: "basic-human-anatomy",
        component: BasicHumanAnatomy,
    },
    {
        path: "/history",
        name: "history",
        component: HistoryView,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
