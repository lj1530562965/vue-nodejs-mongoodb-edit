<template>
  <div id="app">
    <img src="./assets/logo.png">111
    <router-view class="main"></router-view>
    <router-view name="title" class="left"></router-view>
    <router-view name="image" class="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .left{
    float: left;
    width: 49%;
    border: 1px solid gray;
  }
  .right{
    float: left;
    width: 49%;
    border: 1px solid gray;
  }
</style>
