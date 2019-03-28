<template>
  <a-carousel class="swiper_box" :dots="true" :autoplay="false" :beforeChange="beforechange">
    <div class="swiper_img" v-for="(ele,index) in info" :key="index">
      <img :src="ele.img_src" alt>
      <h3>{{ele.title}}</h3>
      <p>{{ele.content}}</p>
    </div>
  </a-carousel>
</template>
<script>
export default {
  data() {
    return {
      info: [
        {
          img_src: "http://192.168.1.123:3000/data/wjx/1.jpg",
          title: "挑战系统",
          content:
            "入挑战模式，与其他i动运动者一起挑战跑步极限尽享运动带来的非凡感受。"
        },
        {
          img_src: "http://192.168.1.123:3000/data/wjx/2.jpg",
          title: "科学锻炼",
          content:
            "多位资深教练亲力师范动作，并运用科学的时间、强 度安排，为您定制适合的课程。"
        },
        {
          img_src: "http://192.168.1.123:3000/data/wjx/3.jpg",
          title: "勋章系统",
          content:
            "丰富的勋章系统，令您在完成运动目标的同时，增加一枚属于您自己的“军功章”。"
        }
      ]
    };
  },
  methods: {
    beforechange(from, to) {
      if (to == 0) {
        this.$router.push("sport");
      }
    }
  }
};
</script>

<style scoped>
.swiper_box {
  margin: 0 auto;
}
.swiper_box img {
  width: 100%;
}
.swiper_box h3 {
  width: 3rem;
  height: 0.46rem;
  font-size: 0.49rem;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin: 0 auto;
  text-align: center;
}
.swiper_box p {
  width: 4.66rem;
  height: 0.56rem;
  font-size: 0.2rem;
  font-weight: 500;
  color: rgba(76, 76, 76, 1);
  margin: 0 auto;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
