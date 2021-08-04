const router = require('koa-router')()

router.get('/cart', async (ctx, next) => {
  ctx.body = 'shopping cart'
})
module.exports = router