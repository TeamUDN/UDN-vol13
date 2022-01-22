<template>
    <canvas></canvas>
</template>

<script>

// 記事末尾で補足
import Chart from 'chart.js/auto'
import db from './firebase.js'

export default {
  props: [
    'canvasLabelType',
    'searchDateArr'
  ],
  data () {
    return {
      labelArr: [],
      dataArr: [],
      data0: 0,
      data1: 0,
      data2: 0,
      data3: 0,
      data4: 0,
      data5: 0,
      data6: 0,
      startNum: 0
    }
  },
  methods: {
    labelCheck () {
      switch (this.canvasLabelType) {
        case 'date':
          var endNumDate = this.searchDateArr[2]
          for (let i = 0; i < 7; i++) {
            this.labelArr.push(endNumDate)
            endNumDate -= 1
          }
          this.labelArr = this.labelArr.reverse()
          break
        case 'time':
          var timeCalcNum = this.searchDateArr[3]
          for (let i = 0; i < 7; i++) {
            this.labelArr.push(timeCalcNum)
            timeCalcNum -= 1
            if (timeCalcNum === -1) {
              timeCalcNum = 23
            }
            this.startNum = timeCalcNum + 1
          }
          this.labelArr = this.labelArr.reverse()
          break
      }
    },
    async dataCount () {
      console.log(this.startNum + '〜' + this.searchDateArr[3])
      switch (this.canvasLabelType) {
        case 'date':
          break
        case 'time':
          await db.collection('logs').where('date.year', '==', this.searchDateArr[0]).where('date.month', '==', this.searchDateArr[1]).where('date.day', '==', this.searchDateArr[2])
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                if ((this.startNum <= doc.data().date.hour) && (doc.data().date.hour <= this.searchDateArr[3])) {
                  console.log(doc.data().date.minute)
                  switch (doc.data().date.hour) {
                    case this.labelArr[0]:
                      console.log(this.labelArr[0])
                      this.data0++
                      break
                    case this.labelArr[1]:
                      console.log(this.labelArr[1])
                      this.data1++
                      break
                    case this.labelArr[2]:
                      console.log(this.labelArr[2])
                      this.data2++
                      break
                    case this.labelArr[3]:
                      console.log(this.labelArr[3])
                      this.data3++
                      break
                    case this.labelArr[4]:
                      console.log(this.labelArr[4])
                      this.data4++
                      break
                    case this.labelArr[5]:
                      console.log(this.labelArr[5])
                      this.data5++
                      break
                    case this.labelArr[6]:
                      console.log(this.labelArr[6])
                      this.data6++
                      break
                  }
                }
                this.dataArr = []
                this.dataArr.push(this.data0, this.data1, this.data2, this.data3, this.data4, this.data5, this.data6)
                console.log(this.dataArr)
              })
            })
          break
      }
    },
    async renderChart () {
      this.labelCheck()
      await this.dataCount()
      console.log(this.dataArr)
      // const ctx = document.getElementById('canvas')
      const ctx = this.$el
      new Chart(ctx, {
        type: 'line',
        data: {
          // labels: ['赤', '青', '黄色', '緑', '紫', '橙'],
          labels: this.labelArr,
          datasets: [{
            label: '😎 いい感じ  ',
            // data: [12, 19, 3, 5, 2, 3, 7],
            data: this.dataArr,
            backgroundColor: [
              // pink
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              // pink
              'rgba(255,99,132,1)'
            ],
            borderWidth: 1
          },
          {
            label: '😇 なにもわからん  ',
            data: [8, 10, 2, 4, 1, 6, 10],
            backgroundColor: [
              // purple
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              // purple
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          },
          {
            label: '👍 できた！！  ',
            data: [2, 5, 6, 2, 8, 3, 1],
            backgroundColor: [
              // yellow
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              // yellow
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          },
          {
            label: '🥺 ぴえん  ',
            data: [5, 1, 2, 9, 3, 6, 13],
            backgroundColor: [
              // blue
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              // blue
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          },
          {
            label: '🎓 天才かも…！？',
            data: [1, 10, 3, 5, 2, 9, 14],
            backgroundColor: [
              // green
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              // green
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    }
  },
  mounted () {
    this.renderChart()
  }
}
</script>

<style scoped>
canvas {
  background-color: #ffffff;
}
</style>
