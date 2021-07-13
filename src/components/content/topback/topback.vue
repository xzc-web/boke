<template>
  <div class="top" @click="backTop" v-if="btnFlag">
    <img src="~assets/img/tubiao.png" alt />
  </div>
</template>

<script>
export default {
  name: "topback",
  data() {
    return {
      btnFlag: false
    };
  },
  components: {},
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  // destroyed() {
  //   window.removeEventListener("scroll", this.scrollToTop);
  // },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        // 步长
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 20);
    },
    //
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      // console.log(scrollTop);
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style scoped>
.top {
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 100px;
  right: 50px;
  box-shadow: 0px 0px 6px 3px rgb(240, 229, 229);
}
.top img {
  width: 100%;
  height: 100%;
}
</style>