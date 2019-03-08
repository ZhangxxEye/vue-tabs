<template>
    <div class="tab-container" v-show="isActiveTab">
        <slot/>
    </div>
    
</template>

<script>
    import './common/css/reset.css';
    export default {
        name: "tab",
        props: {
            name: { required: true },
        },
        data () {
            return {
                isActiveTab: false
            }
        }
    };
</script>

<style scoped>

</style>