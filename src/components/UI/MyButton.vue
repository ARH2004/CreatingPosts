<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style lang="scss">
.btn {
    margin-top: 15px;
    padding: 10px;
    border: 3px solid orange;
    color: rgb(98, 255, 0);
    font-size: 18px;
    background: none;
}
</style>