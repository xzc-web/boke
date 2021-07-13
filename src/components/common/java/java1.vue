<template>
  <div class="java1">
    <java2></java2>
  </div>
</template>

<script>
import java2 from "components/common/java/java2.vue";
export default {
  name: "java1",
  data() {
    return {};
  },
  components: {
    java2
  }
};
</script>

<style scoped>
.java1 {
  width: 800px;
  height: 5000px;
  background-color: #fff;
  margin-top: 60px;
  /* position: absolute;
  left: 50%;
  margin-left: -400px; */
  margin: 60px auto;
}
</style>