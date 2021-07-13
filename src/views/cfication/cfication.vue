<template>
  <div class="cfication">
    <div class="cfication1">
      <ul>
        <!-- @click="cvclick"" -->
        <!-- <router-link to="/cfication/bolgchild"> -->
        <li @click.stop="cjclick" :class="{active:show}">
          <a>
            <span :class="{actives:show}">Vue</span>
            <span class="number">6</span>
          </a>
        </li>

        <li @click.stop="cvclick" :class="{active:shows }">
          <a>
            <span :class="{actives:shows}">JavaScript</span>
            <span class="number">1</span>
          </a>
        </li>
      </ul>
    </div>
    <div>{{$route.query.number}}</div>
    <div>{{$route.query.number1}}</div>
    <!-- <router-link v-show="show" to="/cfication/vue"> -->
    <div v-show="show">
      <bolgchild></bolgchild>
    </div>
    <div v-show="shows">
      <bolgchild1></bolgchild1>
    </div>
  </div>
</template>
// v-if="btnFlag"
<script>
import bolgchild from "views/bolg/bolgchild/bolgchild.vue";
import bolgchild1 from "views/bolg/bolgchild/bolgchild1.vue";
export default {
  name: "cfication",
  data() {
    return {
      show: true,
      shows: false,
      path1: "/vue",
      path2: "/javascript"
    };
  },
  components: {
    bolgchild,
    bolgchild1
  },
  computed: {
    javascript() {
      return this.$route.query.number;
    },
    vue() {
      return this.$route.query.number1;
    }
  },
  methods: {
    cjclick() {
      this.show = true;
      // console.log(this.show);
      this.shows = false;

      this.$router.push("/cfication" + this.path1);
    },
    cvclick() {
      this.shows = true;
      this.show = false;
      this.$router.push("/cfication" + this.path2);
    }
  }
};
</script>

<style scoped>
.cfication {
  width: 800px;
  height: 300px;
  margin: 100px auto;
  /* overflow: hidden; */
  /* z-index: -10; */
}
.cfication .cfication1 {
  width: 860px;
  height: 58px;
  line-height: 58px;
}
.cfication .cfication1 ul {
  width: 860px;
  height: 40px;
  line-height: 40px;
}
.cfication .cfication1 ul li {
  cursor: pointer;
  float: left;
  font-size: 14px;
  text-align: center;
  padding: 0 10px;
  border-radius: 10%;
  margin-right: 20px;
  box-shadow: 0px 0px 5px 5px rgb(240, 229, 229);
}
.cfication .cfication1 ul li .number {
  /* display: inline-block; */
  /* height: 20px; */
  /* width: 20px; */
  margin-left: 5px;
  background-color: rgb(228, 110, 63);
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 20%;
}
.active {
  background-color: rgb(41, 152, 180);
}
.actives {
  color: aliceblue;
}
.activer {
  display: none;
}
</style>