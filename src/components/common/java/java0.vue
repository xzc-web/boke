<template>
  <div class="java0">
    <div class="java01">
      <a href="#" @click.stop="submit(1)" :class="{active:currentindex===1}">一.面向对象导读</a>
    </div>
    <div class="java01">
      <a href="#" @click.stop="submit(2)" :class="{active:currentindex===2}">二.ES6中的类和对象</a>
      <ul class="java02">
        <li>
          <a href>2.1 class类</a>
        </li>
        <li>
          <a href>2.2 创建类</a>
        </li>
        <li>
          <a href>2.3 constructor</a>
        </li>
        <li>
          <a href>2.4 创建第一个类和对象</a>
        </li>
        <li>
          <a href>2.5</a>
        </li>
        <li>
          <a href>2.6</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "java0",
  data() {
    return {
      currentindex: 0
    };
  },
  components: {},
  methods: {
    submit(key) {
      this.currentindex = key;
      var pageld = document.querySelector("#page" + key);
      console.log(pageld.offsetTop);
      window.scrollTo({
        top: pageld.offsetTop - 60,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.java0 {
  height: 500px;
  width: 200px;
  background-color: #fff;
  position: fixed;
  top: 160px;
  left: 15px;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 1px solid rgb(233, 223, 223);
}
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
.java0 .java01 {
  width: 200px;
}
.java0 .java01 a {
  display: inline-block;
  font-size: 14px;
  width: 200px;
  padding: 5px 5px;
  /* border-right: 2px solid rgb(156, 23, 23); */
}
/* .java0 .java01 a :hover {
  border-right: 2px solid rgb(156, 23, 23);
} */
.java0 .java01 .java02 li a {
  font-size: 10px;
  padding: 5px 15px;
}
.java0 .java01 .java02 li a:hover {
  color: #3eaf7c;
  /* border-right: 2px solid rgb(156, 23, 23); */
}
.java0 .java01 a:hover {
  color: #3eaf7c;
  /* border-right: 2px solid rgb(156, 23, 23); */
}
.active {
  color: #3eaf7c;
  border-right: 2px solid #3eaf7c;
}
</style>