<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <transition-group name="post-list">
            <PostItem :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove', post)" />
        </transition-group>
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

.post-list-item {
    display: inline-block;
    margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translate(130px, 90px);
}

.post-list-move {
    transition: transform 0.8s ease;
}
</style>