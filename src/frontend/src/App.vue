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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
