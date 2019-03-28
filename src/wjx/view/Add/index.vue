<template>
  <div class="add_p">
    <TopNav :left="back" :middle="title"></TopNav>
    <P class="yixuan">已选课程</P>
    <div v-if="this.yixuan.length === 0" class="no">
      <p>没有课程 ，请点击加载更多按钮选择课程</p>
    </div>
    <div v-else class="add_img">
      <div v-for="(ele,index) in this.yixuan" :key="index" class="box">
        <img :src="ele.data.img" alt="正在加载">
        <h3>{{ele.data.name}}</h3>
        <div class="text">
          <span>{{ele.data.time}}分钟</span>
          <span>{{ele.data.kaluli}}千卡</span>
        </div>
      </div>
    </div>
    <div v-if="flag" class="add_img">
      <P class="yixuan">请选择课程</P>
      <div v-for="(ele,index) in this.data" :key="ele.id" class="box" @click="clickHandler(ele,index)">
        <img :src="ele.img" alt="正在加载">
        <h3>{{ele.name}}</h3>
        <div class="text">
          <span>{{ele.time}}分钟</span>
          <span>{{ele.kaluli}}千卡</span>
        </div>
      </div>
    </div>
    <div class="add_foot" @click="loadMoreHandler">
      <img :src="xiala" alt>
      <p>{{this.flag ? '关闭推荐教程' : '下滑查看推荐教程' }}</p>
    </div>
   
  </div>
</template>

<script>
import TopNav from "../../../compoent/nav/top";
import back from "../../../assets/yundongjili_back.png";
import { mapActions } from "vuex";
export default {
  name: "Add",
  data() {
    return {
      back,
      data: {},
      title: "",
      xiala: "",
      flag: false,
      yixuan: {},
    };
  },
  components: { TopNav },
  mounted() {
    this.yixuan = this.$store.state.class;
    this.$axios({
      url: this.HOST + "/add",
      method: "get"
    })
      .then(res => {
        (this.data = res.data.array), (this.title = this.data[0].title);
        this.xiala = this.data[0].xiala;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["addClass"]),
    clickHandler(data,index) {
      this.data.splice(index,1)
      //点击时删除当前点击元素
      if (this.yixuan.length > 0) {
        //判断是否存在已选课程
        if (this.$store.state.class.find(ele => data.id === ele.data.id)) {
          //判断是否课程重复
          console.log("课程存在")
        } else {
          this.addClass({
            data
          });//添加到vuex中
          this.yixuan = this.$store.state.class;
          //赋值到data中
          this.$notification.open({
            message:  "添加成功",
            icon: <a-icon type="smile" />
          })
          //添加提示框
        }
      } else {
        this.addClass({
          data
        });
        this.yixuan = this.$store.state.class;
      }
    },
    loadMoreHandler() {
      this.flag = !this.flag;
    },
    
  }
};
</script>


<style scoped lang='less'>
.add_p {
  width: 7.1rem;
  height: 2.28rem;
}
.no {
  padding-left: 0.5rem;
}
.yixuan {
  width: 2rem;
  height: 0.3rem;
  font-size: 0.32rem;
  font-weight: 400;
  color: rgba(140, 87, 255, 1);
  margin-left: 0.4rem;
}
.add_img {
  width: 7.5rem;
}
.box {
  width: 100%;
  height: 2.28rem;
  position: relative;
  margin-bottom: 0.2rem;
  padding-left: 0.2rem;
  h3 {
    position: absolute;
    top: 0.6rem;
    left: 1rem;
    text-align: center;
    font-size: 0.36rem;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
  }
  .text {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    span {
      font-size: 0.2rem;
      margin-right: 0.2rem;
    }
  }
}

.add_img img {
  width: 96%;
  height: 100%;
  margin: 0 auto;
}
.add_foot {
  width: 4rem;
  height: 1rem;
  margin-top: -2rem;
}
.add_foot {
  width: 0.3rem;
  height: 0.32rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  text-align: center;
}
.add_foot img {
  width: 0.3rem;
  height: 0.32rem;
}
.add_foot p {
  width: 2rem;
  height: 0.19rem;
  font-size: 0.2rem;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-left: -0.7rem;
}
</style>

