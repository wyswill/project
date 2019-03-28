<template>
  <div class="bottom-nav">
    <ul>
      <router-link tag="li" to="/sport">
        <span class="icon iconfont icon-D"></span>
        <span>运动</span>
      </router-link>
      <router-link tag="li" to="/test">
        <span class="icon iconfont icon-huo"></span>
        <span>教程</span>
      </router-link>
      <router-link tag="li" to="/share">
        <span class="icon iconfont icon-fenxiang1"></span>
        <span>分享</span>
      </router-link>
      <router-link tag="li" to="/mine">
        <span class="icon iconfont icon-wodedangxuan"></span>
        <span>我</span>
      </router-link>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Bottom",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
@import url("../../assets/font/iconfont.css");
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 0.98rem;
  background: rgba(246, 246, 246, 1);
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12);
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    li {
      float: left;
      flex-grow: 1;
      text-align: center;
      span {
        display: block;
        margin: 0;
        padding: 0;
        font-size: 0.2rem;
        font-family: Adobe Heiti Std R;
        font-weight: normal;
      }
      .iconfont {
        font-size: 0.4rem;
      }
    }
  }
}
</style>
