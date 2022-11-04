<template>
    <div>
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Course from "./components/Course.vue";
import TopicTemplate from "./components/TopicTemplate.vue";
import Courses from "./components/Courses.vue";

export default {
    components: { Navbar, Course, TopicTemplate, Courses },
    setup() {
        const test = ref(0);
        const query = `{
        
            projectsCollection {
		        items{
			        topic
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
            );

            const data = await res.json();

            console.log(data);

            return data;
        };

        return {
            test,
            getData,
        };
    },
};
</script>

<style></style>
