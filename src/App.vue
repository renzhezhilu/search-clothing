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

<style>
#app {
  padding: 10px;
}
/* 格式化 */
html,
body {
  margin: 0;
  padding: 0;
  font-weight: 400;
  user-select: none;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
ul,
li,
table,
tr,
td,
input,
a,
dl,
dt,
dd {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

img {
  vertical-align: top;
  border: none;
}

*,
*:after,
*:before {
  transition: 0.2s ease;
  box-sizing: border-box;
}
</style>
