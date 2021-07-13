<template>
  <div id="app">
    <toptabbar></toptabbar>
    <!-- <home></home> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <footers></footers> -->
    <music></music>
  </div>
</template>
// v-if="btnFlag"
<script>
import toptabbar from "components/content/toptabbar/toptabbar";

import home from "views/home/home.vue";
import cfication from "views/cfication/cfication.vue";
import music from "components/content/music/music";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    toptabbar,
    home,
    cfication,
    music
  }
};
</script>

<style>
@import "~assets/css/base.css";
</style>
