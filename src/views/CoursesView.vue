<template>
    <div class="p-12 px-36">
        <div class="flex flex-col gap-2 mb-12">
            <h1 class="text-2xl">Frequently visited courses</h1>
            <p>Courses you’ve visited recently</p>
            <div class="flex gap-6">
                <router-link
                    v-for="item in items"
                    :key="item"
                    :to="'/courses/' + item.nameSlug"
                >
                    <div
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
                        <img :src="item.image.url" class="w-36" />
                        <h2>{{ item.name }}</h2>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    mounted() {
        const query = `{
                subjectsCollection{
                    items {
                            name
                            nameSlug
                            image{
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
                .then(
                    (data) => (this.items = data.data.subjectsCollection.items)
                );
        };
        return getData();
    },
};
</script>

<style></style>
