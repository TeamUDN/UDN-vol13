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
      canvasLabel: '',
      labelArr: []
    }
  },
  methods: {
    labelCheck () {
      switch (this.canvasLabelType) {
        case 'date':
          this.canvasLabel = '日'
          var endNumDate = parseInt(this.labelEndNum, 10)
          for (let i = 0; i < 7; i++) {
            this.labelArr.push(endNumDate)
            endNumDate -= 1
          }
          this.labelArr = this.labelArr.reverse()
          break
        case 'time':
          this.canvasLabel = '時'
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
            // label: '得票数',
            label: this.canvasLabel,
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
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
