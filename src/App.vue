<template>
    <div class="container">
        <!-- Кусок, который создает посты -->
        <PostFrom @create="createPost"></PostFrom>
        <!--  -->
        <!-- Кусок, который отрисовывает список постов -->
        <PostList :posts="posts"></PostList>
    </div>
</template>
<script>
import PostList from '@/components/PostList.vue'
import PostFrom from '@/components/PostForm.vue'
export default {
    components: {
        PostList,
        PostFrom,
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Название поста-1', body: 'Описание поста-1' },
                { id: 2, title: 'Название поста-2', body: 'Описание поста-2' },
                { id: 3, title: 'Название поста-3', body: 'Описание поста-3' },
            ]
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
        }
    }
}
</script>
<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

form {
    display: flex;
    flex-direction: column;
}

.container {
    padding: 20px;
}
</style>