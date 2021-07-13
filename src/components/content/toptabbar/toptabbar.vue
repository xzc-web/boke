<template>
  <div class="toptabbar">
    <div class="toptabbar-left">
      <img src="~assets/img/logo.jpg" alt />
      <a href>KaKa.X</a>
      <!-- <div class="wenzhi"></div> -->
    </div>
    <div class="toptabbar-center">
      <div class="center">
        <img src="~assets/img/logo.jpg" alt />
        <input type="text" name id />
      </div>
    </div>
    <div class="toptabbar-right">
      <ul>
        <li class="toptabbar-li" @click.stop="pathclickz">
          <img src="~assets/img/logo.jpg" alt />
          <span>
            <a href>主页</a>
          </span>
        </li>
        <li class="arrow-r toptabbar-li">
          <div class="arrow-yd">
            <span>
              <a href>分类</a>
            </span>
            <ul class="arrow-f">
              <li>
                <a href>html+css</a>
              </li>
              <li @click.stop="pathclickv">
                <a href>javaScript</a>
              </li>
              <li @click.stop="pathclickc">
                <a href>vue.js</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="toptabbar-li">
          <span>
            <a href>标签</a>
          </span>
        </li>
        <li class="arrow-r toptabbar-li">
          <div class="arrow-yd">
            <span>
              <a href>工具箱</a>
            </span>
            <ul class="arrow-g">
              <li>
                <a href>在线ps</a>
              </li>
              <li>
                <a href>奶油快传</a>
              </li>
              <li>
                <a href>编程语言排行榜</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="arrow-r toptabbar-li">
          <div class="arrow-yd">
            <span>
              <a href>项目</a>
            </span>
            <ul class="arrow-x">
              <li>
                <a href>Shopping购物电脑端</a>
              </li>
              <li>
                <a href>仿网易云</a>
              </li>
              <li>
                <a href>用vue开发的手机端购物网站</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="toptabbar-li">
          <span>
            <a href>时间线</a>
          </span>
        </li>
        <li class="arrow-r toptabbar-li">
          <div class="arrow-yd">
            <span>
              <a href>关于</a>
            </span>
            <ul class="arrow-y">
              <li>
                <a href>关于我</a>
              </li>
              <li>
                <a href>简历</a>
              </li>
              <li>
                <a href>GitHub</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "toptabbar",
  data() {
    return {
      arrow: false,
      path: "/vue",
      pathh: "/javascript",
      paths: "/home"
    };
  },
  computed: {
    // arrow-yd.setAttribute('index', i)
  },
  methods: {
    pathclickc() {
      this.$router.replace({
        path: "/cfication/vue",
        query: {
          number: 1
        }
      });
    },
    pathclickv() {
      this.$router.replace({
        path: "/cfication/javascript",
        query: {
          number1: 2
        }
      });
    },
    pathclickz() {
      this.$router.replace(this.paths);
    }
  }
};
</script>

<style scoped>
.toptabbar {
  height: 60px;
  width: 100%;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid rgb(212, 207, 207);
  position: fixed;
  top: 0;
  z-index: 999;
}
.toptabbar .toptabbar-left {
  position: absolute;
  height: 50px;
  width: 200px;
  left: 40px;
  top: 5px;
  line-height: 50px;
}
.toptabbar .toptabbar-left img {
  height: 100%;
  border-radius: 50%;
  margin-bottom: 12px;
  /* padding-right: 20px; */
}
.toptabbar .toptabbar-left a {
  font-size: 25px;
  display: inline-block;
  padding-left: 20px;
}
.toptabbar .toptabbar-center {
  height: 60px;
  position: absolute;
  width: 400px;
  left: 900px;

  /* top: 10px; */
}
.toptabbar .toptabbar-center .center {
  width: 250px;
  height: 40px;
  border: 2px solid skyblue;
  margin-top: 10px;
  border-radius: 20px;
  /* line-height: 40px; */
}
.toptabbar .toptabbar-center .center img {
  height: 100%;
  border-radius: 20px;
  /* position: relative; */
  /* top: -1.5px; */
}
.toptabbar .toptabbar-center .center input {
  width: 180px;
  height: 30px;
  padding-left: 5px;
  /* margin-top: 2px; */
  position: relative;
  top: 1.5px;
}
.toptabbar .toptabbar-right {
  height: 40px;
  width: 650px;
  position: absolute;
  right: 20px;
  /* left: 1200px; */
  margin-top: 10px;
}
.toptabbar .toptabbar-right ul {
  height: 40px;
  line-height: 40px;
}
.toptabbar .toptabbar-right ul .toptabbar-li {
  float: left;
  list-style: none;
  padding-left: 40px;
  height: 30px;
  line-height: 30px;
}
.toptabbar .toptabbar-right ul .toptabbar-li img {
  height: 70%;
  padding-right: 5px;
  position: relative;
  top: -2px;
}
.toptabbar .toptabbar-right ul .toptabbar-li a {
  /* position: relative;
  top: -4px; */
  text-decoration: none;
  font-size: 16px;
}
.toptabbar .toptabbar-right .arrow-r span a:after {
  content: "\e900";
  font-family: "icomoon";
  margin-left: 2px;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-f {
  width: 100px;
  height: 100px;
  position: fixed;
  left: 1270px;
  background-color: #fff;
  border: 1px solid rgb(204, 196, 196);
  display: none;
  /* z-index: 10; */
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-f li {
  height: 33px;
  float: right;
  padding-right: 18px;
  line-height: 33px;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-f li a {
  font-size: 13px;
}
/* 工具箱 */
.toptabbar .toptabbar-right ul .arrow-r .arrow-g {
  width: 130px;
  height: 120px;
  position: fixed;
  left: 1420px;
  background-color: #fff;
  border: 1px solid rgb(204, 196, 196);
  display: none;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-g li {
  height: 40px;
  float: left;
  padding-right: 20px;
  padding-left: 15px;
  line-height: 40px;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-g li a {
  font-size: 13px;
}
/* 项目 */
.toptabbar .toptabbar-right ul .arrow-r .arrow-x {
  width: 130px;
  height: 120px;
  position: fixed;
  left: 1490px;
  background-color: #fff;
  border: 1px solid rgb(204, 196, 196);
  display: none;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-x li {
  height: 40px;
  float: left;
  padding-right: 20px;
  padding-left: 15px;
  line-height: 40px;
  overflow: hidden;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-x li a {
  font-size: 13px;
}
/* 关于 */
.toptabbar .toptabbar-right ul .arrow-r .arrow-y {
  width: 80px;
  height: 100px;
  position: fixed;
  left: 1715px;
  background-color: #fff;
  border: 1px solid rgb(204, 196, 196);
  display: none;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-y li {
  height: 30px;
  float: left;
  padding-right: 20px;
  padding-left: 15px;
  line-height: 40px;
  overflow: hidden;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-y li a {
  font-size: 13px;
}
.toptabbar .toptabbar-right ul .arrow-r .arrow-yd:hover ul {
  display: block;
}
</style>