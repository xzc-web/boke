<template>
  <div class="bolgchildg">
    <div class="bolgchildgi">
      <img src="~assets/img/zuomian.jpg" alt />
    </div>
    <div class="bolgchildgc">
      <div class="bolgchildgc1">Category</div>
      <div class="bolgchildgc2">
        <a>Vue</a>
        <span>6</span>
      </div>
      <div class="bolgchildgc3">
        <a>JavaScript</a>
        <span>1</span>
      </div>
    </div>
    <div class="bolgchildgt">
      <div class="bolgchildgt1">Tag</div>
      <div class="bolgchildgt2">
        <span style="background-color:rgb(251,155,95);">All</span>
        <span style="background-color:rgb(225,91,100);">Vue</span>
        <span style="background-color:rgb(244,126,96);">JavaScript</span>
        <span style="background-color:rgb(244,126,96);">VueRouter</span>
        <span style="background-color:rgb(132,155,135);">Vuex</span>
        <span style="background-color:rgb(248,178,106);">VueProject</span>
      </div>
    </div>
    <div class="bolgchildgf">
      <div class="bolgchildgf1">Friend Link</div>
      <div class="bolgchildgf2">
        <div class="bolgchildgf21">
          <span style="backgroundcolor:rgb(132,155,135"></span>
          午后南杂
          <div class="bolgchildgf22">
            <div class="bolgchildgf221">
              <div class="logo">
                <img src="~assets/img/logo.jpg" alt />
              </div>
              <div class="info">when you can,and endure when you must</div>
            </div>
          </div>
        </div>

        <div class="bolgchildgf21">
          <span style="backgroundcolor:rgb(132,155,135"></span>
          午后学习笔记
          <div class="bolgchildgf22">
            <div class="bolgchildgf221">
              <div class="logo">
                <img src="~assets/img/logo.jpg" alt />
              </div>
              <div class="info">when you can,and endure when you must</div>
            </div>
          </div>
        </div>
        <div class="bolgchildgf21">
          <span style="backgroundcolor:rgb(132,155,135)"></span>
          爱爱爱不完
          <div class="bolgchildgf22">
            <div class="bolgchildgf221">
              <div class="logo">
                <img src="~assets/img/logo.jpg" alt />
              </div>
              <div class="info">when you can,and endure when you must</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 700 400
export default {
  name: "bolgchildg",
  components: {}
};
</script>
<style scoped>
.bolgchildg {
  height: 100%;
  width: 100%;
  padding: 15px 15px;
}
.bolgchildg .bolgchildgi {
  height: 250px;
  width: 100%;
  border-bottom: 1px solid rgb(240, 229, 229);
}
.bolgchildg .bolgchildgi img {
  height: 100%;
  width: 100%;
}
/* category */
.bolgchildgc {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid rgb(240, 229, 229);
}
.bolgchildgc .bolgchildgc1 {
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  /* margin-bottom: 20px; */
}
.bolgchildgc .bolgchildgc2 {
  width: 100%;
  height: 45px;
  border-radius: 22.5px;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  line-height: 45px;
  margin-bottom: 20px;
}
.bolgchildgc .bolgchildgc2:hover {
  transform: scale(1.08, 1.08);
}
.bolgchildgc .bolgchildgc2 a {
  font-size: 16px;
  padding-left: 20px;
  padding-right: 190px;
}
.bolgchildgc .bolgchildgc2 span {
  display: inline-block;
  font-size: 17px;
  height: 30px;
  width: 30px;
  background-color: rgb(219, 87, 87);
  border-radius: 20%;
  line-height: 30px;
  text-align: center;
}
.bolgchildgc .bolgchildgc3 {
  width: 100%;
  height: 45px;
  border-radius: 22.5px;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  line-height: 45px;
}
.bolgchildgc .bolgchildgc3:hover {
  transform: scale(1.08, 1.08);
}
.bolgchildgc .bolgchildgc3 a {
  font-size: 16px;
  padding-left: 20px;
  padding-right: 145px;
}
.bolgchildgc .bolgchildgc3 span {
  display: inline-block;
  font-size: 17px;
  height: 30px;
  width: 30px;
  background-color: rgb(219, 177, 87);
  border-radius: 20%;
  line-height: 30px;
  text-align: center;
}
/* tag */
.bolgchildg .bolgchildgt {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid rgb(240, 229, 229);
}
.bolgchildg .bolgchildgt .bolgchildgt1 {
  height: 40px;
  /* width: 100%; */
  font-size: 16px;
  line-height: 40px;
}
.bolgchildg .bolgchildgt .bolgchildgt2 {
  height: 60px;
}
.bolgchildg .bolgchildgt .bolgchildgt2 span {
  display: inline-block;
  height: 25px;
  font-size: 14px;
  margin-right: 15px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  padding: 4px 8px;
  border-radius: 5px;
}
.bolgchildg .bolgchildgt .bolgchildgt2 span:hover {
  transform: scale(1.02, 1.02);
}
/* fvrio */
.bolgchildg .bolgchildgf {
  height: 100px;
}
.bolgchildg .bolgchildgf .bolgchildgf1 {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.bolgchildg .bolgchildgf .bolgchildgf2 {
  height: 120px;
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21 {
  /* height: 120px; */
  position: relative;
  /* width: 100px; */
  height: 20px;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  display: inline-block;
  margin-right: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21:hover .bolgchildgf221 {
  display: block;
  /* box-shadow: 0px 0px 5px 1px pink; */
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21 span {
  display: inline-block;
  height: 7px;
  width: 7px;
  background-color: pink;
  /* padding-left: 10px; */
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21 .bolgchildgf221 {
  height: 100px;
  width: 200px;
  display: flex;
  position: absolute;
  left: -100px;
  top: -100px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  display: none;
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21 .bolgchildgf221 .logo {
  height: 30px;
  width: 50px;
}
.bolgchildg
  .bolgchildgf
  .bolgchildgf2
  .bolgchildgf21
  .bolgchildgf221
  .logo
  img {
  height: 100%;
  width: 100%;
}
.bolgchildg .bolgchildgf .bolgchildgf2 .bolgchildgf21 .bolgchildgf221 .info {
  margin-left: 20px;
  font-size: 14px;
  margin-top: 20px;
}
</style>