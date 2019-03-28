<template>
  <div class="boot">
    <img src="../../../assets/boot_logo.png" alt>
    <div class="small">千里之行 始于 i 动</div>
    <div class="bottom">idong@ 2017 week.com. All rights reserved</div>
  </div>
</template>

<script>
export default {
  mounted() {
    let _this = this;
    setTimeout(() => {
      _this.$router.push("Swiper");
    }, 1500);
  }
};
</script>

<style lang="less" scoped>
.boot {
  width: 100%;
  height: 13.34rem;
  background: linear-gradient(
    0deg,
    rgba(97, 93, 237, 1) 0%,
    rgba(154, 95, 235, 1) 92%
  );
  box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.12);
  img {
    width: 1.73rem;
    height: 1.67rem;
    position: absolute;
    top: 4rem;
    left: 3rem;
  }
  .small {
    font-size: 0.3rem;
    font-family: PingFang-SC-Heavy;
    font-weight: 800;
    color: #ffffff;
    position: absolute;
    top: 6rem;
    left: 2.5rem;
  }
  .bottom {
    font-size: 0.15rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: fixed;
    left: 1.5rem;
    bottom: 1rem;
  }
}
</style>
