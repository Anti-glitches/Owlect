<template>
    <div class="flex justify-between p-5 px-36">
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
        <div class="flex items-center gap-2 relative">
            <div>Hi, Max!</div>
            <i
                class="fa-regular fa-circle-user text-2xl cursor-pointer"
                @click="toggleDropdown"
            ></i>

            <div
                class="
                    w-32
                    h-fit
                    absolute
                    mt-32
                    right-0
                    p-2
                    px-4
                    border
                    shadow
                    rounded
                "
                v-if="dropdownState"
            >
                <ul class="font-medium flex flex-col">
                    <router-link to="/">Student</router-link>
                    <router-link to="/teacher/">Teacher</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const dropdownState = ref(false);

        const toggleDropdown = () => {
            dropdownState.value = !dropdownState.value;
        };

        return {
            dropdownState,
            toggleDropdown,
        };
    },
};
</script>

<style></style>
