<template>
    <div class="dialog" v-if="show">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
<style lang="scss" scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;

    &__content {
        margin: auto;
        background: white;
        border-radius: 15px;
        min-width: 500px;
        min-height: 250px;
        padding: 20px;
    }
}
</style>