<template>
  <div class="containers">
    <!-- 顶部导航 -->
    <div class="t_head">
      <top_nav :left="back" middle="挑战记录"></top_nav>
    </div>
    <div class="top">
      <span>好友月排行</span>
      <div>
        <img :src="imgTop" alt class="imgTop">
      </div>
      <ul>
        <li>你的排名</li>
        <li>No.12</li>
        <li>挑战成功:56</li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li class="shuju" v-for="(item,index) in datas" :key="index">
          <div class="dataList">
            <span class="shuzi">{{index+1}}</span>
            <img :src="item.img" alt class="touxiang">
            <span class="name">{{ item.name }}</span>
            <div class="right">
              <span class="tiaozhan">挑战成功</span>
              <span>{{ item.score }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import back from "../../../assets/yundongjili_back.png";
import top_nav from "../../../compoent/nav/top.vue";
import { log } from 'util';
export default {
  name: "challenge",
  data() {
    return {
      back,
      imgTop: require("../../../assets/img/ll/tiaozhan/1.png"),
      datas: [
        {
          img: require("../../../assets/img/ll/tiaozhan/guanjun.png"),
          name: "王域城",
          score: 116
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/dier.png"),
          name: "夏溪",
          score: 109
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/disan.png"),
          name: "王槐堂",
          score: 99
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/disi.png"),
          name: "墨灵隐",
          score: 90
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/diwu.png"),
          name: "夜狸",
          score: 86
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/diliu.png"),
          name: "尉迟凌嫣",
          score: 85
        },
        {
          img: require("../../../assets/img/ll/tiaozhan/diqi.png"),
          name: "丁睿",
          score: 79
        }
      ]
    };
  },

  components: { top_nav }
};
</script>
<style scoped lang="less">
.containers {
  width: 7.5rem;
  height: 13.33rem;
  background-color: #f8f8f8;
}
.top {
  width: 7.1rem;
  height: 2.48rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: -0.001rem 0.01rem 0.05rem rgba(0, 0, 0, 0.8);
  border-radius: 0rem;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  span {
    width: 7.1rem;
    height: 0.3rem;
    font-size: 0.31rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    padding-left: 3rem;
  }
  .imgTop {
    width: 18%;
    position: absolute;
    top: 2.1rem;
    left: 3.2rem;
  }

  ul {
    position: absolute;
    top: 3.6rem;

    width: 7.1rem;
    height: 0.3rem;
    li {
      list-style: none;
      float: left;
      margin-left: 1.1rem;
      font-size: 0.26rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
    }
  }
}
.shuju {
  list-style: none;
  width: 6.8rem;
  height: 1.2rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.3);
  border-radius: 0rem;
  margin: 0 auto;
}
.shuzi {
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  display: inline-block;
  margin-right: 0.1rem;
}

.touxiang {
  width: 18%;
  display: inline-block;
  border-sizing: border-box;
}
.bottom {
  width: 6.8rem;
  height: 8.7rem;
  background: rgba(255, 255, 255, 1);
  margin-left: 0.35rem;
  box-shadow: -0.001rem 0.01rem 0.05rem rgba(0, 0, 0, 0.8);
  border-radius: 2%;
}
.name {
  width: 1.1rem;
  height: 0.27rem;
  font-size: 0.28rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  padding-left: 0.4rem;
}
.tiaozhan {
  width: 0.93rem;
  height: 0.22rem;
  font-size: 0.3rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.right {
  float: right;
  margin-top: 0.45rem;
  margin-left: 0.45rem;
  width: 1.9rem;
}
</style>



