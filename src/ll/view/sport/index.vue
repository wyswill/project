<template>
  <div>
    <!-- 顶部导航 -->
    <div class="t_head">
      <top_nav middle="运动"></top_nav>
    </div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(banner, index) in banners" :key="index">
          <img :src="banner" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <router-link to="/sportsrecord">
      <div class="yundong">
        <img :src=" imgUrl01" alt class="imgUrl01">
      </div>
      <span class="word">运动记录</span>
    </router-link>
    <router-link to="/challenge">
      <div>
        <img :src=" imgUrl02" alt class="imgUrl02">
      </div>
      <span class="text">挑战记录</span>
    </router-link>
    <div class="btn">
      <router-link to="/timer">
        <a-button block>开始训练</a-button>
      </router-link>
    </div>
    <BottomNav/>
    <div class="zhanwei"></div>
  </div>
</template>
<script>
import back from "../../../assets/yundongjili_back.png";
import top_nav from "../../../compoent/nav/top.vue";
import BottomNav from "../../../compoent/bottom/index";
import { Button } from "ant-design-vue";

export default {
  name: "sport",
  data() {
    return {
      back,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      banners: [
        require("../../../assets/img/ll/yundong/run.png"),
        require("../../../assets/img/ll/yundong/run.png"),
        require("../../../assets/img/ll/yundong/run.png")
      ],
      imgUrl01: require("../../../assets/img/ll/yundong/yundong.png"),
      imgUrl02: require("../../../assets/img/ll/yundong/tiaozhan.png")
    };
  },
  components: { top_nav, BottomNav }
};
</script>
<style scoped lang="less">
.zhanwei {
  width: 100%;
  height: 0.98rem;
}
.banner {
  padding: 0.3rem;
}

.banner img {
  border-radius: 10px;
  width: 7rem;
}
.imgUrl01 {
  width: 7.5rem;
  padding: 0.2rem;
}
.imgUrl02 {
  width: 7.5rem;
  padding: 0.2rem;
}
.yundong {
  position: relative;
}
.word {
  font-size: 0.44rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  position: absolute;
  top: 7.4rem;
  left: 1rem;
  color: rgb(102, 102, 102);
}
.text {
  font-size: 0.44rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  position: absolute;
  top: 10.1rem;
  left: 1rem;
  color: rgb(102, 102, 102);
}
.btn {
  width: 5.67rem;
  height: 0.78rem;
  background: rgba(248, 248, 248, 1);
  margin: 0.2rem auto;
}
button {
  width: 5.67rem;
  height: 0.78rem;
  background: rgba(255, 255, 255, 1);
  color: rgb(150, 123, 213);
  font-size: 0.4rem;
}
</style>


