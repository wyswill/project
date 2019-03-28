import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  linkExactActiveClass: "exactActive",
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      redirect: { name: "boot" }
    },
    {
      path: "/boot",
      name: "boot",
      component: () => import("./wys/view/boot/index.vue")
    },
    {
      path: "/sportsrecord",
      name: "Sportsrecord",
      component: () => import("./wys/view/Sportsrecord/index.vue")
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./lyl/view/login/index.vue")
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("./ll/view/test/index.vue")
    },
    {
      path: "/sport",
      name: "Sport",
      component: () => import("./ll/view/sport/index.vue")
    },
    {
      path: "/challenge",
      name: "Challenget",
      component: () => import("./ll/view/challenge/index.vue")
    },
    {
      path: "/train",
      name: "Train",
      component: () => import("./ll/view/train/index.vue")
    },
    {
      path: "/play",
      name: "Play",
      component: () => import("./lyl/view/play/index.vue")
    },
    {
      path: "/share",
      name: "share",
      component: () => import("./lyl/view/share/index.vue")
    },
    {
      path: "/timer",
      name: "timer",
      component: () => import("./lyl/view/timer/index.vue")
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("./wjx/view/Mine/index.vue")
    },
    {
      path: "/add",
      name: "Add",
      component: () => import("./wjx/view/Add/index.vue")
    },
    {
      path: "/map",
      name: "map",
      component: () => import("./wys/view/map/index.vue")
    },
    {
      path: "/pk",
      name: "PK",
      component: () => import("./zz/view/pk/index.vue")
    },
    {
      path: "/swiper",
      name: "Swiper",
      component: () => import("./wjx/view/Swiper/index.vue")
    },
    {
      path: "/dongtai",
      name: "DongTai",
      component: () => import("./lyl/view/dongtai/index.vue")
    }
  ]
});
