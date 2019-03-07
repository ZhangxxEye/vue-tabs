# vue-search
加载框
## install
NPM
```
npm install @nat/vue-loader
```
## 用法
```
<template lang="html">
    <div id="project-features">
        <h1 class="title">loading</h1>
        <div class="features">
            <loader ></loader>
        </div>
    </div>
</template>
```
```
<script>
    import loader from '@nat/vue-loader';

    export default {
        components: {
            loader
        }
    };
</script>
```
## API
#### props
属性 | 说明 | 类型 | 默认值
---|---|---|---
text | 加载框中的显示文字 | string | 加载中...
## 启动
```
npm run dev
```
## 编译
```
npm run build-lib
```
