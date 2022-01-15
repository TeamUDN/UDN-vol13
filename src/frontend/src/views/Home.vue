<template>
  <div class="home">
    <h1>This is a home page</h1>
    <h2>chart sample</h2>
    <div class="canvasArea">
      <Chart></Chart>
      <Chart></Chart>
    </div>
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

<style scoped>
.canvasArea {
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
