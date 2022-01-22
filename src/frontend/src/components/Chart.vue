<template>
    <canvas></canvas>
</template>

<script>

// 記事末尾で補足
import Chart from 'chart.js/auto'

export default {
  props: [
    'canvasLabelType',
    'labelEndNum'
  ],
  data () {
    return {
      labelArr: []
    }
  },
  methods: {
    labelCheck () {
      switch (this.canvasLabelType) {
        case 'date':
          var endNumDate = parseInt(this.labelEndNum, 10)
          for (let i = 0; i < 7; i++) {
            this.labelArr.push(endNumDate)
            endNumDate -= 1
          }
          this.labelArr = this.labelArr.reverse()
          break
        case 'time':
          var timeCalcNum = this.labelEndNum
          for (let i = 0; i < 7; i++) {
            this.labelArr.push(timeCalcNum)
            timeCalcNum -= 1
            if (timeCalcNum === -1) {
              timeCalcNum = 23
            }
          }
          this.labelArr = this.labelArr.reverse()
          break
      }
    },
    renderChart () {
      this.labelCheck()
      // const ctx = document.getElementById('canvas')
      const ctx = this.$el
      new Chart(ctx, {
        type: 'line',
        data: {
          // labels: ['赤', '青', '黄色', '緑', '紫', '橙'],
          labels: this.labelArr,
          datasets: [{
            label: '😎 いい感じ  ',
            data: [12, 19, 3, 5, 2, 3, 7],
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
