# vue-search
tab标签页
## install
NPM
```
npm install @nat/vue-tabs
```
## 用法
```
<template lang="html">
     <tabs active-index="1" @clicked="handleClick">
        <tab name="tab1">
            <p>
                这是一个例子这是一个例子这是一个例子这是一个例子
                这是一个例子这是一个例子这是一个例子这是一个例子
                这是一个例子这是一个例子这是一个例子这是一个例子
                这是一个例子这是一个例子这是一个例子这是一个例子
            </p>
        </tab>
        <tab name="tab2">这是tab2</tab>
        <tab name="tab3" :isDisabled="true">这是tab3</tab>
    </tabs>
</template>
```
```
<script>
    import {VueTabs, VueTab} from '@nat/vue-tabs';
     export default {
            name: 'ProjectFeatures',
            components: {
                VueTabs,
                VueTab
            },
            methods: {
                handleClick (value) {
                    console.log('selected', value);
                }
            }
        };
</script>
```
也可以这样注册
```
import VueTabs from '@nat/vue-tabs';
Vue.use(VueTabs);
```

## API
#### props
##### tabs
属性 | 说明 | 类型 | 默认值
---|---|---|---
activeIndex | 激活的标签页的索引 | [string, Number] | 0 
##### tab
属性 | 说明 | 类型 | 默认值
---|---|---|---
name | 标签名称 | string | 空 
isDisabled | 是否禁用 | boolean | false
#### event
##### tabs
名称 | 说明 | 参数值
---|---|---
clicked | 标签页点击事件 | 当前被点击的标签页的索引（0,1,2...） 

## 启动
```
npm run dev
```
## 编译
```
npm run build-lib
```
