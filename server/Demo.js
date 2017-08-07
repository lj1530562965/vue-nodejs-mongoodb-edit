let user = require('./User')
console.log(`userName:${user.userName}`)
console.log(`sayHello:${user.sayHello()}`)

let http = require('http')
let url = require('url')
let util =require('util')
let server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  // 地址栏输入http://127.0.0.1:3000/index.html?a=123#tag
  console.log(`url:${req.url}`)// /index.html?a=123
  console.log(`url.parse:${url.parse(req.url)}`)// [object Object]
  console.log(`util.inspect:${util.inspect(url.parse(req.url))}`)// util.inspect将对象转成字符串进行输出,一般用于调试用
  // Url {
  // protocol: null,
  //  slashes: null,
  //  auth: null,
  //  host: null,
  //  port: null,
  //  hostname: null,
  //  hash: null,
  //  search: '?a=123',
  //  query: 'a=123',
  //  pathname: '/index.html',
  //  path: '/index.html?a=123',
  //  href: '/index.html?a=123' }
  res.end(util.inspect(url.parse(req.url)))
})
server.listen(3000, '127.0.0.1', () => {
  console.log('服务器已经运行，请打开浏览器，输入http://127.0.0.1:3000/来进行访问')
})
