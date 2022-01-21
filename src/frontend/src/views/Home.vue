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
      <Btn btn-text="いい感じ" btn-color="pink" icon="&#x1f60e;" ></Btn>
      <Btn btn-text="なにもわからん" btn-color="purple" icon="&#x1f607;" ></Btn>
      <Btn btn-text="できた！！" btn-color="yellow" icon="&#x1f44d;" ></Btn>
      <Btn btn-text="ぴえん" btn-color="blue" icon="&#x1f97a;" ></Btn>
      <Btn btn-text="天才かも…！？" btn-color="green" icon="&#x1f393;" ></Btn>
    </div>
  </div>
</template>

<script>
import Chart from '../components/Chart'
import Btn from '../components/btn_design.vue'

export default {
  name: 'home',
  components: {
    Chart,
    Btn
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.allChartArea {
  width: 75%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar{
    display: none;
  }
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
  height: 100vh;
  overflow: hidden;
  background-color: gray;
}
</style>
