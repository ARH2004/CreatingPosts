<template>
    <div v-for="post in posts" class="post">
        <div><strong>Название поста:</strong>{{ post.title }} </div>
        <div><strong>Описание поста:</strong>{{ post.body }} </div>
    </div>
</template>
<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.post {
    padding: 15px;
    border: 3px solid orange;
    margin-top: 15px;
}
</style>