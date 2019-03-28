<template>
  <div class="all">
    <!-- 顶部导航 -->
    <div class="t_head">
      <top_nav middle="教程"></top_nav>
    </div>
    <div>
      <img :src="imgs[0]" alt class="testbig">
    </div>
    <div class="middle">
      <ul>
        <router-link to="/add">
          <li>
            <img :src="middleImg[0]" alt class="testtubiao1">
          </li>
        </router-link>
        <router-link to="/play">
          <li>
            <img :src="middleImg[1]" alt class="testtubiao2">
          </li>
        </router-link>
        <router-link to="/challenge">
          <li>
            <img :src="middleImg[2]" alt class="testtubiao3">
          </li>
        </router-link>
      </ul>
    </div>
    <div class="course">
      <span>全部课程</span>
      <router-link tag="div" to='/add' class="pics">
        <img :src=" imgs[1]" class="img1">
        <img :src=" imgs[2]" class="img2">
        <img :src=" imgs[3]" class="img3">
        <img :src=" imgs[4]" class="img4">
      </router-link>
    </div>
    <BottomNav/>
    <div class="zhanwei"></div>
  </div>
</template>
<script>
import top_nav from "../../../compoent/nav/top.vue";
import BottomNav from "../../../compoent/bottom/index";

export default {
  name: "test",
  data() {
    return {
      imgs: [
        "http://192.168.1.123:3000/data/ll/testbig.gif",
        "http://192.168.1.123:3000/data/ll/testjianzhi.gif",
        "http://192.168.1.123:3000/data/ll/testrun.gif",
        "http://192.168.1.123:3000/data/ll/testzengji.gif",
        "http://192.168.1.123:3000/data/ll/testsuxing.gif"
      ],
      middleImg:[
        'http://192.168.1.123:3000/data/ll/testtubiao1.gif',
        'http://192.168.1.123:3000/data/ll/testtubiao2.gif',
        'http://192.168.1.123:3000/data/ll/testtubiao3.gif',
      ]
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
.testbig {
  width: 100%;
}
.middle {
  width: 100%;
  height: 2.8rem;
  background-color: white;
  ul {
    height: 2.6rem;
    li {
      float: left;
      width: 33%;
      height: 2.5rem;
      padding-left: 0.7rem;
      padding-top: 0.4rem;
      list-style: none;
      .testtubiao1 {
        width: 52%;
      }
      .testtubiao3 {
        width: 47%;
      }
      img {
        width: 65%;
      }
    }
  }
}
.course {
  background-color: white;
  span {
    padding-left: 3rem;
    text-align: center;
    font-size: 0.4rem;
    color: rgb(140, 87, 255);
  }
  .pics {
    width: 100%;
  }
  .img1 {
    width: 40%;
    margin-left: 6%;
    margin-top: 3%;
  }
  .img2 {
    width: 40%;
    margin-left: 8%;
    margin-top: 3%;
  }
  .img3 {
    width: 40%;
    margin-left: 6%;
    margin-top: 3%;
  }
  .img4 {
    width: 40%;
    margin-left: 8%;
    margin-top: 3%;
  }
}
</style>

