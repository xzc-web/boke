<template>
  <div class="page">
    <h3 id="page1">一.面向对象导读</h3>
    <h1>VueRouter学习笔记</h1>
    <h2>vue-router是Vue.js官方的路由插件,它和vue.js是深度集成的,适合用于构建单页面应用。</h2>
    <h2>vue-router是基于路由和组件的</h2>
    <h3>路由用于设定访问路径,将路径和组件映射起来.</h3>
    <h3>在vue-router的单页面应用中,页面的路径的改变就是组件的切换</h3>
    <h2>安装vue-router,在终端窗口输入npm install vue-router --save</h2>

    <div>
      <h2>在src中创建router文件夹。在router中创建index.js文件，并配置文件</h2>
    </div>
    <div class="image">
      <img src="~assets/img/router/router1.png" alt />
    </div>
    <h2>在main.js中挂载router</h2>
    <div class="image">
      <img src="~assets/img/router/router2.png" alt />
    </div>
    <h2>创建需要配置俩个组件，在components中创建Home.vue和About.vue</h2>
    <div class="image">
      <span>
        <img src="~assets/img/router/router4.png" alt />
      </span>
      <span>
        <img src="~assets/img/router/router3.png" alt />
      </span>
    </div>
    <h2>配置映射关系，一个映射关系一个对象，在router/index.js配置关系,导入俩组件</h2>
    <div class="image">
      <img src="~assets/img/router/router5.png" alt />
    </div>
    <div class="image">
      <img src="~assets/img/router/router6.png" alt />
    </div>
    <h2>
      点击标签让路径来回切显示对应组件，在App.vue中运用全局组件
      <router-link></router-link>,让router-link与组件结合起来，则要设置to属性
    </h2>
    <div class="image">
      <img src="~assets/img/router/router7.png" alt />
    </div>
    <h2>在终端敲入npm run serve运行显示页面，当点击时，路径名对应改变</h2>
    <div class="image">
      <img src="~assets/img/router/router8.png" alt />
    </div>
    <h2>
      在App.vue中加入
      router-view把对应组件渲染出来
    </h2>
    <div class="image">
      <img src="~assets/img/router/router9.png" alt />
    </div>
    <h2>
      在进入网站的首页，我们希望
      router-view渲染首页内容。但在我们实现在，默认没有显示首页组件，必须让用户点击才可以
    </h2>
    <h2>
      如何人路径默认跳转到首页，并
      router-view渲染首页组件呢？此时我们只需多配置一个映射就可以了
    </h2>
    <h2>在router/index.js中通过redirect重定向到/Home路径</h2>
    <div class="image">
      <img src="~assets/img/router/router10.png" alt />
    </div>
    <h2>修改为html5的history模式，路径不会出现#哈希。则在在router/index.js中创建路由的mode属性</h2>
    <div class="image">
      <img src="~assets/img/router/router11.png" alt />
    </div>
    <h2>router-link的其他属性</h2>
    <h3>tag:tag可以指定router-link之后渲染成什么组件，(router-link to="/home" tag="button")则会渲染成按钮</h3>
    <h3>replace:replace不会留下history记录，后退键返回不能返回到上一个页面中(router-link to="/home" tag="button" replace)</h3>
    <h3>
      active-class:当router-link对应路由匹配成功时，1,会自动给当前元素设置一个router-link-active的class,
      或者2,在router-link中设置active-class="active",3在router/index.js中创建路由中加入属性linkActiveClass:"active"
    </h3>
    <h2>通过代码跳转路由，</h2>
    <div class="image">
      <img src="~assets/img/router/router12.png" alt />
    </div>
    <h2>添加点击事件方法，运用router属性跳转</h2>
    <div class="image">
      <img src="~assets/img/router/router13.png" alt />
    </div>
    <h2>vue-router动态路由的使用</h2>
    <h3>首先在components中创建User.vue,在router/index.js中配置映射关系实现路径的拼接</h3>
    <div class="image">
      <img src="~assets/img/router/router14.png" alt />
    </div>
    <h3>在App.vue中写入</h3>
    <div class="image">
      <img src="~assets/img/router/router15.png" alt />
      <img src="~assets/img/router/router16.png" alt />
    </div>
    <h2>路由的嵌套</h2>
    <h3>
      在home页面中，我们希望通过/home/news喝/home/message访问一些内容
      一个路径映射一个组件，访问这俩个路径也会分别渲染俩个组件
    </h3>
    <h3>创建Homenews.vue和Homemessage.vue俩组件，在router/index.js中配置映射关系</h3>
    <div class="image">
      <img src="~assets/img/router/router17.png" alt />
    </div>
    <h3>俩子组件在父级home中渲染，在Home.vue中写如</h3>
    <div class="image">
      <img src="~assets/img/router/router18.png" alt />
    </div>
    <h1>参数传递</h1>
    <h2>
      通过router-link:创建profile.vue并在router/index.js中配置映射关系，然后在App.vue中写入
      router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">profile router-link
      ，并在profile.vue中拿到query的值
    </h2>
    <div class="image">
      <img src="~assets/img/router/router19.png" alt />
    </div>
    <h2>通过button：点击按钮实现参数传递，路径的跳转</h2>
    <h3>在App.vue中写入</h3>
    <div class="image">
      <img src="~assets/img/router/router20.png" alt />
    </div>
    <h3>然后在methods中写如点击事件的方法</h3>
    <div class="image">
      <img src="~assets/img/router/router21.png" alt />
    </div>
    <h1>
      vue-router全局导航守卫
      <h2>了解：路由独享的守卫，组件内的守卫</h2>
    </h1>
    <h2>在router/index.js中配置导航属性设置</h2>
    <div class="image">
      <img src="~assets/img/router/router22.png" alt />
    </div>
    <h2>在router/index.使用，通过meta配置</h2>
    <div class="image">
      <img src="~assets/img/router/router23.png" alt />
    </div>
    <h1>vue-router keep-alive</h1>
    <h2>
      keep-alive 是Vue内置的一个组件,可以使被包含profile.vue的组件保留状态,或避免重新渲染。
      router-view 也是一个组件,如果直接被包在keep-alive里面,所有路径匹配到的视图组件都会被缓存:
      若想profile.vue 不缓存的则加exclude="profile"
    </h2>
    <div class="image">
      <img src="~assets/img/router/router24.png" alt />
    </div>
  </div>
</template>

<script>
// replace;
export default {
  name: "java2",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.page h2 {
  margin: 10px 0px;
  /* height: 50px; */
  width: 800px;
  /* font-size: 16px; */
  border-left: 8px solid #67cc86;
  background-color: rgb(248, 244, 244);
  /* line-height: 50px; */
  /* padding-left: 30px; */
  padding-left: 20px;
}
.page h3 {
  margin-bottom: 10px;
  margin-left: 20px;
}
</style>