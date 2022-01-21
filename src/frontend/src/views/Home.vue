<template>
  <div class="home">
    <!--<h1>This is a home page</h1>
    <h2>chart sample</h2>-->
    <div class="allChartArea">
      <div class="chartArea">
        <p>全体</p>
        <Chart canvas-label-type="date" label-end-num="9"></Chart>
      </div>
      <div class="chartArea">
        <p>チーム</p>
        <Chart canvas-label-type="time" label-end-num="15"></Chart>
      </div>
      <div class="chartArea">
        <p>個人</p>
        <Chart canvas-label-type="time" label-end-num="30"></Chart>
      </div>
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
.allChartArea {
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
