<template>
    <form @submit.prevent>
        <h3>Создание поста:</h3>
        <my-input v-model.trim="post.title" type="text" placeholder="Название поста..." />
        <my-input v-model.trim="post.body" type="text" placeholder="Описание поста..." />
        <my-button class="add-post" @click="createPost">Добавить пост</my-button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.add-post {
    align-self: end;
}
</style>