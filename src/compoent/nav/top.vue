<template>
  <div class="top_nav">
    <div class="left">
      <img :src="left" v-if="left" @click="back" alt>
    </div>
    <div class="middle">{{middle}}</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  props: ["left", "middle"],
  methods: {
    back() {
      window.history.back();
      // this.clear();
    },
  },
};
</script>

<style lang="less" scoped>
.top_nav {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  background: linear-gradient(
    96deg,
    rgba(92, 87, 253, 1) 0%,
    rgba(157, 73, 254, 1) 77%
  );
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12);
  .left,
  .middle,
  .right {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .left {
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin: 11% 10%;
    }
  }
  .middle {
    font-size: 0.34rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 1.1rem;
    text-align: center;
  }
}
</style>
