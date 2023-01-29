<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <PostItem :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove', post)" />
    </div>
    <h3 v-else class="nonePost">Нет постов!</h3>
</template>
<script>
import PostItem from '@/components/PostItem.vue';

export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { PostItem }
}
</script>
<style lang="scss" scoped>
.nonePost {
    font-size: 20px;
    color: red;
}
</style>