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
      startNum: 0,
      chart: null
    }
  },
  methods: {
    labelCheck () {
      this.labelArr = []
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
      var dataArr0 = []
      var dataArr1 = []
      var dataArr2 = []
      var dataArr3 = []
      var dataArr4 = []
      var dataArr5 = []
      var dataArr6 = []
      var pink0 = 0
      var pink1 = 0
      var pink2 = 0
      var pink3 = 0
      var pink4 = 0
      var pink5 = 0
      var pink6 = 0
      var purple0 = 0
      var purple1 = 0
      var purple2 = 0
      var purple3 = 0
      var purple4 = 0
      var purple5 = 0
      var purple6 = 0
      var yellow0 = 0
      var yellow1 = 0
      var yellow2 = 0
      var yellow3 = 0
      var yellow4 = 0
      var yellow5 = 0
      var yellow6 = 0
      var blue0 = 0
      var blue1 = 0
      var blue2 = 0
      var blue3 = 0
      var blue4 = 0
      var blue5 = 0
      var blue6 = 0
      var green0 = 0
      var green1 = 0
      var green2 = 0
      var green3 = 0
      var green4 = 0
      var green5 = 0
      var green6 = 0
      switch (this.canvasLabelType) {
        case 'date':
          break
        case 'time':
          var today = this.searchDateArr[2]
          var yesterday = today - 1
          await db.collection('logs').where('date.year', '==', this.searchDateArr[0]).where('date.month', '==', this.searchDateArr[1]).where('date.day', 'in', [today, yesterday])
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                var test = '(this.startNum <= doc.data().date.hour) && (doc.data().date.hour <= this.searchDateArr[3])'
                if (test) {
                  switch (doc.data().date.hour) {
                    case this.labelArr[0]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink0++
                          break
                        case 2:
                          purple0++
                          break
                        case 3:
                          yellow0++
                          break
                        case 4:
                          blue0++
                          break
                        case 5:
                          green0++
                          break
                      }
                      break
                    case this.labelArr[1]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink1++
                          break
                        case 2:
                          purple1++
                          break
                        case 3:
                          yellow1++
                          break
                        case 4:
                          blue1++
                          break
                        case 5:
                          green1++
                          break
                      }
                      break
                    case this.labelArr[2]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink2++
                          break
                        case 2:
                          purple2++
                          break
                        case 3:
                          yellow2++
                          break
                        case 4:
                          blue2++
                          break
                        case 5:
                          green2++
                          break
                      }
                      break
                    case this.labelArr[3]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink3++
                          break
                        case 2:
                          purple3++
                          break
                        case 3:
                          yellow3++
                          break
                        case 4:
                          blue3++
                          break
                        case 5:
                          green3++
                          break
                      }
                      break
                    case this.labelArr[4]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink4++
                          break
                        case 2:
                          purple4++
                          break
                        case 3:
                          yellow4++
                          break
                        case 4:
                          blue4++
                          break
                        case 5:
                          green4++
                          break
                      }
                      break
                    case this.labelArr[5]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink5++
                          break
                        case 2:
                          purple5++
                          break
                        case 3:
                          yellow5++
                          break
                        case 4:
                          blue5++
                          break
                        case 5:
                          green5++
                          break
                      }
                      break
                    case this.labelArr[6]:
                      switch (doc.data().btnType) {
                        case 1:
                          pink6++
                          break
                        case 2:
                          purple6++
                          break
                        case 3:
                          yellow6++
                          break
                        case 4:
                          blue6++
                          break
                        case 5:
                          green6++
                          break
                      }
                      break
                  }
                }
                dataArr0 = []
                dataArr0.push(pink0, purple0, yellow0, blue0, green0)

                dataArr1 = []
                dataArr1.push(pink1, purple1, yellow1, blue1, green1)

                dataArr2 = []
                dataArr2.push(pink2, purple2, yellow2, blue2, green2)

                dataArr3 = []
                dataArr3.push(pink3, purple3, yellow3, blue3, green3)

                dataArr4 = []
                dataArr4.push(pink4, purple4, yellow4, blue4, green4)

                dataArr5 = []
                dataArr5.push(pink5, purple5, yellow5, blue5, green5)

                dataArr6 = []
                dataArr6.push(pink6, purple6, yellow6, blue6, green6)

                this.dataArr = []
                this.dataArr.push(dataArr0, dataArr1, dataArr2, dataArr3, dataArr4, dataArr5, dataArr6)
              })
            })
          break
      }
    },
    async renderChart () {
      this.labelCheck()
      await this.dataCount()
      // console.log(this.dataArr)
      // const ctx = document.getElementById('canvas')
      const ctx = this.$el
      if (this.chart) {
        this.chart.destroy()
      }
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          // labels: ['赤', '青', '黄色', '緑', '紫', '橙'],
          labels: this.labelArr,
          datasets: [{
            label: '😎 いい感じ  ',
            // data: [12, 19, 3, 5, 2, 3, 7],
            data: [this.dataArr[0][0], this.dataArr[1][0], this.dataArr[2][0], this.dataArr[3][0], this.dataArr[4][0], this.dataArr[5][0], this.dataArr[6][0]],
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
            // data: [8, 10, 2, 4, 1, 6, 10],
            data: [this.dataArr[0][1], this.dataArr[1][1], this.dataArr[2][1], this.dataArr[3][1], this.dataArr[4][1], this.dataArr[5][1], this.dataArr[6][1]],
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
            // data: [2, 5, 6, 2, 8, 3, 1],
            data: [this.dataArr[0][2], this.dataArr[1][2], this.dataArr[2][2], this.dataArr[3][2], this.dataArr[4][2], this.dataArr[5][2], this.dataArr[6][2]],
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
            // data: [5, 1, 2, 9, 3, 6, 13],
            data: [this.dataArr[0][3], this.dataArr[1][3], this.dataArr[2][3], this.dataArr[3][3], this.dataArr[4][3], this.dataArr[5][3], this.dataArr[6][3]],
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
            // data: [1, 10, 3, 5, 2, 9, 14],
            data: [this.dataArr[0][4], this.dataArr[1][4], this.dataArr[2][4], this.dataArr[3][4], this.dataArr[4][4], this.dataArr[5][4], this.dataArr[6][4]],
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
