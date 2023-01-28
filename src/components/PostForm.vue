<template>
    <form @submit.prevent>
        <h3>Создание поста:</h3>
        <input v-model="post.title" class="input" type="text" placeholder="Название поста...">
        <input v-model="post.body" class="input" type="text" placeholder="Описание поста...">
        <button class="btn" @click="createPost">Добавить пост</button>
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
.input {
    width: 100%;
    border: 3px solid orange;
    padding: 10px 15px;
    margin-top: 15px;
}

.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px;
    border: 3px solid orange;
    color: rgb(98, 255, 0);
    font-size: 18px;
    background: none;
}
</style>