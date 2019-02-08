<template>
  <div class="container flex">
    <div class="logo"><img src="../assets/logoall.png" /></div>
    <div class="pic">
      <div class="border">
        <!-- <img src="../assets/图层 6.png"> -->
      </div>
      <div class="picc"><img src="../assets/图层 5.png"></div>
      <div class="border">
        <!-- <img src="../assets/图层 6.png"> -->
        <div class="text">{{info.companyName}}</div>
      </div>
    </div>
    <div class="arrows flex">
      <img
        src="../assets/图层 7.png"
        class="arrow"
      >
      <img
        src="../assets/图层 7.png"
        class="arrow"
      >
      <img
        src="../assets/图层 7.png"
        class="arrow"
      >
      <img
        src="../assets/图层 7.png"
        class="arrow"
      >
      <img
        src="../assets/图层 7.png"
        class="arrow"
      >
    </div>
  </div>
</template>
<style>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background: #fff;
  height: 100%;
  opacity: 0;
  animation: in 0.5s forwards;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
@keyframes in {
  0% {
  }
  100% {
    opacity: 1;
  }
}
.container .logo {
  padding: 10%;
  text-align: left;
}
.container .logo img {
  width: 40%;
}
.container .pic .picc img {
  width: 80%;
  animation: inn 0.5s 1s ease-out forwards;
  opacity: 0;
}
.container .pic .border:nth-of-type(1) {
  background: url("../assets/图层 6.png") 0% / contain no-repeat;
  padding: 5%;
  margin: 5%;
  transform: rotate(180deg);
}
.container .pic .border:nth-of-type(3) {
  background: url("../assets/图层 6.png") 0% / contain no-repeat;
  padding: 5%;
  margin: 5%;
}
.container .pic .border .text {
  color: #3f65a6;
  text-align: right;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  animation: inn 0.5s 1.5s ease-out forwards;
  opacity: 0;
}
@keyframes inn {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
.container .arrows {
  padding: 10%;
  text-align: right;
  flex-direction: row-reverse;
  justify-content: flex-start;
  opacity: 0;
  animation: inn2 2s 2.5s forwards;
}
@keyframes inn2 {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
  }
}
.container .arrows .arrow {
  width: 5%;
  animation: arrowAmt 1.5s ease-in-out infinite;
}
.container .arrows .arrow:nth-of-type(1) {
  animation-delay: 0.2s;
}
.container .arrows .arrow:nth-of-type(2) {
  animation-delay: 0.4s;
}
.container .arrows .arrow:nth-of-type(3) {
  animation-delay: 0.6s;
}
.container .arrows .arrow:nth-of-type(4) {
  animation-delay: 0.8s;
}
.container .arrows .arrow:nth-of-type(5) {
  animation-delay: 1s;
}

@keyframes arrowAmt {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
export default {
  data: function() {
    return {
      info: this.global.info
    };
  }
};
</script>
