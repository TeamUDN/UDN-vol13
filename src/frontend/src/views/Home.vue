<template>
  <div class="home">
    <div class="allChartArea">
      <div class="chartArea">
        <p>全体</p>
        <div>
          <Chart canvas-label-type="date" label-end-num="9"></Chart>
        </div>
      </div>
      <div class="chartArea">
        <p>チーム</p>
        <div>
          <Chart canvas-label-type="time" label-end-num="15"></Chart>
        </div>
      </div>
      <div class="chartArea">
        <p>個人</p>
        <div>
          <Chart canvas-label-type="time" label-end-num="30"></Chart>
        </div>
      </div>
    </div>
    <div class="tabArea">
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

<style lang="scss" scoped>
.home {
  display: flex;
}
.allChartArea {
  width: 75%;
  display: flex;
  flex-direction: column;
}
.chartArea{
  &:nth-child(even){
    background-color: #FFEAEF;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 4rem 0;
  p{
    font-size: 1.7rem;
  }
  div {
    width: 50rem;
  }
}
.tabArea {
  width: 25%;
  background-color: gray;
}
</style>
