<template>
    <div class="container">
        <h1>Страница с постами</h1>
        <div class="cont">
            <my-button @click="fetchUsers">Получить пост</my-button>
            <my-button @click="showDialog">Добавить пост</my-button>
        </div>
        <my-dialog v-model:show="dialogVisble" @click="hideDialog">
            <!-- Кусок, который создает посты -->
            <!--  -->
            <PostFrom @create="createPost"></PostFrom>
        </my-dialog>
        <!-- Кусок, который отрисовывает список постов -->
        <PostList @remove="removePost" :posts="posts"></PostList>
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
            posts: [],
            dialogVisble: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisble = false
        },
        removePost(post) {
            this.posts = this.posts.filter(el => el.id !== post.id)
        },
        hideDialog() {
            this.$emit('update:show', false)
        },
        showDialog() {
            this.dialogVisble = true
        },
        async fetchUsers() {
            const f = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const data = await f.json()
            this.posts = data
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

.cont {
    padding: 20px 0px;
}
</style>