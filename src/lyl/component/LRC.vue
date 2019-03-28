<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p
        :class="{'active':currentTimes >= allkeys[index]  && currentTimes < allkeys[index+1]}"
        v-for="(value,key,index) in lrcData"
        class="lrc-p"
        :key="index"
      >{{ value }}{{ getScrollTop(index) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LRC",
  data() {
    return {
      lrcData: {},
      allkeys: []
    };
  },
  props: {
    id: {
      type: [Number, String],
      default: 0
    },
    currentTimes: {
      type: [Number, String],
      default: 0
    },
    durationTime: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    getAllKeys() {
      for (var i in this.lrcData) {
        this.allkeys.push(i);
      }
    },
    setLRC(data) {
      //截取数据  分割成一行一行的 /n 来分割
      var lyrics = data.lrcContent.split("\n");
      var lrcObj = {}; // 存储对象
      for (let i = 0; i < lyrics.length; i++) {
        //解码操作
        var lyric = decodeURIComponent(lyrics[i]);
        //定义截取前面的时间正则   [00:11.22]  [00:11:22]
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        // 时间 match检索字符串 参数是正则规则   （返回值  可以是一个数组 在本次例子中 只有一个返回值  是数组还是字符串？？）
        var timeRegExpArr = lyric.match(timeReg); // test  输出: [03:56.62]  歌词
        //如果 匹配的正则为空  就是说没有时间的话  结束本次循环
        if (!timeRegExpArr) continue; // break
        // 歌词  每条数据 是时间的 替换成空 为了拿到歌词
        var clause = lyric.replace(timeReg, "");
        // 时间字符串转化可对比的时间
        var t = timeRegExpArr[0];
        var min = Number(String(t.match(/\[\d*/i)).slice(1));
        var sec = Number(String(t.match(/\:\d*/i)).slice(1));
        var time = min * 60 + sec;
        lrcObj[time] = clause;
      }
      this.lrcData = lrcObj;
      //   console.log(lrcObj);
      this.getAllKeys();
    },
    getScrollTop(index) {
      if (this.currentTimes >= this.allkeys[index] && this.currentTimes < this.allkeys[index + 1]) {
        this.$refs.lrc.style.top = -((index - 2) * 45) + "px";
      }
    }
  },
  mounted() {
    this.$axios
      .get("http://www.wwtliu.com/sxtstu/music/baidu/lrc.php", {
        params: {
          mid: this.id
        }
      })
      .then(res => {
        //   console.log(res.data.lrcContent);
        this.setLRC(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.active {
  color: red;
  font-size: 16px;
  font-weight: 600;
}

.lrcContainer {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
}

.up30 {
  margin-top: -30px;
}
</style>

