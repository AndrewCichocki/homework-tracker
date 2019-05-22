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
    ctx.body = await getAllAssignments()
    await next()
  })
  .post('/assignment', async (ctx, next) => {
    const { name, dueDate, status, subject } = ctx.request.body
    await addAssignment(name, dueDate, status, subject)
    ctx.body = 'idk?'
    await next()
  })
  .put('/assignment/:id', async (ctx, next) => {
    // get id from URL
    const { id, name, dueDate, status, subject } = ctx.request.body
    await updateAssignment(id, name, dueDate, status, subject)
    ctx.body = 'idk?'
    await next()
  })
  .del('/assignment/:id', async (ctx, next) => {
    const { id } = ctx.params
    ctx.body = await deleteAssignment(id)
    await next()
  })

app
  .use(cors({ origin: '*' }))
  .use(BodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .on('error', err => {
    console.error(err)
    // dbDisconnect() // maybe?
  })
  .listen(PORT, () => {
    dbConnect()
    console.log(`Listening on port ${PORT}`)
  })

process.on('SIGTERM', () => {
  dbDisconnect()
  console.log('SIGTERM signal received.');
});