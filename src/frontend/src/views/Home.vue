<template>
  <div class="home">
    <div class="allChartArea">
      <div class="header">
        <div class="userNameArea">
          <span class="material-icons">account_circle</span>
          <div class="showUserName" v-if="!showInput">
            <p class="userName">{{ userName }}</p>
            <p>さん</p>
          </div>
          <div class="showUserName" v-if="showInput">
            <input type="text" ref="userNameInput" placeholder="名無しさん">
            <p>さん</p>
          </div>
        </div>
        <button @click="showForm" v-if="!showInput"><span class="material-icons">login</span></button>
        <button @click="loginFunc" v-if="showInput"><span class="material-icons">edit</span></button>
        <!--<button @click="localStorageRemove">localStorageRemove</button>-->
      </div>
      <img class="logoImg" src="/static/img/logo.png">
      <div class="chartArea">
        <div>
          <Chart ref="chart1" v-if="chartShow" canvas-label-type="time" :search-date-arr="searchDateArr"></Chart>
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
          <!--<button @click="localStorageTest">localStorageTest</button>
          <button @click="localStorageRemove">localStorageRemove</button>-->
          <!--タイムライン
          <button @click="getTest">getTest</button>
          <button @click="pushTest">pushTest</button>
          <button @click="whereTest">whereTest</button>-->
          <div v-for="data in getProgressDataArr" :key="data.minute">
            <Card :user-name="data.userName" :btn-type="data.btnType" :year="data.date.year" :month="data.date.month" :day="data.date.day" :hour="data.date.hour" :minute="data.date.minute"></Card>
          </div>
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
      userID: '',
      userName: '',
      getProgressDataArr: [],
      chartShow: false,
      searchDateArr: [],
      showInput: false
    }
  },
  mounted: function () {
    this.localStorage()
    this.searchDateArr = this.getNowDate()
    this.endNum = this.searchDateArr[3]
    this.chartShow = true
    this.getProgress()
  },
  methods: {
    localStorage () {
      if (localStorage.getItem('userID')) {
        console.log('2回目以降のアクセスです')
        var userID = localStorage.getItem('userID')
        var userName = localStorage.getItem('userName')
        this.userID = userID
        this.userName = userName
        /*
        db.collection('user').where('userID', '==', this.userID)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.data().userName)
              // this.data.push(doc.data().name)
              this.userName = doc.data().name
            })
          })
        */
      } else {
        console.log('初回アクセスです')
        var createUserID = this.createID(15)
        console.log(createUserID)
        localStorage.setItem('userID', createUserID)
        localStorage.setItem('userName', '名無し')
        this.userID = createUserID
        this.userName = '名無し'
      }
    },
    showForm () {
      this.showInput = true
    },
    loginFunc () {
      this.userName = this.$refs.userNameInput.value
      if (this.userName === '') {
        this.userName = '名無し'
      }
      localStorage.setItem('userName', this.userName)
      this.showInput = false
      /*
      db.collection('user').add({
        userID: this.userID,
        userName: this.userName,
        icon: 1
      })
        .then(function () {
          console.log('Document successfully written!')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      */
    },
    localStorageRemove () {
      localStorage.clear()
    },
    createID (n) {
      var CODE_TABLE = '0123456789' +
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz'
      var r = ''
      for (var i = 0, k = CODE_TABLE.length; i < n; i++) {
        r += CODE_TABLE.charAt(Math.floor(k * Math.random()))
      }
      return r
    },
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
          self.$refs.chart1.renderChart()
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    getProgress () {
      this.getProgressDataArr = []
      db.collection('logs').limit(20)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.getProgressDataArr.push(doc.data())
            this.getProgressDataArr.sort((a, b) => b.date.year - a.date.year || b.date.month - a.date.month || b.date.day - a.date.day || b.date.hour - a.date.hour || b.date.minute - a.date.minute)
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

.material-icons {
  color: #464646;
  font-size: 2rem;
}

.header {
  width: fit-content;
  display: flex;
  gap: 2rem;
  margin: 1.5rem 2rem 0 auto;
}

.userNameArea {
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.showUserName {
  width: fit-content;
  display: flex;
  font-size: 1.1rem;
  align-items: center;
  gap: 0.3rem;
  p {
    margin: 0;
  }
}
.userName {
  font-size: 1.2rem;
  font-weight: bold;
}

.logoImg {
  width: 23rem;
  margin: 0 auto;
}

.home {
  display: flex;
  flex-direction: row;
}
.allChartArea {
  width: 75%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFEAEF;
}
.chartArea{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  div {
    width: 60rem;
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
  margin: 0;
}

/* mobileここから */
@media screen and (max-width: 950px) {
  .home {
    flex-direction: column;
  }
  .logoImg {
    width: 16rem;
    margin: 1rem auto;
  }
  .chartArea{
    padding: 0 0 2rem;
    div {
      width: 21rem;
    }
  }
  .allChartArea {
    width: 100vw;
    height: fit-content;
  }
  .tabArea {
    width: 100vw;
    height: fit-content;
  }
  .btnArea {
    margin: 3rem 0;
  }
}
</style>
