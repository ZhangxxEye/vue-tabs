<template>
<div class="loader-container">
    <div class="loader">
        <div class="animation"></div>
        <span class="loader-text" style="font-size: 14px">{{text}}</span>
    </div>
</div>

</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "加载中..."
    }
  }
};
</script>
<style lang="less" scoped>
@keyframes loading {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.8);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg) scale(1);
  }
  50% {
    -webkit-transform: rotate(180deg) scale(0.8);
  }
  100% {
    -webkit-transform: rotate(360deg) scale(1);
  }
}
.loader-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  .loader {
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    padding: 20px 0 5px 0;
    text-align: center;
    .animation {
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border-width: 2px;
      border-style: solid;
      border-image: initial;
      border-color: white white white transparent;
      animation: loading 0.75s linear 0s infinite normal both running;
      -webkit-animation: loading 0.75s linear 0s infinite normal both running;
      background: transparent !important;
      margin-bottom: 5px;
      margin-left: 36px;
    }
    .loader-text {
      color: white;
    }
  }
}
</style>


