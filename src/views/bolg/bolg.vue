<template>
  <div class="bolg">
    <div class="bolg-x">
      <bolgchild class="bolg-xm"></bolgchild>
      <bolgchild1></bolgchild1>
    </div>
    <div class="bolg-g">
      <bolgchildg></bolgchildg>
    </div>
  </div>
</template>

<script>
import bolgchild from "views/bolg/bolgchild/bolgchild";
import bolgchild1 from "views/bolg/bolgchild/bolgchild1";
import bolgchildg from "views/bolg/bolgchild/bolgchildg";
// import music from "components/content/music/music";
export default {
  name: "bolg",
  components: {
    bolgchild,
    bolgchild1,
    bolgchildg
    // music
  }
};
</script>

<style scoped>
.bolg {
  position: relative;
  height: 800px;
  width: 1200px;
  margin: 20px auto;
  /* border: 1px solid; */
  /* background-color: pink; */
  /* box-shadow: 1px 1px 1px 3px rgb(214, 205, 205); */
}
.bolg-x {
  position: absolute;
  height: 500px;
  width: 800px;
  top: 0px;
  left: 0px;
  /* background-color: pink; */
}
.bolg-xm {
  margin-bottom: 40px;
}
.bolg-g {
  position: absolute;
  height: 750px;
  width: 320px;
  top: 0px;
  right: 0px;
  box-shadow: 0px 0px 5px 1px rgb(240, 229, 229);
  /* background-color: pink; */
  /* margin: 20px 20px; */
}
.bolg-g:hover {
  box-shadow: 0px 0px 2px 3px rgb(240, 229, 229);
}
</style>