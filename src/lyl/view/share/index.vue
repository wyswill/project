<template>
  <div class="share_root">
    <Nav middle="分享" class="guding"/>
    <div class="share_main">
      <swiper :options="swiperOption">
        <swiper-slide class="share_swiper" v-for="(item,index) in banners" :key="index">
          <img :src="item" alt>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 用户列表 -->
      <div class="shareList">
        <share-list v-for="(item,index) in fenxiang" :key="index" :info="item"></share-list>
      </div>
      <div class="jiazia">正在加载中......</div>
    </div>
    <BottomNav/>
    <div class="zhanwei"></div>
    <BackTop/>
  </div>
</template>

<script>
import Nav from "../../../compoent/nav/top.vue";
import BottomNav from "../../../compoent/bottom/index.vue";
import ShareList from "../../component/ShareList.vue";
import BackTop from "../../../compoent/backTop/index";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";
export default {
  name: "Share",
  components: {
    Nav,
    swiper,
    swiperSlide,
    ShareList,
    BottomNav,
    BackTop
  },
  computed: {
    ...mapState(["user_info"])
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 1500
        }
      },
      banners: [
        "http://192.168.1.123:3000/data/share/images/banner1.png",
        "http://192.168.1.123:3000/data/share/images/banner1.png",
        "http://192.168.1.123:3000/data/share/images/banner1.png",
        "http://192.168.1.123:3000/data/share/images/banner1.png"
      ],
      fenxiang: []
    };
  },
  methods: {
    addel() {
      const clientHeight = document.body.clientHeight;
      var scrollTop = document.documentElement.scrollTop;
      var scrollHeight = document.body.scrollHeight;
      var height = scrollHeight - scrollTop;
      if (height < clientHeight + 10) {
        this.$axios.get(this.HOST + "/share").then(res => {
          this.fenxiang = this.fenxiang.concat(res.data);
        });
      }
    },
    scrolls() {
      this.$axios.get(this.HOST + "/share").then(res => {
        this.fenxiang = res.data;
      });
      // share页面无限滚动状态设置
      window.addEventListener("scroll", this.addel);
    }
  },
  mounted() {
    let user = JSON.parse(decodeURIComponent(sessionStorage.getItem('user')));
    // let { username } = this.user_info;
    if (!user) {
      this.$router.push("login");
    }
    this.scrolls();
  },
  beforeDestroy() {
    //移除事件
    window.removeEventListener("scroll", this.addel);
  }
};
</script>

<style lang="less" scoped>
.zhanwei {
  width: 7.5rem;
  height: 0.98rem;
}
.share_root {
  max-width: 7.5rem;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  .share_main {
    margin-top: 1rem;
    .share_swiper {
      width: 7.5rem;
      height: 4rem;
      img {
        width: 7.5rem;
      }
    }
    .shareList {
      width: 7.5rem;
      background-color: #f8f8f8;
    }
  }
}
.guding {
  position: fixed;
  top: 0;
  z-index: 999;
}
.jiazai {
  text-align: center;
  margin-top: 0.2rem;
}
</style>
