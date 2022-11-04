<template>
    <div>
        <!-- Streak Hero -->
        <div class="p-12 grid grid-cols-8 items-center">
            <div class="pr-12 border-r-2 col-span-5 flex flex-col gap-3">
                <h1 class="text-xl font-bold">Hello, Max!</h1>
                <p>Finish, at least, 2 projects a week to start a streak!</p>
                <div class="flex items-center gap-4">
                    <i class="fa-solid fa-bolt text-2xl text-yellow-300"></i>

                    <div class="w-full bg-gray-300 rounded-full h-2.5">
                        <!-- Adjust width for progress -->
                        <div
                            class="bg-blue-600 h-2.5 rounded-full"
                            style="width: 0%"
                        ></div>
                    </div>

                    <span class="font-medium text-xl">0</span>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-6 pl-12 col-span-3">
                <div
                    class="flex flex-col items-center"
                    v-for="(i, index) in 4"
                    :key="index"
                >
                    <h3>Week {{ index + 1 }}</h3>
                    <i class="fa-solid fa-bolt text-2xl text-gray-300"></i>
                </div>
            </div>
        </div>
        <div class="p-12 pt-0 flex flex-col gap-4" v-for="i in 2" :key="i">
            <h2 class="text-xl font-medium">Continue your Project</h2>
            <div class="grid grid-cols-3 gap-6">
                <div
                    class="border p-4 rounded w-fit flex flex-col gap-1"
                    v-for="i in 3"
                    :key="i"
                >
                    <div class="w-64 h-32 bg-red-400 rounded">img</div>
                    <ul class="flex gap-3">
                        <li>Human Anatomy</li>
                        <li>Introduction</li>
                    </ul>
                    <h3 class="text-lg font-medium">Human Respiratory 1</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>