require('dotenv').config();
const Koa = require('koa')
const cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const { dbConnect, dbDisconnect } = require('./db')
const {
  getAllAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment
} = require('./assignment/service')

const PORT = process.env.PORT || 3000
const app = new Koa()
const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = 'Welcome to the API server'
    await next()
  })
  .get('/assignment', async (ctx, next) => {
    try {
      ctx.body = await getAllAssignments()
    } catch (err) {
      ctx.throw(400)
    } finally {
      await next()
    }
  })
  .post('/assignment', async (ctx, next) => {
    try {
      const { name, dueDate, status, subject } = ctx.request.body
     ctx.body = await addAssignment(name, dueDate, status, subject)
    } catch (err) {
      ctx.throw(400)
    } finally {
      await next()
    }
  })
  .put('/assignment/:id', async (ctx, next) => {
    try {
      const { id } = ctx.params
      const { name, dueDate, status, subject } = ctx.request.body
      ctx.body = await updateAssignment(id, name, dueDate, status, subject)
    } catch (err) {
      ctx.throw(400)
    } finally {
      await next()
    }
  })
  .del('/assignment/:id', async (ctx, next) => {
    try {
      const { id } = ctx.params
      ctx.body = await deleteAssignment(id)
    } catch (err) {
      ctx.throw(400)
    } finally {
      await next()
    }
  })

app
  .use(cors({ origin: '*' }))
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .on('error', err => console.error(err) )
  .listen(PORT, () => {
    dbConnect()
    console.log(`Listening on port ${PORT}`)
  })

process.on('SIGTERM', () => {
  dbDisconnect()
  console.log('Disconnected from DB');
});