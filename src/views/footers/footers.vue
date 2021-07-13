<template>
  <div class="footers">
    <div class="footers1">
      <span>
        <i></i>
        <a href>vuepress-theme-reco@1.6.1</a>
      </span>
      <span>
        <i></i>
        <a href>vuepress-theme-</a>
      </span>
      <span>
        <i></i>
        <a href>vuepress- theme-</a>
      </span>
      <span>
        <i></i>
        <a href>@1.6.1</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "footers",
  components: {}
};
</script>

<style scoped>
/* .footer {
  height: 70px;
  width: 100%;
  background-color: pink;
} */
.footers {
  border-top: 1px solid rgb(212, 207, 207);
  width: 100%;
  height: 70px;
  /* background-color: pink; */
  padding-top: 25px;
}
.footers .footers1 {
  height: 20px;
  width: 600px;
  /* background-color: skyblue; */
  margin: auto;
  /* padding-top: 25px; */
}
.footers .footers1 span {
  display: inline-block;
  margin-right: 24px;
}
.footers .footers1 span a {
  color: #3eaf7c;
  font-size: 14px;
  font-weight: 500;
}
</style>
