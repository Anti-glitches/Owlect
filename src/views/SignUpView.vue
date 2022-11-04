<template>
    <div class="p-12 px-36 flex gap-40 justify-between">
        <img
            src="/hero-signup.png"
            alt="signup hero"
            class="flex-shrink-0 w-96 h-96"
        />
        <div class="w-full px-12">
            <h1 class="text-3xl font-bold text-gray-700 mb-6">Sign Up</h1>
            <div
                class="
                    flex flex-col
                    gap-4
                    items-center
                    justify-center
                    pb-12
                    border-b-2
                "
            >
                <input
                    type="text"
                    placeholder="Email address"
                    class="rounded p-2 px-3 w-full bg-slate-100"
                />
                <input
                    type="text"
                    placeholder="Password"
                    class="rounded p-2 px-3 w-full bg-slate-100"
                />
                <input
                    type="text"
                    placeholder="Confirm password"
                    class="rounded p-2 px-3 w-full bg-slate-100"
                />
                <button
                    class="
                        p-3
                        px-12
                        rounded-full
                        bg-red-400
                        text-white
                        font-medium
                    "
                >
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>