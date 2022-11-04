<template>
    <div class="p-12">
        <div class="flex flex-col gap-2 mb-12">
            <h1 class="text-2xl">Frequently visited courses</h1>
            <p>Courses you’ve visited recently</p>

            <div class="flex gap-6">
                <div
                    v-for="i in 3"
                    :key="i"
                    class="
                        border
                        shadow
                        rounded
                        flex flex-col
                        gap-3
                        justify-center
                        items-center
                        flex-shrink-0
                        p-8
                        w-fit
                        h-fit
                    "
                >
                    <img src="/tengko.png" class="w-36" />
                    <h2>Human Anatomy</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
