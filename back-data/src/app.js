const Koa = require('koa2'),
      KoaStatic = require('koa-static')
const router = require('./routers/router.js')()

const app = new Koa()

app.use(router)
   .use(KoaStatic((__dirname + '/static/goods')))

app.listen('3000', () => {
  console.log('running...')
})