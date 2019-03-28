<template>
  <div id="container"></div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["location"],
  methods: {
    ...mapActions(["add_postition"]),
    ...mapState(["position"]),
    mapInit() {
      let mapObj = new AMap.Map("container", {
        zoom: 13, //设置地图显示的缩放级别
        resizeEnable: true,
        doubleClickZoomL: false,
        layers: [
          new AMap.TileLayer({
            zooms: [3, 20], //可见级别
            visible: true, //是否可见
            opacity: 1, //透明度
            zIndex: 0 //叠加层级
          })
        ], //设置图层,可设置成包含一个或多个图层的数组
        mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
        viewMode: "2D", //设置地图模式
        lang: "zh_cn" //设置地图语言类型
      });
      mapObj.setCenter(this.position()[0]);
      mapObj.plugin("AMap.Geolocation", function() {
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
      });
    },
    get_locationimg() {
      var watchID = navigator.geolocation.watchPosition(function(position) {
        this.updata_position(
          position.coords.latitude,
          position.coords.longitude
        );
      });
      this.watchID = watchID;
    },
    updata_position(x, y) {
      this.add_postition([x, y]);
      console.log([x, y]);
    }
  },
  mounted() {
    this.add_postition(this.location);
    this.mapInit();
    this.get_locationimg();
  }
};
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 6.73rem;
}
</style>
