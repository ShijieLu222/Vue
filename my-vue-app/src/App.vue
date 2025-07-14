<script>
export default {
  name: 'App',
};
</script>

<template>
  <div id="app">
    <h1>场地管理系统</h1>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#app h1 {
  text-align: center;
  margin: 20px 0;
  color: #1890ff;
  font-size: 28px;
  font-weight: 600;
}

/* 重置默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
