<template>
  <div class="pk">
    <div v-if="data.msg  === 'success' ">
      <TopNav :left="back" :middle="data.data.header"></TopNav>
      <div class="connect">
        <div class="confrontation">
          <!-- Confrontation  对战双方图层 -->
          <div class="vs-view">
            <img :src=" flag ? data.data.beijing[0]: data.data.beijing[1]" alt="正在加载">
            <div class="pkOne">
              <img :src="data.data.pktouxiang[0]" alt="正在加载">
            </div>
            <div class="pkTwo">
              <img :src="data.data.pktouxiang[1]" alt="正在加载">
            </div>
          </div>
          <div class="jindu" v-if="flag">
            <div class="left">
              <div class="xiaoren" ref='xiaorenA'>
                <img :src="data.data.xiaoren[0]" alt>
              </div>
              <div class="jindutiao"></div>
              <div class="yizou" ref="jinduA"></div>
            </div>
            <div class="right">
              <div class="xiaoren" ref='xiaorenB'>
                <img :src="data.data.xiaoren[1]" alt>
              </div>
              <div class="jindutiao"></div>
              <div class="yizou" ref="jinduB"></div>
            </div>
          </div>
          <div class="run">
            <div class="run-left">
              <span class="touxiang">
                <img :src="data.data.touxiang[0]" alt="正在加载">
              </span>
              <div class="text">
                <div>{{data.data.run.name}}</div>
                <div>{{data.data.run.num}}</div>
              </div>
            </div>
            <!-- <span class="touxiang">
              <img src="../../../assets/pk/touxiang1.png" alt="正在加载">
            </span>
            <span class="touxiang">
              <img src="../../../assets/pk/touxiang2.png" alt="正在加载">
            </span>
            <span class="touxiang">
              <img src="../../../assets/pk/touxiang4.png" alt="正在加载">
            </span>
            <span class="touxiang">
              <img src="../../../assets/pk/touxiang5.png" alt="正在加载">
            </span>-->
            <div v-for="(item,index) in data.data.touxiang" :key="index">
              <span v-if="index > 0" class="touxiang">
                <img :src="item" alt="正在加载">
              </span>
            </div>
          </div>
        </div>
        <div class="rule">
          <!-- rule 比赛规则图层 -->
          <h3 class="title">{{data.data.rule.title}}</h3>
          <!-- <p>1：人数要求2-5人可以参赛</p>
          <p>2：在最短的时间内跑完5公里即可获得胜利</p>
          <p>(奖励：获得50点经验并赢得对手的一枚勋章)</p>-->
          <div v-for="(text,index) in data.data.rule.context" :key="index">
            <p>{{text}}</p>
          </div>
          <button class="anniu" @click="clickHandler">{{flag ? '结束挑战' : '开始挑战'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../../../compoent/nav/top.vue";
import back from "../../../assets/yundongjili_back.png";
export default {
  name: "PK",
  data() {
    return {
      back,
      flag: false,
      data: {}
    };
  },
  mounted() {
    this.$axios({
      url: this.HOST + "/pk",
      method: "get"
    })
      .then(res => {
        this.data = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    TopNav,
  },
  methods: {
    clickHandler() {
      this.flag = !this.flag;
      if (this.flag) {
        this.$nextTick(function() {
          // DOM 现在更新了
          // `this` 绑定到当前实例
          const font = parseInt(document.documentElement.style.fontSize);//获取根元素字体大小计算rem
          if (this.flag) {
            const _this = this;//绑定this
            var timer = "";//定义一个定时器名字
            var yizouA = 0;//定义jinduA已经走过的长度
            var yizouB = 0;//定义jinduB已经走过的长度
            timer = setInterval(() => {
              //随机生成两个数
              var numA = parseInt((Math.random() * (10000 + 1 - 1) + 1) );
              var numB = parseInt((Math.random() * (10000 + 1 - 1) + 1) );
              if (_this.flag === false) {
                clearInterval(timer);
              } else {
                //已走的长度开始增加
                yizouA += numA/5000;
                yizouB += numB/5000;
                //修改html已走的长度
                _this.$refs.jinduB.style.width = yizouA / font + "rem"; 
                _this.$refs.jinduA.style.width = yizouB / font + "rem";
                _this.$refs.xiaorenA.style.left = yizouA / font  + 1  + "rem";
                _this.$refs.xiaorenB.style.right = yizouB / font + 1  + "rem";
                //当走到终点时清除定时器
                if (yizouB / font >= 2 || yizouA / font >= 2) {
                  clearInterval(timer);
                }
              }
            }, 100);
          }
        });
      }
    }
  }
};
</script>

<style lang="less"  scoped >
.connect {
  width: 100%;
  height: 12.06rem;
  background-color: #f8f8f8;
  .confrontation {
    width: 7.1rem;
    height: 7.12rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.3);
    border-radius: 0rem;
    margin: 0.3rem auto 0.25rem;
    padding-top: 0.85rem;
    position: relative;
    .vs-view {
      width: 4.55rem;
      height: 4.45rem;
      background: rgba(255, 255, 255, 0);
      border: 0.06px solid;
      border-image: linear-gradient(
          0deg,
          rgba(157, 72, 254, 1),
          rgba(97, 86, 253, 1)
        )
        0.06 0.06;
      margin: 0 auto;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .pkOne,
      .pkTwo {
        width: 1.85rem;
        height: 1.85rem;
        position: absolute;
      }
      .pkOne {
        top: 0.06rem;
        right: 0.04rem;
      }
      .pkTwo {
        bottom: -0.02em;
        left: 0.04rem;
      }
    }
    .jindu {
      width: 100%;
      height: 0.22rem;
      position: absolute;
      top: 5.6rem;
      left: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .xiaoren {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        z-index: 999;
      }
      .left {
        position: absolute;
        left: 0;
        padding-left: 1rem;
        .xiaoren {
          top: -0.2rem;
          left : 0;
        }
        .yizou {
          left: 1rem;
        }
      }
      .right {
        position: absolute;
        right: 0;
        padding-right: 1rem;
        .xiaoren {
          top: -0.2rem;
          right: 0;
        }
        .yizou {
          right: 1rem;
        }
      }
      .jindutiao {
        width: 2rem;
        height: 0.22rem;
        background-color : white;
        border-radius: 0.1rem;
        border: 0.01rem solid blueviolet;
      }
      .yizou {
        position: absolute;
        width: 0;
        height: 0.18rem;
        background-color: blueviolet;
        border-radius: 0.1rem;
        bottom: 0.02rem;
      }
    }
    .run {
      height: 0.64rem;
      width: 90%;
      margin: 0.6rem auto 0;
      .run-left {
        width: 1.65rem;
        height: 0.64rem;
        background: rgba(169, 169, 169, 0.5);
        border-radius: 0.4rem;
        padding-top: 0.02rem;
        padding-left: 0.02rem;
        float: left;
        .touxiang {
          margin-left: 0;
          margin-top: 0;
        }
        .text {
          height: 0.64rem;
          width: 1rem;
          float: right;
          text-align: left;
          div {
            height: 0.19rem;
            font-size: 0.2rem;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            margin: 0;
            padding: 0;
            color: rgba(76, 76, 76, 1);
            margin-bottom: 0.1rem;
          }
        }
      }
    }
  }
  .touxiang {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    display: block;
    float: left;
    margin-left: 0.15rem;
    margin-top: 0.02rem;
    border: 0.01px solid rgba(140, 87, 255, 1);
    img {
      width: 100%;
    }
  }
  .rule {
    width: 5.6rem;
    height: 3.27rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0rem 0rem 0rem rgba(0, 0, 0, 0.3);
    border-radius: 0rem;
    position: relative;
    margin: 0 auto;
    .title {
      font-size: 0.32rem;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      padding-top: 0.25rem;
      text-align: center;
    }
    p {
      width: 4rem;
      font-size: 0.2rem;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(76, 76, 76, 1);
      margin: 0 auto;
    }
    .anniu {
      position: absolute;
      bottom: -0.25rem;
      left: 50%;
      width: 2.11rem;
      height: 0.55rem;
      background: rgba(187, 136, 246, 1);
      border-radius: 0.15rem;
      outline: none;
      padding: 0;
      margin: 0;
      margin-left: -1.05rem;
      color: rgba(255, 255, 255, 1);
      font-size: 0.3rem;
      font-family: MicrosoftYaHei;
      border: 1px solid transparent;
    }
  }
}
</style>
