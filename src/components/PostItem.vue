<template>
    <div class="post">
        <div>
            {{ post.id }}
            <div><strong>Название поста: </strong>{{ post.title }} </div>
            <div><strong>Описание поста: </strong>{{ post.body }} </div>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)" class="post__delBtn">Открыть</my-button>
            <my-button @click="delPost" class="post__delBtn">Удалить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    methods: {
        delPost() {
            this.$emit('remove', this.post)
        }
    }
}
</script>
<style lang="scss" scoped>
.post {
    padding: 15px;
    border: 3px solid orange;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__delBtn {
        color: red;
        display: flex;
    }
}
</style>