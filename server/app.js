require('dotenv').config()
const Koa = require('koa')
// const BodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const PORT = process.env.PORT || 3000
// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });


router
  .get('/', async (ctx, next) => {
    // ctx.router available
    ctx.body = 'Hello World'
    await next()
  })
  .get('/subjects', async (ctx, next) => {
    // ctx.router available
    ctx.body = ['English', 'Math']
    await next()
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
  // .use(BodyParser())
  // .use(async ctx => {
  //   ctx.body = 'Hello World'
  // })
  .listen(PORT, () => console.log(`Listening on port ${PORT}`))