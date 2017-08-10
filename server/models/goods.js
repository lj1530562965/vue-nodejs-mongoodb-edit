var mongoose = require('mongoose')
var Schema =mongoose.Schema// schema定义表模型
var productSchema = new Schema({
  'productId': {type: String},
  'productName': String,
  'salePrice': Number,
  'productImage': String
})// 定义商品模型
module.exports = mongoose.model('Good', productSchema)// 将model模型输出去，输出去后可以基于这个模型调用api方法
