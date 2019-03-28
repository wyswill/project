<template>
  <div class="shareList_root">
    <div class="share_top">
      <div class="top_left">
        <img :src="info.touxiang" alt>
      </div>
      <div class="top_right">
        <p class="uname">{{ info.name }}</p>
        <p class="udata">{{ info.times }}</p>
      </div>
    </div>
    <div class="list_main">
      <div class="content_text">{{ info.content_title }}</div>
      <div v-if='info.content_imgs.length > 0'>
        <img
          v-for="(item, index) in info.content_imgs"
          :key="index"
          :src="item"
          alt
          :class="['contentImg',{'margin_content':index%3 == 1}]"
        >
      </div>
      <div v-else class="notImg"></div>
      <div class="contentData">
        <div>
          <i class="icon iconfont icon-fenxiang"></i>
          <span>{{ info.fenxiang }}</span>
        </div>
        <div>
          <i class="icon iconfont icon-iconfontzhizuobiaozhun44"></i>
          <span>{{ info.dianzan }}</span>
        </div>
        <div>
          <i class="icon iconfont icon-pinglun"></i>
          <span>{{ info.pinglun }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareList",
  props: {
    info: {}
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/font/iconfont.css");
.shareList_root {
  width: 7.1rem;
  background-color: #fff;
  box-shadow: 0 0 0.04rem 0.02rem rgba(134, 131, 131, 0.3);
  margin: 0 auto;
  margin-top: 0.39rem;
  padding: 0.3rem;
  .share_top {
    width: 100%;
    height: 0.85rem;
    overflow: hidden;
    .top_left {
      width: 0.85rem;
      height: 0.85rem;
      float: left;
    }
    .top_right {
      float: left;
      padding-left: 0.2rem;
      height: 0.85rem;
      p {
        margin-bottom: 0;
      }
      .uname {
        height: 0.45rem;
        font-size: 0.26rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 0.45rem;
      }
      .udata {
        height: 0.4rem;
        font-size: 0.2rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(76, 76, 76, 1);
        line-height: 0.4rem;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .list_main {
    padding: 0.2rem 0.25rem 0;
    .contentImg {
      width: 1.76rem;
      height: 1.76rem;
      margin: 0.2rem 0;
    }
    .contentData {
      width: 6rem;
      height: 0.8rem;
      line-height: 0.8rem;
      display: flex;
      div {
        float: left;
        flex: 1;
        text-align: center;
      }
      span {
        font-size: 0.2rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(76, 76, 76, 1);
        padding-left: 0.2rem;
        position: relative;
        top: -0.05rem;
      }
    }
    .notImg{
      width:7.5rem;
      height:0.3rem;
    }
  }
}
.margin_content {
  margin: 0.2rem 0.33rem !important;
}
.iconfont {
  font-size: 0.4rem;
}
</style>
