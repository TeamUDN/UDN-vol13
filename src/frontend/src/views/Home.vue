<template>
  <div class="home">
    <div class="allChartArea">
      <div class="chartArea">
        <p>全体</p>
        <div>
          <Chart v-if="chartShow" canvas-label-type="time" :search-date-arr="searchDateArr"></Chart>
        </div>
      </div>
      <div class="chartArea">
        <p>チーム</p>
        <div>
          <Chart v-if="chartShow" canvas-label-type="time" :search-date-arr="searchDateArr"></Chart>
        </div>
      </div>
      <div class="chartArea">
        <p>個人</p>
        <div>
          <Chart v-if="chartShow" canvas-label-type="time" :search-date-arr="searchDateArr"></Chart>
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
          <!--タイムライン
          <button @click="getTest">getTest</button>
          <button @click="pushTest">pushTest</button>
          <button @click="whereTest">whereTest</button>-->
          <div v-for="data in getProgressDataArr" :key="data.minute">
            <Card :user-name="data.userName" :btn-type="data.btnType" :year="data.date.year" :month="data.date.month" :day="data.date.day" :hour="data.date.hour" :minute="data.date.minute"></Card>
          </div>
          <!--<div v-for="data in getProgressDataArr" :key="data.minute">
            <p>userID: {{ data.userID }}</p>
            <p>date: {{ data.date.year }}/{{ data.date.month }}/{{ data.date.day }}: {{ data.date.hour }}:{{ data.date.minute }}</p>
            <p>btnType: {{ data.btnType }}</p>
            <hr>
          </div>-->
        </div>
        <div class="btnArea" v-else-if="isActive === '2'">
          <button @click="postProgress(1)">
            <Btn btn-text="いい感じ" btn-color="pink" icon="&#x1f60e;" ></Btn>
          </button>
          <button @click="postProgress(2)">
            <Btn btn-text="なにもわからん" btn-color="purple" icon="&#x1f607;" ></Btn>
          </button>
          <button @click="postProgress(3)">
            <Btn btn-text="できた！！" btn-color="yellow" icon="&#x1f44d;" ></Btn>
          </button>
          <button @click="postProgress(4)">
            <Btn btn-text="ぴえん" btn-color="blue" icon="&#x1f97a;" ></Btn>
          </button>
          <button @click="postProgress(5)">
            <Btn btn-text="天才かも…！？" btn-color="green" icon="&#x1f393;" ></Btn>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../components/firebase.js'
import Chart from '../components/Chart'
import Btn from '../components/btn_design.vue'
import Card from '../components/tlCard.vue'

export default {
  name: 'home',
  components: {
    Chart,
    Btn,
    Card
  },
  data () {
    return {
      isActive: '1',
      userID: '0000',
      userName: 'うどん',
      getProgressDataArr: [],
      chartShow: false,
      searchDateArr: []
    }
  },
  mounted: function () {
    this.searchDateArr = this.getNowDate()
    this.endNum = this.searchDateArr[3]
    this.chartShow = true
    this.getProgress()
    console.log(this.searchDateArr)
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
    },
    whereTest () {
      db.collection('test').where('name', '==', 'udn').get().then(snapShot => {
        snapShot.forEach(doc => {
          console.log(`${doc.id}: ${doc.data().name}`)
        })
      })
    },
    getNowDate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      var dateArr = [year, month, day, hour, minute]
      return dateArr
    },
    postProgress (type) {
      var self = this
      var getNowDate = self.getNowDate()
      db.collection('logs').add({
        userID: self.userID,
        userName: self.userName,
        btnType: type,
        date: {
          year: getNowDate[0],
          month: getNowDate[1],
          day: getNowDate[2],
          hour: getNowDate[3],
          minute: getNowDate[4]
        }
      })
        .then(function () {
          console.log('Document successfully written!')
          self.getProgress()
          self.isActive = '1'
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    getProgress () {
      this.getProgressDataArr = []
      db.collection('logs')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.getProgressDataArr.push(doc.data())
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
/* reset css */
button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

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
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
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
