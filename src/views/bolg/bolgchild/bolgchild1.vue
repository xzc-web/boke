<template>
  <div class="bolg-xs" @click.stop="pathclickjava">
    <div class="bolg-xs1">
      <a>将本地Vue项目部署服务器学习笔记</a>
    </div>
    <div class="bolg-xs2">
      <p>在本地项目已经搭建完成的情况下，如何将项目发布到服务器？2222</p>
    </div>
    <div class="bolg-xs3">
      <span>KaKa.X</span>
      <span>2021/3/1</span>
      <span>Vue VueProject</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bolgchild1",
  components: {},
  methods: {
    pathclickjava() {
      this.$router.push("/javascript");
    }
  }
};
</script>

<style scoped>
.bolg-xs {
  height: 200px;
  width: 850px;
  padding: 20px 20px;
  cursor: pointer;

  /* border: 1px solid rgb(20, 19, 19);
   */
  box-shadow: 0px 0px 6px 3px rgb(240, 229, 229);
  line-height: 200px;
  /* z-index: -11; */
  /* z-index: 100; */
}
.bolg-xs:hover {
  box-shadow: 0px 0px 5px 5px rgb(240, 229, 229);
}
.bolg-xs .bolg-xs1 {
  line-height: 70px;
  height: 70px;
  width: 600px;
}
.bolg-xs .bolg-xs1 a {
  font-size: 20px;
  font-weight: 1000;
}
.bolg-xs .bolg-xs2 {
  height: 50px;
  width: 600px;
  font-size: 16px;
  border-left: 8px solid #67cc86;
  background-color: rgb(212, 207, 207);
  line-height: 50px;
  padding-left: 30px;
}
.bolg-xs .bolg-xs3 {
  height: 60px;
  width: 600px;
  line-height: 60px;
}
.bolg-xs .bolg-xs3 span {
  display: inline-block;
  height: 50px;
  /* width: 80px; */
  font-size: 16px;
  padding-right: 30px;
}
</style>