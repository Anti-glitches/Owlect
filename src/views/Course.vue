<template>
    <div>
        <!-- Courses Hero Section -->
        <div class="flex bg-green-100 p-12 gap-10 flex-col items-start">
            <button>
                <i class="fa-solid fa-chevron-left"></i>Back to Courses
            </button>
            <div class="flex gap-12">
                <div class="flex flex-col gap-5">
                    <h1 class="text-3xl">{{subject.name}}</h1>
                    <p>
                        {{subject.description}}
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
                    <img :src=image class="w-36" />
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
                v-for="content in contentLevel"
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
                    >{{ content.Level }}</span
                >
                <h3 class="text-2xl">{{content.Name}}</h3>
                <p>
                    {{content.Description}}
                </p>
                <!-- Courses Option in one section -->
                <div class="grid grid-cols-3 gap-4">
                    <router-link v-for="topic in topics" :to="'/courses/' + subject.nameSlug + '/' + topic.slug" >
                        <div
                            class="bg-red-500"
                            v-if="topic.contentLevel == content.Level"
                        >
                            <div class="h-36 flex justify-center items-center">
                                <i class="fa-regular fa-image"></i>
                            </div>
                            <div class="p-5 py-3 bg-yellow-100">
                                <h4 class="text-lg">{{topic.name}}</h4>
                                <p class="text-sm">
                                    {{topic.shortDescription}}
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';


export default{
    data() {
        return {
            image: "",
            subject: [],
            contentLevel: [],
            topics: []
        };
    },
    mounted() {
        console.log(this.$route.params);
        const query = `{
            subjectsCollection(where: {nameSlug: "${this.$route.params.courseName}"}){
				items {
						name
                        nameSlug
                        description
                        image{
                            url
                        }
                        contents
				}
		    }
		    topicsCollection(where: {subject: "${this.$route.params.courseName}"}){
		        items{
			        name
                    shortDescription
			        contentLevel
                    slug
		        }
	        }
        }
         `;
        const getData = async () => {
            const res = await fetch("https://graphql.contentful.com/content/v1/spaces/h7anfqe067rx/", {
                method: "POST",
                headers: {
                    Authorization: "Bearer tADicLUUI2k4He69iAlp8jrF-n-4LJrf60S3UJr_uJs",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            }).then(res => res.json()).then(data => {
                this.subject = data.data.subjectsCollection.items[0];
                this.image = data.data.subjectsCollection.items[0].image.url;
                this.contentLevel = data.data.subjectsCollection.items[0].contents;
                this.topics = data.data.topicsCollection.items;
            });
        };
        return getData();
    },
    components: { RouterLink }
}
</script>

<style></style>
