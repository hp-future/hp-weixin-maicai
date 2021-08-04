const router = require('koa-router')()
const { dbGet } = require('../../mysql/request/index')

// 查询商品列表
router.get('/goodsList', async (ctx, next) => {
  const queryParams = ctx.query
  const sql = `select * from wexin.goods where goods_class = "${queryParams.goodsClass}"`
  await dbGet(sql, ctx)
})
// 查询商品分类
router.get('/goodsClassList', async (ctx, next) => {
  const sql = `select * from wexin.goods_class`
  await dbGet(sql, ctx)
})
module.exports = router