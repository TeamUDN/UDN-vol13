<template>
  <div id="app">
    <!--<router-link to="/">home</router-link> |
    <router-link to="/about">about</router-link>-->
    <router-view />
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
  color: #464646;
  /*margin-top: 60px;*/
}
</style>
