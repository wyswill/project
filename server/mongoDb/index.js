var MongoClient = require("mongodb").MongoClient;
const dbs = {
  init(dbName = "user") {
    MongoClient.connect("mongodb://192.168.1.123:27017", (err, client) => {
      if (err) console.log(err);
      this.db = client.db(dbName);
    });
  },
  /* ==========================添加============================= */
  /**
   * 插入单条数据
   * @param {sstring} collection 要插入的集合
   * @param {json} data 要插入的数据
   */
  async insertOne(collection, data) {
    return new Promise(reslove => {
      this.db.collection(collection).insert(data, (err, res) => {
        if (err) console.log(err);
        reslove(res);
      });
    });
  },
  async insertMany(collection, data) {
    return new Promise(reslove => {
      this.db.collection(collection).insertMany(data, (err, results) => {
        if (err) console.log(err);
        reslove(results);
      });
    });
  },
  /* ========================查找============================= */
  // 根据条件查找数量
  async count(collection, data) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .count(data)
        .then(function(count) {
          reslove(count);
        });
    });
  },
  /*查找
   * collection：集合
   * obj:
   *   whereObj:条件，默认是{}
   *   sortObj:排序，默认是{}
   *   limit:显示提定条数,默认是0
   *   skip:跳过指定条数，默认是0*/
  async find(collection, obj) {
    //如果有条件，将条件赋值给obj.whereObj,没有传条件默认为{}
    obj.whereObj = obj.whereObj || {};
    obj.sortObj = obj.sortObj || {};
    obj.limit = obj.limit || 0;
    obj.skip = obj.skip || 0;
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .find(obj.whereObj)
        .sort(obj.sortObj)
        .limit(obj.limit)
        .skip(obj.skip)
        .toArray(function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  /*
   * 查找一条记录*/
  async findOne(collection, whereObj) {
    return new Promise((reslove, reject) => {
      this.db.collection(collection).findOne(whereObj, function(err, results) {
        if (err) console.log(err);
        reslove(results);
      });
    });
  },
  //根据ID来查找记录
  async findOneById(collection, id) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .findOne({ _id: mongothis.db.ObjectId(id) }, (err, results) => {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  // *********************修改******************************************/
  //根据ID修改一条记录
  async updateOneById(collection, id, upObj) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .updateOne({ _id: mongothis.db.ObjectId(id) }, upObj, function(
          err,
          results
        ) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  //修改一条记录
  async updateOne(collection, whereObj, upObj) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .updateOne(whereObj, upObj, function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  //修改多条记录
  async updateMany(collection, whereObj, upObj) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .updateMany(whereObj, upObj, function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  /**********************删除**************************************/
  //根据ID来删除一条记录
  async deleteOneById(collection, id) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .deleteOne({ _id: mongothis.db.ObjectId(id) }, function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  //删除一条记录
  async deleteOne(collection, whereObj) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .deleteOne(whereObj, function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  },
  //删除多条记录
  async deleteMany(collection, whereObj) {
    return new Promise(reslove => {
      this.db
        .collection(collection)
        .deleteMany(whereObj, function(err, results) {
          if (err) console.log(err);
          reslove(results);
        });
    });
  }
};
module.exports = dbs;
