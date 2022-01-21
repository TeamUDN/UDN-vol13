<template>
  <div class="home">
    <!--<h1>This is a home page</h1>
    <h2>chart sample</h2>-->
    <div class="canvasArea">
      <Chart canvas-label-type="date" label-end-num="9"></Chart>
      <Chart canvas-label-type="time" label-end-num="15"></Chart>
      <Chart canvas-label-type="time" label-end-num="30"></Chart>
    </div>
  <div>
    <test2></test2>
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
import test2 from '../components/test'
export default{
   name: 'home',
   components: {
      test2
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
