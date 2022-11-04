<template>
    <div class="p-12 px-36 flex flex-col gap-12">
        <div class="border p-8 flex flex-col gap-3 rounded">
            <h1 class="text-2xl font-medium">Hello, Ms. Tatcher!</h1>
            <p class="text-xl">
                Here’s some recap on projects you have reviewed this week:
            </p>
            <div class="flex gap-4 justify-between">
                <div
                    class="text-center p-2 px-4"
                    v-for="(data, i) in date"
                    :key="i"
                >
                    <h3 class="text-lg font-bold">{{ data.day }}</h3>
                    <p class="text-2xl font-black text-red-500">
                        {{ data.projectDone }}
                    </p>
                    <p class="text-sm">projects</p>
                </div>
            </div>
        </div>
        <router-link
            class="border rounded w-fit p-6 flex flex-col items-center"
            to="/teacher/review-activity"
        >
            <img src="/gold-metal.png" alt="" srcset="" />
            <h3 class="text-xl">Project Review Activity</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: [
                {
                    day: "Sunday",
                    projectDone: 26,
                },
                {
                    day: "Moday",
                    projectDone: 12,
                },
                {
                    day: "Tuesday",
                    projectDone: 22,
                },
                {
                    day: "Wednesday",
                    projectDone: 10,
                },
                {
                    day: "Thursday",
                    projectDone: 5,
                },
                {
                    day: "Friday",
                    projectDone: 8,
                },
                {
                    day: "Saturday",
                    projectDone: 30,
                },
            ],
        };
    },
};
</script>

<style>
</style>