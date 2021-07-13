<template>
  <div class="home1">
    <img src="~assets/img/zuomian.jpg" alt />
    <div class="home1-bule"></div>
    <div class="home1-yellow"></div>
    <div class="home1-red"></div>
    <div class="home1-pink"></div>
  </div>
</template>

<script>
export default {
  name: "home1",
  components: {}
};
</script>

<style scoped>
.home1 {
  height: 900px;
  width: 100%;
  margin-top: 60px;
  position: relative;
  z-index: -100;
}
.home1 img {
  height: 100%;
  width: 100%;
  /* z-index: -100; */
}
@keyframes blued {
  0% {
    transform: translate(0px, 0px);
  }
  50% {
    transform: translate(100%, 30%);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
.home1 .home1-bule {
  height: 50px;
  width: 50px;
  background-color: rgb(25, 12, 216);
  position: absolute;
  left: 40px;
  top: 200px;
  border-radius: 50%;
  /* 动画 */
  /* 名称 时间 次数 */
  animation-name: blued;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
@keyframes yellowd {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.home1 .home1-yellow {
  position: absolute;
  height: 150px;
  width: 150px;
  background-color: yellow;
  top: 600px;
  left: 100px;
  border-radius: 20px;
  /* 动画 */
  transform-origin: 50% 50%;
  animation-name: yellowd;
  animation-duration: 10s;

  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.home1 .home1-pink {
  position: absolute;
  border-top: 50px solid pink;
  border-left: 50px solid pink;
  border-right: 50px solid pink;
  background-color: pink;
  top: 600px;
  left: 1500px;
}
</style>
