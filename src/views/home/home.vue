<template>
  <div id="app">
    <!-- <toptabbar></toptabbar> -->
    <home1></home1>
    <bolg></bolg>
    <footers></footers>
    <topback></topback>
  </div>
</template>
// v-if="btnFlag"
<script>
// import toptabbar from "components/content/toptabbar/toptabbar";
import topback from "components/content/topback/topback";
import home1 from "views/home/homechild/home1.vue";
import bolg from "views/bolg/bolg.vue";
import footers from "views/footers/footers.vue";

export default {
  name: "home",
  data() {
    return {
      // btnFlag: false
    };
  },
  components: {
    // toptabbar,
    home1,
    bolg,
    footers,
    topback
  }
};
</script>

<style>
@import "~assets/css/base.css";
</style>
