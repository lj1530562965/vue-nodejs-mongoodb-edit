var mongoose = require('mongoose')
var Schema = mongoose.Schema// schema定义表模型
var userSchema = new Schema({
  'userId': String,
  'userName': String,
  'userPwd': String,
  'orderList': Array,
  'cartList': [{
    'productId': {type: String},
    'productName': String,
    'salePrice': Number,
    'productImage': String,
    'checked': String,
    'productNum': String
  }],
  'addressList': Array
})// 定义商品模型
module.exports = mongoose.model('User', userSchema)// 将model模型输出去，输出去后可以基于这个模型调用api方法
