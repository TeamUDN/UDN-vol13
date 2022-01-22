<template>
  <div class="cardBase">
    <div class="circleAndText">
      <div class="circle"></div>
      <div class="mainText">
        <p class="userName">{{ userId }}</p>
        <p class="message" v-html="message"></p>
      </div>
    </div>
  <div class="dateArea">
    <p class="date">{{ year }}/{{ month }}/{{ day }}</p>
    <p class="time">{{ hour }} : {{ minute }}</p>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    userId: {
      type: String,
      required: true
    },
    btnType: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      required: true
    },
    hour: {
      type: Number,
      required: true
    },
    minute: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      message: ''
    }
  },
  mounted: function () {
    this.btnTypeCheck(this.btnType)
  },
  methods: {
    btnTypeCheck (num) {
      switch (num) {
        case 1:
          this.message = '&#x1f60e; いい感じ'
          break
        case 2:
          this.message = '&#x1f607; なにもわからん'
          break
        case 3:
          this.message = '&#x1f44d; できた！！'
          break
        case 4:
          this.message = '&#x1f97a; ぴえん'
          break
        case 5:
          this.message = '&#x1f393; 天才かも…！？'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cardBase {
  width: 17rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  border: 1px solid #e9e9e9;
  box-shadow: 5px 5px 5px #dddddd;
}
.circleAndText {
  width: fit-content;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.circle {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #FFB7C8;
}
.mainText {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  p {
    width: fit-content;
    margin: 0;
  }
}
.userName {
  font-weight: bold;
}
.dateArea {
  width: fit-content;
  display: flex;
  gap: 0.8rem;
  margin: 0 0 0 auto;
  p {
    margin: 0;
    color: #7e7e7e;
    font-size: 0.9rem;
  }
}
</style>
