<template>
    <div>
        <!-- Topic Hero -->
        <div class="flex bg-slate-50 p-12 px-36 gap-10 flex-col items-start">
            <button @click="$router.go(-1)">
                <i class="fa-solid fa-chevron-left"></i> Back to Course
            </button>
            <div class="flex gap-12">
                <div class="flex flex-col gap-5">
                    <h1 class="text-3xl">{{ topic.name }}</h1>
                    <p>
                        {{ topic.description }}
                    </p>
                </div>
                <div
                    class="
                        rounded
                        border
                        flex flex-col flex-shrink-0
                        w-96
                        h-fit
                    "
                >
                    <video
                        :src="video"
                        type="video/mp4"
                        class="rounded"
                    ></video>
                    <div class="flex justify-between bg-white p-4 rounded">
                        <p>What’s Human Anatomy?</p>
                        <span><i class="fa-solid fa-play"></i></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mid content -->
        <!-- disable for now -->
        <!-- <div v-html="content" class="p-12 flex flex-col gap-6"></div> -->

        <!-- Project Section -->
        <div class="p-12 px-36 flex flex-col gap-6">
            <h1 class="text-3xl font-semibold">Project Time!</h1>
            <p>
                Record your explanation about the following topic, and good
                luck!
            </p>

            <p class="bg-yellow-300 p-6 text-xl text-center rounded">
                {{ topic.projectStatement }}
            </p>

            <div class="grid grid-cols-5">
                <div class="flex flex-col gap-4 col-span-3">
                    <h2 class="text-2xl font-semibold">Instructions</h2>
                    <div v-html="instructions"></div>
                </div>

                <!-- Instructor Profile -->
                <div
                    class="
                        border
                        bg-slate-50
                        flex flex-col
                        gap-3
                        flex-shrink-0
                        w-full
                        rounded
                        col-span-2
                        p-12
                    "
                >
                    <h3 class="text-right text-2xl font-bold italic mb-6">
                        Meet <br />
                        the Tutors!
                    </h3>
                    <img
                        src="/profile-teacher.png"
                        alt="profile teacher"
                        class="w-40 self-center"
                    />
                    <h3 class="text-center text-xl font-semibold">Ms. Lexi</h3>
                    <p class="text-center text-sm px-4">
                        Hello, students! I am gona be your tutor to review your
                        projects!
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-5 gap-8">
                <div class="p-6 border shadow flex flex-col col-span-2 gap-3">
                    <h1 class="text-2xl font-bold">Feedback</h1>
                    <div>
                        <p>Understanding</p>
                        <p>-</p>
                    </div>
                    <div>
                        <p>Understanding</p>
                        <p>-</p>
                    </div>
                    <div>
                        <p>Understanding</p>
                        <p>-</p>
                    </div>

                    <div class="text-right">
                        <p class="p-2 bg-yellow-200 rounded">Overall</p>
                        <p class="p-2">-</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6 col-span-3">
                    <div
                        class="
                            border-2 border-dashed border-indigo-400
                            rounded
                            h-full
                            text-center
                            flex flex-col
                            justify-center
                        "
                    >
                        <i
                            class="
                                fa-solid fa-cloud-arrow-up
                                text-6xl text-indigo-300
                            "
                        ></i>
                        <p>Upload Files</p>
                        <p>Suitable extensions: .mp4, .mp3</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>Not Uploaded</p>
                        <button class="p-2 px-6 bg-red-400 rounded text-white">
                            Submit <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { parse as marked } from "marked";
export default {
    data() {
        return {
            topic: [],
            content: "",
            instructions: "",
            video: "",
        };
    },
    mounted() {
        const query = `{
		    topicsCollection(where: {slug: "${this.$route.params.topicName}"}){
		        items{
			        name
                    description
                    content
                    projectStatement
                    projectInstructions
                    video{
                        url
                    }
		        }
	        }
        }
         `;
        const getData = async () => {
            const res = await fetch(
                "https://graphql.contentful.com/content/v1/spaces/h7anfqe067rx/",
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            "Bearer tADicLUUI2k4He69iAlp8jrF-n-4LJrf60S3UJr_uJs",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    this.topic = data.data.topicsCollection.items[0];
                    this.video = data.data.topicsCollection.items[0].video.url;
                    console.log(this.video);
                    this.content = marked(
                        data.data.topicsCollection.items[0].content
                    );
                    this.instructions = marked(
                        data.data.topicsCollection.items[0].projectInstructions
                    );
                });
        };
        return getData();
    },
    components: { RouterLink },
};
</script>

<style>
</style>