<template>
  <div class="spor clear">
    <!-- 顶部导航 -->
    <top_nav :left="back" middle="运动记录"></top_nav>
    <div class="warp">
      <!-- tab表 -->
      <tables></tables>
      <div class="tab">
        <div id="tables"></div>
      </div>
    </div>
  </div>
</template>

<script>
import top_nav from "../../../compoent/nav/top.vue";
import tables from "./tabs";
import echarts from "echarts";
import back from "../../../assets/yundongjili_back.png";
export default {
  data() {
    return {
      back
    };
  },
  name: "Sportsrecord",
  components: { top_nav, tables },
  methods: {
    callback(key) {
      this.drawPieChart();
    },
    async drawPieChart() {
      let title = new Date().toLocaleDateString();
      this.chartPie = echarts.init(document.querySelector("#tables"));
      this.chartPie.setOption({
        color: ["#00C7FE", "#B5BABE", "#8C57FF", "#CB47D9"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        clockwise: true,
        labelLine: {
          show: true,
          length: 10,
          color: ["#000"]
        },
        legend: {
          show: false,
          orient: "vertical",
          x: "left",
          data: ["减脂", "塑形", "增肌", "跑步"]
        },
        series: [
          {
            name: "减脂",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 335, name: "减脂" },
              { value: 310, name: "塑形" },
              { value: 234, name: "增肌" },
              { value: 135, name: "跑步" }
            ]
          }
        ]
      });
      let res = await this.$axios("http://192.168.1.123:3000/sportsrecord");
      this.chartPie.setOption({
        series: [{ name: "减脂", data: res.data.array }]
      });
    },
    drawCharts() {
      this.drawPieChart();
    }
  },
  async mounted() {
    this.drawCharts();
  }
};
</script>

<style lang="less" scoped>
.tab {
  width: 100%;
  height: 5rem;
  #tables {
    width: 100%;
    height: 5rem;
  }
}
</style>
