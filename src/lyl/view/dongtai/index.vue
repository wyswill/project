<template>
  <div class="dongtai">
    <Nav :left="back" middle="动态"/>
    <div class="shareList">
      <share-list v-for="(item,index) in fenxiang" :key="index" :info="item"></share-list>
      <div class="jiazai">没有了......</div>
    </div>
  </div>
</template>

<script>
import Nav from "../../../compoent/nav/top.vue";
import ShareList from "../../component/ShareList.vue";
import BackTop from "../../../compoent/backTop/index";
import back from "../../../assets/yundongjili_back.png";
export default {
  name: "dongtai",
  components: {
    Nav,
    ShareList,
    BackTop
  },
  data() {
    return {
        back,
      fenxiang: [
        {
          name: "小苹果",
          times: "08-08 11:13",
          content_title: "生活像永不停转的磨盘，一点点碾碎希望。",
          content_imgs: [
            "http://192.168.1.123:3000/data/share/images/content1.png",
            "http://192.168.1.123:3000/data/share/images/content2.png",
            "http://192.168.1.123:3000/data/share/images/content3.png"
          ],
          touxiang: "http://192.168.1.123:3000/data/share/images/touxiang1.gif",
          fenxiang: "11",
          dianzan: "68",
          pinglun: "188"
        },
        {
          name: "小苹果",
          times: "08-08 11:13",
          content_title: "生活像永不停转的磨盘，一点点碾碎希望。",
          content_imgs: [
            "http://192.168.1.123:3000/data/share/images/content1.png",
            "http://192.168.1.123:3000/data/share/images/content2.png",
            "http://192.168.1.123:3000/data/share/images/content3.png"
          ],
          touxiang: "http://192.168.1.123:3000/data/share/images/touxiang1.gif",
          fenxiang: "11",
          dianzan: "68",
          pinglun: "188"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.jiazai{
  text-align: center;
  margin-top: 0.2rem;
}
</style>
