<template>
    <div>
        <!-- {{topics}} -->
        <!-- Courses Hero Section -->
<<<<<<< Updated upstream
        <div class="flex bg-green-100 p-12 px-36 gap-10 flex-col items-start">
            <router-link to="/courses"
                ><i class="fa-solid fa-chevron-left"></i> Back to
                Courses</router-link
            >
=======
        <div class="flex bg-green-100 p-12 gap-10 flex-col items-start">
            <button @click="$router.go(-1)">
                <i class="fa-solid fa-chevron-left"></i> 
                Back to Courses
            </button>
>>>>>>> Stashed changes

            <div class="flex gap-12">
                <div class="flex flex-col gap-5">
                    <h1 class="text-3xl">{{ subject.name }}</h1>
                    <p>
                        {{ subject.description }}
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
                    <img :src="image" class="w-36" />
                    <div class="flex gap-4">
                        <div>
                            <h3>{{subject.registered}}</h3>
                            <p>Registered</p>
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
                class="py-0 px-52 flex flex-col gap-3 relative"
                v-for="content in contentLevel"
                :key="content"
            >
                <span
                    class="
                        absolute
                        top-2
                        left-36
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
                <h3 class="text-2xl">{{ content.Name }}</h3>
                <p>
                    {{ content.Description }}
                </p>
                <!-- Courses Option in one section -->
                <div class="grid grid-cols-3 gap-4">
                    <template v-for="topic in topics">
                        <router-link
                            v-if="topic.contentLevel == content.Level"
                            :to="'/courses/' + subject.nameSlug + '/' + topic.slug"
                        >
                            <div
                                class="bg-red-500"
                                
                            >
                                <div class="h-36 flex justify-center items-center">
                                    <img :src="topic.thumbnail.url" class="w-36" />
                                </div>
                                <div class="p-5 py-3 bg-yellow-100">
                                    <h4 class="text-lg">{{ topic.name }}</h4>
                                    <p class="text-sm">
                                        {{ topic.shortDescription }}
                                    </p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    data() {
        return {
            image: "",
            subject: [],
            contentLevel: [],
            topics: [],
        };
    },
    mounted() {
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
                        registered
				}
		    }
		    topicsCollection(where: {subject: "${this.$route.params.courseName}"}){
		        items{
			        name
                    shortDescription
			        contentLevel
                    slug
                    thumbnail{
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
                    this.subject = data.data.subjectsCollection.items[0];
                    this.image =
                        data.data.subjectsCollection.items[0].image.url;
                    this.contentLevel =
                        data.data.subjectsCollection.items[0].contents;
                    this.topics = data.data.topicsCollection.items;
                });
        };
        return getData();
    },
    components: { RouterLink },
};
</script>

<style></style>
