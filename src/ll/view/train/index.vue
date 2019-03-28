<template>
  <div class="both">
    <!-- 顶部导航 -->
    <div class="t_head">
      <top_nav :left="back" middle="正在训练"></top_nav>
    </div>

    <div v-for="(item,index) in datas" :key="index" class="show">
      <img :src="item.img" alt class="juxing">
      <p class="msg">{{item.msg}}</p>
      <img :src="item. images" alt class="yizi">
      <div class="word">
        <p>{{item.xiaozi1}}</p>
        <h3>{{item.dazi}}</h3>
        <p>{{item.xiaozi2}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import back from "../../../assets/yundongjili_back.png";
import top_nav from "../../../compoent/nav/top.vue";
export default {
  name: "train",
  data() {
    return {
      back,
      datas: []
    };
  },
  components: { top_nav },
  mounted() {
    this.$axios.get(this.HOST + "/train").then(res => {
      this.datas = res.data.datas;
    });
  }
};
</script>
<style scoped lang="less">
.both {
  width: 7.5rem;
  height: 13.33rem;
  background-color: #f8f8f8;
}
.show {
  width: 7.1rem;
  height: 5.6rem;
  background: rgba(255, 255, 255, 1);
  margin-top: 0.4rem;
  margin-left: 0.2rem;
}

.juxing {
  width: 24%;
}
.yizi {
  width: 7.1rem;
}
.msg {
  margin-top: -0.5rem;
  width: 2.42rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.36rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.word {
  width: 5.2rem;
  height: 1.7rem;
  background-color: rgba(255, 255, 255, 1);
  margin: 0.8rem auto;
  text-align: center;
  h3 {
    color: rgb(140, 87, 255);
  }
}
</style>

