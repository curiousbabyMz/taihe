<template>
  <div
    class="container flex"
    :class="{elseAmt:isTurn}"
  >
    <div class="logowrap flex">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
      <div class="circle6"></div>
      <div
        class="logo"
        @click="$emit('logotap')"
        :class="{elseC:isTurn}"
      >
        <img
          :class="{logoAmt:isTurn}"
          src="../assets/logo.png"
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
}
.logowrap .logo {
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px 1px #2d4877;
  z-index: 5;
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
  background-image: url("../assets/ll.png");
  animation: circle 3s 0.5s infinite linear reverse;
  opacity: 0;
}
.logowrap .circle2 {
  background-image: url("../assets/l2.png");
  animation: circle 4s 0.6s infinite linear;
  opacity: 0;
  /* transform: rotate(20deg); */
}
.logowrap .circle3 {
  background-image: url("../assets/l3.png");
  animation: circle 5s 1s infinite linear;
  opacity: 0;
  /* transform: rotate(80deg); */
}
.logowrap .circle4 {
  background-image: url("../assets/ll.png");
  animation: circle 4s 0.3s infinite linear reverse;
  opacity: 0;
  /* transform: rotate(300deg); */
}
.logowrap .circle5 {
  background-image: url("../assets/ll.png");
  animation: circle 3s 0.8s infinite linear;
  opacity: 0;
  /* transform: rotate(250deg); */
}
.logowrap .circle6 {
  background-image: url("../assets/ll.png");
  animation: circle 6s 0.6s infinite linear reverse;
  opacity: 0;
  /* transform: rotate(190deg); */
}
@keyframes circle {
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg);
  }
}
@keyframes opacityOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.elseAmt,
.logowrap .elseC {
  background: #fff;
  box-shadow: none;
  transition: 1s 0.5s ease-in-out;
}
.logoAmt {
  transform: translate(-8rem, -18rem);
  opacity: 0;
  transition: 1s 0.5s ease-in-out;
}

@media screen and (max-width: 480px) {
  html,
  body,
  .container {
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    justify-content: space-around;
  }
  .container {
    flex-direction: column;
  }
  .logowrap {
    width: 25rem;
    height: 25rem;
    position: relative;
  }

  .logowrap .circle1 {
    margin: 9rem;
  }
  .logowrap .circle2 {
    margin: 8.5rem;
  }
  .logowrap .circle3 {
    margin: 7.5rem;
  }
  .logowrap .circle4 {
    margin: 7rem;
  }
  .logowrap .circle5 {
    margin: 6.5rem;
  }
  .logowrap .circle6 {
    margin: 5.8rem;
  }
  .logowrap .logo {
    padding: 1rem;
  }
  .logowrap .logo img {
    width: 3rem;
    height: 3rem;
  }
  .logowrap .logo:active img {
    width: 2.5rem;
    height: 2.5rem;
  }
}
@media screen and (min-width: 480px) {
}
</style>

<script>
export default {
  name: "Page",
  props: ["isTurn"],
  data() {
    return {
      info: this.global.info
    };
  }
};
</script>

