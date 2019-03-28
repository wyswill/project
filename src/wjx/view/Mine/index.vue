<template>
  <div class="mine_box">
    <top_nav middle="我"></top_nav>
    <div>
      <img :src="userinfo.bg" alt>
    </div>
    <div class="center">
      <div class="center_img">
        <span>
          <img :src="userinfo.head_icon" alt>
        </span>
        <div class="center_p">
          <p>{{userinfo.username}}</p>
          <p>{{userinfo.fan}}粉丝 {{userinfo.guanzhu}}关注 {{userinfo.shear}}分享</p>
          <p>{{userinfo.title}}</p>
        </div>
      </div>

      <div class="foot_ul">
        <router-link to="dongtai">
          <div class="mine_p">
            <p>个人动态</p>
            <div class="mine_img">
              <img :src="aa" alt>
            </div>
          </div>
        </router-link>
        <div class="mine_p">
          <p>运动等级</p>
          <div class="mine_img">
            <img :src="aa" alt>
          </div>
        </div>
        <div class="mine_p">
          <p>我的勋章</p>
          <div class="mine_img">
            <img :src="aa" alt>
          </div>
        </div>
      </div>
    </div>
    <BottomNav/>
  </div>
</template>

<script>
import top_nav from "../../../compoent/nav/top";
import BottomNav from "../../../compoent/bottom/index";
import back from "../../../assets/img/wjx/yundongjili_back.png";
import { mapState, mapActions } from "vuex";
export default {
  name: "Mine",
  computed: {
    ...mapState(["user_info"])
  },
  data() {
    return {
      aa: "http://192.168.1.123:3000/data/wjx/aa.jpg",
      userinfo: {}
    };
  },
  components: {
    top_nav,
    BottomNav
  },
  async mounted() {
    var  user  = JSON.parse(decodeURIComponent(sessionStorage.getItem('user')));
    if (!user) {
      this.$router.push("login");
    }else{
      var { username } = user
    }
    //请球数据
    let res = await this.$axios(
      `http://192.168.1.123:3000/getuserinfo?username=${username}`
    );
    this.userinfo = res.data;

  }
 
};
</script>

<style scoped>
.mine_box {
  height: 100%;
  background-color: rgba(248, 248, 248, 1);
}
.mine_box img {
  width: 7.5rem;
  height: 3.13rem;
}
.center {
  background: rgba(248, 248, 248, 1);
  width: 7.5rem;
  height: 3.13rem;
  float: left;
  /* margin-top: -1rem; */
}
.center_img {
  width: 7.1rem;
  height: 2.01rem;
  background-color: #ffffff;
  box-shadow: 0rem 0rem 0rem 0rem rgba(19, 19, 19, 0.3);
  border-radius: 0.2rem;
  margin: 0 auto;
  overflow: hidden;
}
.center_img img {
  margin-top: 0.5rem;
  width: 0.85rem;
  height: 0.85rem;
  float: left;
}

.foot_ul {
  height: 7rem;
  background: rgba(248, 248, 248, 1);
}
.center_p {
  width: 5.5rem;
  margin-left: 1.3rem;
  overflow: hidden;
}

.center_p p {
  margin-top: 0.3rem;
}
.center_img p {
  width: 3.8rem;
  height: 0.1rem;
  font-size: 0.21rem;
}
.mine_p {
  width: 7rem;
  height: 1rem;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.mine_p p {
  width: 4rem;
  line-height: 1rem;
  float: left;
  margin-left: 0.2rem;
}

.mine_img img {
  width: 0.25rem;
  height: 0.24rem;
  float: left;
  margin-left: 2rem;
  margin-top: 0.3rem;
}
</style>

