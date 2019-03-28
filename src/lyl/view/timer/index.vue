<template>
  <div class="timer_root">
    <div @click="clear">
      <Nav :left="back" middle="正在跑步" class="guding"/>
    </div>
    <div class="timer_circle">
      <div class="smallCircle">
        <div class="circleData">
          <span>{{ hour }}</span> :
          <span>{{ min }}</span> :
          <span>{{ second }}</span>
        </div>
        <div class="circleKm">{{ circlekm }}km</div>
      </div>
      <div class="circle_back" ref="xuanzhuan">
        <img src="../../../assets/timer/xuanzhuan.png" alt>
      </div>
    </div>
    <div class="kaishi_modole">
      <div class="juli">
        <div class="taiji">
          <div class="banyuan1"></div>
          <div class="banyuan2"></div>
          <div class="xiaoyuan1"></div>
          <div class="xiaoyuan2"></div>
          <div class="taiji_title">123</div>
          <div class="taiji_danwei">km/h</div>
        </div>
      </div>
      <div class="kaishi" @click="kaishi">{{ anniu }}</div>
      <div class="kll">
        <div class="taiji">
          <div class="banyuan1"></div>
          <div class="banyuan2"></div>
          <div class="xiaoyuan1"></div>
          <div class="xiaoyuan2"></div>
          <div class="taiji_title">123</div>
          <div class="taiji_danwei">kcol</div>
        </div>
      </div>
    </div>
    <div class="backColor">
      <div class="backColor_bottom"></div>
    </div>
  </div>
</template>

<script>
import Nav from "../../../compoent/nav/top.vue";
import back from "../../../assets/yundongjili_back.png";
export default {
  name: "Timer",
  components: {
    Nav
  },
  data() {
    return {
      back,
      circlekm: 4.2,
      hour: "00",
      min: "00",
      second: "00",
      flag: false,
      anniu: "开始",
      xuanzhuan: 0,
      timer: null,
      zhuan: null
    };
  },
  methods: {
    kaishi: function() {
      var _this = this;
      //开始的话 先清除定时器
      clearInterval(this.timer);
      clearInterval(this.zhuan);
      this.flag = !this.flag;
      var second = Number(this.second);
      var hour = Number(this.hour);
      var min = Number(this.min);
      if (this.flag) {
        this.anniu = "暂停";
        _this.zhuan = setInterval(() => {
          this.xuanzhuan += 1;
          this.$refs.xuanzhuan.style.transform =
            "rotate(" + this.xuanzhuan + "deg)";
        }, 10);
        _this.timer = setInterval(() => {
          second++;
          if (second < 10) {
            _this.second = "0" + second;
          } else if ((second >= 10) & (second < 60)) {
            _this.second = "" + second;
          } else if (second >= 60) {
            second = 0;
            min++;
          }
          //分钟处理
          if (min < 10) {
            _this.min = "0" + min;
          } else if (min >= 10 && min < 60) {
            _this.min = "" + min;
          } else if (min >= 60) {
            min = 0;
            hour++;
          }
          // //小时处理
          if (hour < 10) {
            _this.hour = "0" + hour;
          } else if (hour >= 10 && hour < 24) {
            _this.hour = "" + hour;
          } else {
            alert("时间超过锻炼标准,为了您的身体健康请先休息");
            clearInterval(timer);
            clearInterval(zhuan);
          }
          //点击暂停 清除定时器
          if (!_this.flag) {
            clearInterval(this.timer);
            clearInterval(this.zhuan);
          }
        }, 1000);
      } else {
        this.anniu = "开始";
      }
    },
    clear() {
      clearInterval(this.timer);
      clearInterval(this.zhuan);
    }
  }
};
</script>

<style lang="less" scoped>
.timer_root {
  width: 7.5rem;
  height: 13.34rem;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  .timer_circle {
    width: 4.62rem;
    height: 4.62rem;
    margin: 2.84rem 1.44rem 1rem;
    background-color: red;
    border: 0px solid rgba(0, 0, 0, 1);
    background: linear-gradient(
      90deg,
      rgba(27, 206, 254, 1),
      rgba(28, 71, 254, 1)
    );
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    .smallCircle {
      margin: 0.05rem 0.05rem;
      width: 4.52rem;
      height: 4.52rem;
      //   background:linear-gradient(to top,rgba(97,86,253,1),#fff,rgba(157,73,254,-0.01));
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
      text-align: center;
      .circleData {
        width: 4.52rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.73rem;
        margin-top: 1.7rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .circleKm {
        font-size: 0.4rem;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        margin-top: 0.3rem;
      }
    }
    .circle_back {
      width: 4.3rem;
      height: 4.3rem;
      z-index: 888;
      position: absolute;
      top: 0.17rem;
      left: 0.17rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .backColor {
    width: 7.5rem;
    height: 3rem;
    overflow: hidden;
    margin-top: 2.9rem;
    .backColor_bottom {
      width: 20rem;
      height: 20rem;
      background: rgba(84, 50, 183, 1);
      box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      position: relative;
      left: -6.2rem;
    }
  }
  .kaishi_modole {
    width: 7.5rem;
    .kaishi {
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
      background: rgba(102, 82, 255, 1);
      border: 0.04rem solid rgba(158, 145, 255, 1);
      border-radius: 50%;
      font-size: 0.43rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      position: absolute;
      left: 3rem;
      bottom: 2rem;
      z-index: 666;
    }
    .juli {
      position: absolute;
      left: 1rem;
      bottom: 2.2rem;
      z-index: 666;
    }
    .kll {
      position: absolute;
      right: 1rem;
      bottom: 2.2rem;
      z-index: 666;
    }
    .taiji_title {
      width: 1rem;
      transform: rotate(-20deg);
      text-align: center;
      position: relative;
      top: -1rem;
      left: -0.1rem;
      font-size: 0.31rem;
      color: rgba(118, 102, 252, 1);
      z-index: 777;
    }
    .taiji_danwei {
      width: 1rem;
      font-size: 0.18rem;
      transform: rotate(-20deg);
      text-align: center;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      position: relative;
      top: -0.9rem;
      left: 0.09rem;
    }
  }
}
.guding {
  position: fixed;
  top: 0;
  z-index: 999;
}
.taiji {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: relative;
  transform: rotate(20deg);
  border: 0.01rem solid #cecdcd;
  .banyuan1 {
    width: 1rem;
    height: 0.5rem;
    background-color: #fff;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  .banyuan2 {
    width: 1rem;
    height: 0.5rem;
    background: rgba(140, 87, 255, 1);
    border-radius: 0 0 0.5rem 0.5rem;
  }
  .xiaoyuan1 {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    display: inline-block;
    position: absolute;
    top: 0.25rem;
    left: 0;
  }
  .xiaoyuan2 {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: 0 auto;
    display: inline-block;
    background: rgba(140, 87, 255, 1);
    position: absolute;
    top: 0.25rem;
    left: 0.5rem;
  }
}
</style>
