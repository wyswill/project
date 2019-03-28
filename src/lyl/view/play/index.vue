<template>
  <div class="play_root">
    <Nav :left="back" middle="音乐"/>
    <div class="touXiang">
      <img :src="play_touxiang" alt>
    </div>
    <div class="lyarc">
        <LRC :id="mid" :currentTimes="currentTimes" :durationTime="durationTime"/>
    </div>
    <div class="player">
      <audio
        ref="player"
        v-if="playerData.bitrate"
        :src="playerData.bitrate.file_link"
        controls
      >您的浏览器不支持 audio 标签。</audio>
    </div>
  </div>
</template>
<script>
import Nav from "../../../compoent/nav/top.vue";
import back from "../../../assets/yundongjili_back.png";
import LRC from "../../component/LRC"
import play_touxiang from "../../../assets/play/play_touxiang.gif";
export default {
  name: "Play",
  components: {
    Nav,
    LRC
  },
  data() {
    return {
      back,
      play_touxiang,
      playerData: {},
      mid:877578,
      currentTimes:0,
      durationTime:0
    };
  },
  mounted() {
    this.$axios
      .get("http://www.wwtliu.com/sxtstu/music/baidu/play.php", {
        params: {
          mid: this.mid
        }
      })
      .then(res => {
        this.playerData = res.data;
        this.$nextTick(function() {
          // DOM 现在更新了
          this.playerEvent();
        });
      });
  },
  methods:{
      playerEvent() {
      var _this = this;
      // 注册两个事件:当前播放事件，总播放时长
      //timeupdate 监听时间更新
      //canplay  监听总时长
      this.$refs.player.addEventListener("timeupdate", function() {
        // 指示音频/视频播放的当前位置（以秒计）。
        _this.currentTimes = _this.$refs.player.currentTime;
      });
      this.$refs.player.addEventListener("canplay", function() {
        _this.durationTime = _this.$refs.player.duration;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.play_root {
  width: 7.5rem;
  height: 13.34rem;
  background: rgba(253, 253, 253, 1);
  .touXiang {
    width: 4.89rem;
    height: 4.89rem;
    margin: 0.4rem 1.305rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .lyarc {
    width: 5rem;
    height: 4rem;
    // background-color: #999;
    text-align: center;
    margin: 0.5rem auto;
  }
  .player{
      width: 7.5rem;
      height: 1rem;
      text-align: center
  }
}
</style>
