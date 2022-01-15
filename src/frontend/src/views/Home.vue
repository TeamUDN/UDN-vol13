<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h2>chart sample</h2>
    <Chart></Chart>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from '../components/Chart'
export default {
  name: 'home',
  components: {
    Chart
  }
}
</script>
