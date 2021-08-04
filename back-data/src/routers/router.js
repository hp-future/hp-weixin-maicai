//compose模块可以将多个中间件函数合并成一个大的中间件函数，然后调用这个中间件函数就可以依次执行添加的中间件函数，执行一系列的任务。
const compose = require('koa-compose')
//允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件
const glob = require('glob')
//resolve方法会把一个路径或路径片段的序列解析为一个绝对路径。
const { resolve } = require('path')

const router = () => {
  const routers = []
  glob.sync(resolve(__dirname, '**/index.js')).forEach(routerPath => {
    routers.push(require(routerPath).routes())
    routers.push(require(routerPath).allowedMethods())
  })
  return compose(routers)
}

module.exports = router