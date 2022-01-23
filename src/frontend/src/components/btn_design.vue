<template>
  <div class="btnBase" :class="btnColor">
    <div class="btnTextArea">
      <p class="icon" v-html="icon"></p>
      <p class="btnText">{{ btnText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true
    },
    btnColor: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>
.btnBase {
  width: 15rem;
  height: fit-content;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #dddddd;
  cursor: pointer;
}
.btnTextArea {
  width: fit-content;
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin: 0 auto;
}
.btnText {
  margin: 0;
  font-size: 1.3rem;
}
.icon {
  margin: 0;
  font-size: 2rem;
}
.pink {
  background-color: #FFEAEF;
  border: 1px solid #FFEAEF;
}
.green {
  background-color: #BEFFCD;
  border: 1px solid #BEFFCD;
}
.yellow {
  background-color: #FFF7B7;
  border: 1px solid #FFF7B7;
}
.blue {
  background-color: #C4F6FF;
  border: 1px solid #C4F6FF;
}
.purple {
  background-color: #EFD6FF;
  border: 1px solid #EFD6FF;
}
</style>
