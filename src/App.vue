<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style lang='scss'>
//格式化
@import "./assets/sass/common/_reset.scss";
@import "./assets/sass/common/_normalize.scss";
@import "./assets/sass/common/_animation.scss";
//图标
@import url("https://at.alicdn.com/t/font_1063021_ggwiar4alcl.css");
@import url("./assets/font/icon.css");
// .iconfont {font-size: inherit;/* 不用默认设置大小font-size: 16px; */}

</style>
