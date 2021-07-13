<template>
  <div class="javascript">
    <java0></java0>
    <java1></java1>
  </div>
</template>

<script>
import java0 from "components/common/java/java0";
import java1 from "components/common/java/java1";
export default {
  name: "javascript",
  data() {
    return {};
  },
  components: {
    java0,
    java1
  }
};
</script>

<style scoped>
/* ::-webkit-scrollbar {
  width: 4px;
  height: 10px;
  background-color: pink;
} */
.javascript {
  height: 3000px;
  width: 100%;
  /* background-color: #fff; */
}
</style>