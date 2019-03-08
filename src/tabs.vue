<template>
    <div class="tabs-container">
        <ul class="flex-box tabs">
            <li v-for="(item,index) in tabs" class="flex-item tabs-item" @click="handleTabClick(index)"><span class="tab"><span class="text" :class="{active: currIndex == index, disabled: disabledIndex == index}">{{item.name}}</span><span class="tab-active" v-show="currIndex == index"></span></span></li>
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
                currIndex: this.activeIndex,
                tabs: [],
                disabledIndex: ''
            };
        },
        props: {
            activeIndex: {
                type: [String, Number],
                default: 0
            }

        },
        created() {
            this.tabs = this.$children;
            this.$nextTick(function () {
                this.setActiveTab();
            });
        },
        methods: {
            /**
             * tab点击事件
             * @param index 当前点击tab的序号
             * */
            handleTabClick (index) {
                if (this.disabledIndex == index) return;
                this.currIndex = index;
                this.$emit('clicked', index);
                this.setActiveTab();
            },
            /**
             * 设置tab的显示隐藏
             */
            setActiveTab () {
                this.tabs.forEach((tab, index) => {
                    tab.isActiveTab = (this.currIndex == index);
                    if (tab.isDisabled) {
                        this.disabledIndex = index;
                    }
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
    .disabled{
        color: #cdcdcd;
        cursor: not-allowed !important;
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
