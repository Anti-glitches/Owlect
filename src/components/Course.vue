<template>
    <div>
        <!-- Courses Hero Section -->
        <div class="flex bg-green-100 p-12 gap-10 flex-col items-start">
            <button>
                <i class="fa-solid fa-chevron-left"></i>Back to Courses
            </button>
            <div class="flex gap-12">
                <div class="flex flex-col gap-5">
                    <h1 class="text-3xl">Human Anatomy</h1>
                    <p>
                        Lörem ipsum framtidsfullmakt. Delig mms:a om räsk. Plav
                        bevis egor övis. Timåpär riviligen. Värdgraviditet
                        metataggar med por därför att fav. Debel öv poddsändning
                        branded content. Parask pararen för att kos. Jimyre
                        mutina. Varat sor. Göbel dang blogg. Gigaren fenydadat
                        gubbploga favenat. Dor nagelprotest tågskryta. Er
                        delingar i höhöng. Sosade. Odellplatta gäktig. Mas
                        nisade som bjästa novis. Boomer redat nesorade.
                        Attribution erat vamägon blåstråle. Pons dadanade
                        vertikal.
                    </p>
                    <button class="p-5 bg-red-400">Button</button>
                </div>
                <div
                    class="
                        border
                        bg-blue-200
                        flex flex-col
                        gap-3
                        justify-center
                        items-center
                        flex-shrink-0
                        border-black
                        p-8
                        w-80
                        h-80
                    "
                >
                    <img src="/tengko.png" class="w-36" />
                    <div class="flex gap-4">
                        <div>
                            <h3>20+</h3>
                            <p>Available Tutors</p>
                        </div>
                        <div>
                            <h3>20+</h3>
                            <p>Available Tutors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Courses List -->
        <div class="flex flex-col gap-12 my-12">
            <div
                class="p-28 py-0 flex flex-col gap-3 relative"
                v-for="(i, index) in 3"
                :key="index"
            >
                <span
                    class="
                        absolute
                        top-2
                        left-12
                        text-xl
                        bg-orange-200
                        w-10
                        h-10
                        flex
                        justify-center
                        items-center
                        rounded-full
                    "
                    >{{ index + 1 }}</span
                >
                <h3 class="text-2xl">Introduction</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore laboriosam veniam iste tenetur et dolorum, nulla,
                    aut, sapiente sed placeat molestiae quae alias.
                </p>
                <!-- Courses Option in one section -->
                <div class="grid grid-cols-3 gap-4">
                    <div
                        class="bg-red-500"
                        v-for="(i, index) in 3"
                        :key="index"
                    >
                        <div class="h-36 flex justify-center items-center">
                            <i class="fa-regular fa-image"></i>
                        </div>
                        <div class="p-5 py-3 bg-yellow-100">
                            <h4 class="text-lg">Basic Human Anatomy</h4>
                            <p class="text-sm">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
