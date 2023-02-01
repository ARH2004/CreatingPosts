<template>
    <div class="link">
        <h1>Навигация по приложению</h1>
        <router-link to="/" class="link__router">Главная</router-link>
        <router-link to="/posts" class="link__router">Посты</router-link>
        <router-link to="/about" class="link__router">О приложении</router-link>
        <router-link to="/store" class="link__router">Store</router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.link {
    display: flex;
    flex-direction: column;
    padding-top: 20px;

    &__router {
        color: red;
        text-decoration: none;
        font-size: 18px;
        padding: 20px 0px;
    }
}
</style>