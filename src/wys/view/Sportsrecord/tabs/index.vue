<template>
  <a-tabs @change="callback" type="card" tabPosition="right">
    <a-tab-pane tab="减脂" key="0">
      <div id="one" style="width:6rem; height:5rem;"></div>
    </a-tab-pane>
    <a-tab-pane tab="塑形" key="1">
      <div id="two" style="width:6rem; height:5rem;"></div>
    </a-tab-pane>
    <a-tab-pane tab="增肌" key="2">
      <div id="three" style="width:6rem; height:5rem;"></div>
    </a-tab-pane>
    <a-tab-pane tab="跑步" key="3">
      <div id="fore" style="width:6rem; height:5rem;"></div>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: {
    voltage: Array
  },
  methods: {
    callback(key) {
      let temp = ["one", "two", "three", "fore"];
      let name = ["减脂", "塑形", "增肌", "跑步"];
      setTimeout(() => {
        this.drawPieChart(temp[key], name[key]);
      }, 0);
    },
    async drawPieChart(id = "one", name = "减脂") {
      const this_ = this;
      let title = new Date().toLocaleDateString();
      let ele = document.getElementById(id);
      this.chartPie = echarts.init(ele);
      this.chartPie.setOption({
        title: {
          text: title,
          textStyle: {
            align: "center"
          }
        },
        textStyle: {
          color: "#fff"
        },
        color: ["#8955FF"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          show: false,
          data: ["减脂", "塑形", "增肌", "跑步"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false
          }
        ],
        series: [
          {
            name,
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
      let res = await this.$axios("http://192.168.1.123:3000/tables");
      this.chartPie.setOption({
        series: [
          {
            name,
            data: res.data.array
          }
        ]
      });
    },
    drawCharts() {
      this.drawPieChart();
    }
  },
  mounted() {
    this.drawCharts();
  }
};
</script>
<style lang="less" scoped>
.ant-tabs {
  margin: 10px 0;
  background: #fff;
  box-shadow: 0 0 3px 1px #c7c7c7;
}
</style>
