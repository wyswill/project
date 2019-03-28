const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");
const Router = require("koa-router");
const router = new Router();
const path = require("path");
const bodyParser = require("koa-bodyparser");
app.use(
  bodyParser(ctx => {
    return /\.json$/i.test(ctx.path);
  })
); // 解析request的body
/* 设置静态资源 */
const main = static(path.join(__dirname));
app.use(main);
/* 数据 */
const pk_data = require("./data/pk/index");
/* lib */
const Mock = require("mockjs");
/* mongoDb */
const db = require("./mongoDb/index");
db.init();
/* router */
router.get("/", async ctx => {
  ctx.body = "ok";
});
/* pk数据 */
router.get("/pk", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = pk_data;
});
/*添加课程 */
router.get("/add", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let data = Mock.mock({
    array: [
      {
        title: "添加课程",
        "kaluli|100-500": 335,
        name: "短跑训练(一)",
        "time|1-30": 10,
        xiala: "http://192.168.1.123:3000/data/wjx/tianjia5.jpg",
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng5.png"
      },
      {
        "kaluli|500-999": 200,
        name: "长跑训练",
        "time|30-80": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng2.png"
      },
      {
        "kaluli|100-999": 140,
        name: "跑步机减脂",
        "time|1-40": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng4.png"
      },
      {
        "kaluli|200-999": 111,
        name: "全身放松训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng1.png"
      },
      {
        "kaluli|100-999": 120,
        name: "五式跳绳训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng3.png"
      },
      {
        "kaluli|500-999": 200,
        name: "长跑训练",
        "time|30-80": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng2.png"
      },
      {
        "kaluli|100-999": 140,
        name: "跑步机减脂",
        "time|1-40": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng4.png"
      },
      {
        "kaluli|200-999": 111,
        name: "全身放松训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng1.png"
      },
      {
        "kaluli|100-999": 120,
        name: "五式跳绳训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng3.png"
      },
      {
        "kaluli|500-999": 200,
        name: "长跑训练",
        "time|30-80": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng2.png"
      },
      {
        "kaluli|100-999": 140,
        name: "跑步机减脂",
        "time|1-40": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng4.png"
      },
      {
        "kaluli|200-999": 111,
        name: "全身放松训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng1.png"
      },
      {
        "kaluli|100-999": 120,
        name: "五式跳绳训练",
        "time|1-60": 10,
        id: Math.random()
          .toString()
          .slice(2),
        img: "http://192.168.1.123:3000/data/Add/images/kecheng3.png"
      }
    ]
  });
  ctx.body = data;
});
/* 分享数据 */
router.get("/share", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let res = await db.find("shear", {});
  ctx.body = res;
});
/* 运动数据 */
router.get("/sportsrecord", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let data = Mock.mock({
    array: [
      { "value|100-800": 335, name: "减脂" },
      { "value|100-800": 310, name: "塑形" },
      { "value|100-800": 234, name: "增肌" },
      { "value|100-800": 135, name: "跑步" }
    ]
  });
  ctx.body = data;
});

/* 表格数据 */
router.get("/tables", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let data = Mock.mock({
    array: [
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800),
      Mock.Random.natural(100, 800)
    ]
  });
  ctx.body = data;
});
/* 注册 */
router.post("/logup", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let postData = ctx.request.query;
  let { username } = ctx.request.query;
  console.log(username);
  let res = await db.findOne("users", { username });

  if (res) {
    ctx.body = {
      statu: false,
      message: "该用户已存在!"
    };
  } else {
    await db.insertOne("users", postData);
    ctx.body = {
      statu: true,
      message: "用户注册成功!"
    };
  }
});
/* 登陆 */
router.post("/login", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let { username } = ctx.request.query;
  let res = await db.findOne("users", { username });
  ctx.body = res ? { statu: true } : { statu: false };
});
/* 获取用户信息 */
router.get("/getuserinfo", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  let { username } = ctx.query;
  let res = await db.findOne("userinfo", { username });
  ctx.body = res;
});
/* sport数据 */
router.get("/sport", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = sport_data;
});
/* test数据 */
router.get("/test", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = test_data;
});
/* challenge数据 */
router.get("/challenge", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = challenge_data;
});
/* train数据 */
router.get("/train", async ctx => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = train_data;
});

/* 设置路由 */
app.use(router.routes(), router.allowedMethods());
app.listen(3000, () => {
  console.log("服务器运行在3000端口");
});