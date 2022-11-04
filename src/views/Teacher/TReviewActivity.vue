<template>
    <div class="p-12 px-36">
        <div class="flex flex-col gap-4">
            <div
                class="
                    border
                    p-4
                    px-8
                    flex
                    justify-between
                    items-center
                    rounded
                "
                v-for="i in 3"
                :key="i"
            >
                <div class="flex gap-4">
                    <h1 class="font-bold">Pending</h1>
                    <p class="text-red-400 font-medium">467</p>
                </div>

                <div
                    class="
                        w-8
                        h-8
                        bg-slate-200
                        rounded-full
                        flex
                        justify-center
                        items-center
                    "
                >
                    <i class="fa-solid fa-plus"></i>
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