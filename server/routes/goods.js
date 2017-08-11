var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
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
// 查询商品列表数据
router.get('/', function (req, res, next) {
  let page = parseInt(req.param('page'))
  let pageSize = parseInt(req.param('pageSize'))
  let sort = req.param('sort')
  let skip = (page - 1) * pageSize
  let priceLevel = req.param('priceLevel')
  var priceGt = '', priceLte = ''
  let params = {}
  if (priceLevel !== 'all') {
    switch (priceLevel) {
      case '0':priceGt = 0; priceLte = 500; break
      case '1':priceGt = 500; priceLte = 1000; break
      case '2':priceGt = 1000; priceLte = 2000; break
    }
    params = {
      salePrice: {
        $gt: priceGt,
        $lte: priceLte
      }
    }
  }
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({'salePrice': sort})
  goodsModel.exec(function (err, doc) {
    if(err){
      res.json({
        status: '1',
        msg: err.message
      })// 输出json文件
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})
// 加入到购物车
router.post('/addCart', function (req, res, next) {
  var User = require('../models/users')
  var productId = req.body.productId// get取参数用param，post取参用body
  var userId = '100000077'
  User.findOne({userId: userId}, function (err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })// 输出json文件
    } else {
      console.log('userDoc:' + userDoc)
      if (userDoc) {
        let goodsItem = ''
        userDoc.cartList.forEach(function (item) {
          if (item.productId === productId) {
            goodsItem = item
            item.productNum++
          }
        })
        if (goodsItem) {
          userDoc.save(function (err2, doc2) {
            if (err2) {
              res.json({
                status: '1',
                msg: err2.message
              })// 输出json文件
            } else {
              res.json({
                status: '0',
                msg: '',
                result: 'success'
              })
            }
          })
        } else {
          Goods.findOne({productId: productId},function (err1,doc) {
            if (err1) {
              res.json({
                status: '1',
                msg: err1.message
              })// 输出json文件
            } else {
              if (doc) {
                doc.productNum = 1
                doc.checked = 1
                userDoc.cartList.push(doc)
                userDoc.save(function (err2, doc2) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err2.message
                    })// 输出json文件
                  } else {
                    res.json({
                      status: '0',
                      msg: '',
                      result: 'success'
                    })
                  }
                })
              }
            }
          })
        }
      }
    }
  })
})
module.exports = router
