<template>
    <div class="tabs-container">
        <ul class="flex-box tabs">
            <li v-for="(item,index) in tabs" class="flex-item tabs-item" @click="handleTabClick(index)"><span class="tab"><span class="text" :class="{active: currIndex == index}">{{item.name}}</span><span class="tab-active" v-show="currIndex == index"></span></span></li>
        </ul>
        <div class="tab-content-container">
            <slot/>
        </div>
    </div>

</template>
<script>
    import './common/css/reset.css';
    export default {
        name: 'tabs',
        data() {
            return {
                currIndex: 0,
                tabs: []
            };
        },
        props: {

        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            handleTabClick (index) {
                this.currIndex = index;
                this.$emit('tab', index);
                this.tabs.forEach((tab, index) => {
                    tab.isActiveTab = (this.currIndex == index);
                });
            }
        }
    };
</script>
<style lang="less" scoped>
    .flex-box {
        display: flex;
    }
    .flex-item {
        flex: 1;
    }

    .tabs-container {
        width: 100%;
        border-radius: 12px 12px 0px 0px;
        background: white;

        .tabs {
            padding: 0 27px;
            height: 45px;
            line-height: 45px;
            box-sizing: border-box;
            .tabs-item {
                text-align: center;
                font-size: 16px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);

                .tab {
                    display: inline-block;
                    height: 100%;

                    .text {
                        display: block;
                        height: 41px;
                    }

                    .active {
                        font-size: 16px;
                        font-weight: 500;
                        color: rgba(30, 30, 30, 1);
                    }

                    .tab-active {
                        display: block;
                        width: 100%;
                        height: 4px;
                        background: rgba(255, 221, 35, 1);
                        border-radius: 10px;
                    }
                }
            }
        }
    }
</style>
