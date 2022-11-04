<template>
    <div class="flex justify-between p-5 px-12">
        <div class="flex gap-10">
            <div class="flex gap-2">
                <img src="/logo.png" alt="logo" class="w-10" />
                <p class="text-xl font-semibold">Owlect</p>
            </div>
            <ul class="flex items-center gap-5 font-medium">
                <router-link to="/">Dashboard</router-link>
                <router-link to="/courses">Courses</router-link>
                <router-link to="/history">History</router-link>
            </ul>
        </div>
        <div class="flex items-center gap-2">
            <div>Hi, Max!</div>
            <i class="fa-regular fa-circle-user text-2xl"></i>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
