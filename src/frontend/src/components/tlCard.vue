<template>
  <div class="cardBase">
    <div class="circleAndText">
      <div class="circle"></div>
      <div class="mainText">
        <p class="userName">{{ userId }}</p>
        <p class="message">{{ btnType }}</p>
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
  }
}
</script>

<style scoped>
</style>
