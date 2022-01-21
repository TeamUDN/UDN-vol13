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
      <div class="tabs">
        <input type="radio" id="tab1" name="tab" value="1" v-model="isActive">
        <label  class="tab" for="tab1">
          <p>タイムライン</p>
        </label>
        <input type="radio" id="tab2" name="tab" value="2" v-model="isActive">
        <label class="tab" for="tab2">
          <p>投稿する</p>
        </label>
      </div>
      <div class="contents">
        <div v-if="isActive === '1'">
          タイムライン
          <button @click="getTest">getTest</button>
          <button @click="pushTest">pushTest</button>
        </div>
        <div class="btnArea" v-else-if="isActive === '2'">
          <Btn btn-text="いい感じ" btn-color="pink" icon="&#x1f60e;" ></Btn>
          <Btn btn-text="なにもわからん" btn-color="purple" icon="&#x1f607;" ></Btn>
          <Btn btn-text="できた！！" btn-color="yellow" icon="&#x1f44d;" ></Btn>
          <Btn btn-text="ぴえん" btn-color="blue" icon="&#x1f97a;" ></Btn>
          <Btn btn-text="天才かも…！？" btn-color="green" icon="&#x1f393;" ></Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../components/firebase-env.js'
import Chart from '../components/Chart'
import Btn from '../components/btn_design.vue'
console.log(db.apiTest)

export default {
  name: 'home',
  components: {
    Chart,
    Btn
  },
  data () {
    return {
      isActive: '1'
    }
  },
  methods: {
    getTest () {
      db.collection('test')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().name}`)
            // this.data.push(doc.data().name)
          })
        })
    },
    pushTest () {
      db.collection('test').add({
        name: 'mikan'
      })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
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
  background-color: #ffffff;
  border-left: 1px solid #D5D5D5;
}
.tabs {
  width: 100%;
  height: 8%;
  display: flex;
  .tab {
    width: 50%;
    display: block;
    cursor: pointer;
    border-top: 15px solid #CB99A5;
    background-color: #E8E8E8;
  }
}
.tabs :checked + label {
  border-top: 15px solid #FFB7C8;
  background-color: #ffffff;
}
.contents {
  width: 100%;
  height: 92%;
}
input[type=radio] {
  display: none;
}
.btnArea {
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
}
</style>
