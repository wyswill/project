<template>
  <div class="map">
    <!-- 顶部导航 -->
    <top_nav :left="back" middle="运动轨迹"></top_nav>
    <div class="warp">
      <map-drag :location="user_info.location_data"></map-drag>
      <div class="info">
        <div class="head">
          <img :src="head" alt class="img">
          <small>{{user_info.neac_name}}</small>
          <small style="top:18%">
            {{user_info.age}}{{user_info.location}}
            <img :src="sex_g" alt>
          </small>
        </div>
        <div class="run clear">
          <div class="title">
            <img :src="runer" alt>
            <h2>{{user_info.distance}}</h2>
            <small>km</small>
          </div>
          <div class="list">
            <ul>
              <li>
                <p>{{user_info.time}}</p>
                <small>时长</small>
              </li>
              <li>
                <p>{{user_info.speed}}</p>
                <small>平均速度(km/h)</small>
              </li>
              <li>
                <p>{{user_info.Maxspeed}}</p>
                <small>最高速度(km/h)</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top_nav from "../../../compoent/nav/top.vue";
import mapDrag from "./mapDrag/index.vue";
import back from "../../../assets/yundongjili_back.png";
import head from "../../../assets/head.png";
import sex_g from "../../../assets/map/gile.png";
import runer from "../../../assets/map/pepo.png";

export default {
  components: { top_nav, mapDrag },
  data() {
    return {
      back,
      head,
      sex_g,
      runer,
      user_info: {
        neac_name: "一夜北风吹",
        age: "20",
        location: "北京",
        distance: 5.12,
        time: "20:12",
        speed: "08.28",
        Maxspeed: 15.28,
        location_data: [116.397428, 39.90923]
      }
    };
  },
  methods: {
    get_postition() {
      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
      function geo_success(position) {
        this.user_info.location_data = [
          position.coords.latitude,
          position.coords.longitude
        ];
      }
      function geo_error(msg) {
        console.log(msg.code, msg.message);
      }
    }
  },
  mounted() {
    this.get_postition();
  }
};
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  height: 5.6rem;
  position: relative;
  bottom: 6px;
  z-index: 999;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rem 0rem 3px 1px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  .head {
    margin: -5% 40%;
    .img {
      width: 1.26rem;
      height: 1.26rem;
      position: absolute;
      top: -10%;
      padding: 2px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0rem 0rem 3px 1px rgba(0, 0, 0, 0.16);
    }
    small {
      position: absolute;
      top: 12%;
      font-size: 0.26rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      img {
        width: 0.26rem;
        height: 0.35rem;
      }
    }
  }
  .run {
    width: 100%;
    height: 4rem;
    position: absolute;
    bottom: 0px;
    background: rgba(140, 87, 255, 1);
    border-radius: 0 0 5px 5px;
    .title {
      position: relative;
      img {
        width: 0.67rem;
        height: 0.59rem;
        position: absolute;
        left: 2rem;
        top: 0.59rem;
      }
      h2 {
        font-size: 0.6rem;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        display: inline-block;
        position: absolute;
        left: 3rem;
        top: 0.45rem;
      }
      small {
        width: 0.24rem;
        height: 0.15rem;
        font-size: 0.2rem;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        left: 4.2rem;
        top: 0.89rem;
      }
    }
    .list {
      li {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 1.5rem;
        left: 1rem;
        text-align: center;
        &:nth-child(2) {
          left: 3rem;
        }
        &:nth-child(3) {
          left: 5rem;
        }
        p {
          font-size: 0.36rem;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          margin: 0;
        }
        small {
          width: 1.3rem;
          height: 0.19rem;
          font-size: 0.2rem;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
