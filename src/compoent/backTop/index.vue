<template>
  <div class="back_top icon iconfont icon-tubiao102" @click="backtop" ref="refbacktop"></div>
</template>

<script>
export default {
  name: "backTop",
  mounted() {
      this.scrolls();
  },
  methods: {
    backtop() {
      document.documentElement.scrollTop = 0;
    },
    scrolls() {
      window.addEventListener("scroll",this.addshow);
    },
    addshow(){
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 1000) {
        this.$refs.refbacktop.style.display = "block";
        } else {
        this.$refs.refbacktop.style.display = "none";
        }
    }
  },
  beforeDestroy() {
      window.removeEventListener("scroll", this.addshow);
  }
};
</script>

<style lang="less" scoped>
.back_top {
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.5rem;
  color: #fff;
  background-color: black;
  opacity: 0.3;
  position: fixed;
  right: 0.4rem;
  bottom: 1.5rem;
  text-align: center;
  display: none;
}
</style>
