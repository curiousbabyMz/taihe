<template>
  <div class="container flex">
    <div class="logowrap flex">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="circle6"></div>
      <div class="logo">
        <img
          src="../assets/logo.png"
          alt=""
          srcset=""
        >
      </div>
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
  background: #3f65a6;
  padding-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
}
.logowrap {
  width: 400px;
  height: 400px;
  position: relative;
}
.logowrap [class*="circle"] {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-size: cover;
}
.logowrap .circle1 {
  margin: 120px;
  background-image: url("../assets/ll.png");
  animation: circle 3s infinite linear reverse;
}
.logowrap .circle2 {
  margin: 100px;
  background-image: url("../assets/l2.png");
  animation: circle 4s infinite linear;
  transform: rotate(20deg);
}
.logowrap .circle3 {
  margin: 70px;
  background-image: url("../assets/l3.png");
  animation: circle 5s infinite linear;
  transform: rotate(80deg);
}
.logowrap .circle4 {
  margin: 50px;
  background-image: url("../assets/ll.png");
  animation: circle 4s infinite linear reverse;
  transform: rotate(300deg);
}
.logowrap .circle5 {
  margin: 30px;
  background-image: url("../assets/ll.png");
  animation: circle 3s infinite linear;
  transform: rotate(250deg);
}
.logowrap .circle6 {
  margin: 10px;
  background-image: url("../assets/ll.png");
  animation: circle 6s infinite linear reverse;
  transform: rotate(190deg);
}
.logowrap .logo {
  background: #fff;
  border-radius: 50%;
  padding: 30px;
  box-shadow: 0 0 10px 1px #2d4877;
  z-index: 5;
}
.logowrap .logo img {
  width: 80px;
  height: 80px;
}
.logowrap .logo:active img {
  width: 70px;
  height: 70px;
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "Page"
};
</script>

