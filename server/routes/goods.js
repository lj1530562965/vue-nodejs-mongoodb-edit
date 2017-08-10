var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods')

mongoose.connect('mongodb://127.0.0.1:27017/db_demo')// 连接mongodb数据库
// 如果有账号密码：mongoose.connect('mongodb://root:123456@127.0.0.1:27017/db_demo')
mongoose.connection.on('connected', function () {
  console.log('mongodb connected success.')
})
mongoose.connection.on('error', function () {
  console.log('mongodb connected fail.')
})
mongoose.connection.on('disconnected', function () {
  console.log('mongodb connected disconnected.')
})
router.get('/', function (req, res, next) {
  Goods.find({},function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })// 输出json文件
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
})
module.exports = router;
