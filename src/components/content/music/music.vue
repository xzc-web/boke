<template>
  <div class="music">
    <div class="music">
      <div class="music-1">
        <img src="~assets/img/logo.jpg" alt />
      </div>
      <div class="music-2">
        <h3 class="music-22">{{musicList[currentindex].name}}</h3>
        <h3>EXO {{musicList[currentindex].id}}</h3>

        <div class="music-3">
          <audio
            ref="audio"
            @play="play"
            @pause="pause"
            :src="musicUrl"
            autoplay
            controls
            loop
            class="myaudio"
          ></audio>
        </div>
        <span @click="add"><<</span>
        <!-- <span>+</span> -->
        <span @click="sub">>></span>
      </div>
      <div class="music-4"><</div>
    </div>
  </div>
</template>
 <!-- 开发环境版本，包含了有帮助的命令行警告 -->

  <!-- 官网提供的 axios 在线地址 -->



<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "music",
  data() {
    return {
      musicList: [],
      // query: null
      musicUrl: "",
      // 是否正在播放
      isPlay: false,
      currentindex: 0,
      iid: [410801240, 412187319, 1385552483, 1385552566, 1385560364],
      id: null,
      index: 0
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods();
  },
  components: {},

  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.musicList = res.result.songs;
      });
    },
    getHomeGoods() {
      // this.index = this.currentindex;
      console.log(this.currentindex);
      this.id = this.iid[this.currentindex];
      getHomeGoods(this.id).then(res => {
        // console.log(res);
        this.musicUrl = res.data[0].url;
      });
    },
    // audio的play事件
    play() {
      this.isPlay = false;
      // 清空mv的信息
      this.mvUrl = "";
    },
    // audio的pause事件
    pause() {
      this.isPlay = true;
    },
    add() {
      this.currentindex++;

      // console.log(this.currentindex);
      if (this.currentindex === 30) {
        this.currentindex = 0;
      }
    },
    sub() {
      // console.log(this.currentindex);
      if (this.currentindex < 1) {
        this.currentindex = 29;
      } else {
        this.currentindex--;
      }
    }
  }
};
</script>

<style scoped>
.music {
  position: fixed;
  /* position: relative; */
  left: 10px;
  bottom: 20px;
  height: 100px;
  width: 380px;
  background-color: rgb(238, 235, 235);
  border-radius: 50px;
}
.music-1 {
  position: absolute;
  height: 80px;
  width: 80px;
  /* border-radius: 40px; */
  top: 10px;
  left: 10px;
}
.music-1 img {
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
.music-2 {
  position: absolute;
  left: 110px;
  top: 10px;
}

.music-2 .music-22 {
  height: 22px;
  /* background-color: pink; */
  width: 220px;
  overflow: hidden;
  /* background-color: pink; */
}
.music-3 {
  margin-top: 6px;
  width: 250px;
  height: 12px;
  /* background-color: rgb(168, 155, 158); */
}
.music-3 .myaudio {
  width: 100%;
  height: 100%;
  font-size: 5px;
}
.music-2 span {
  display: inline-block;
  font-size: 19px;
  margin-right: 20px;
  cursor: pointer;
}
.music-2 span:hover {
  transform: scale(1.1);
  /* font-size: 20px; */
}
.music-4 {
  position: absolute;
  right: 10px;
  font-size: 30px;
  top: 23px;
}
</style>