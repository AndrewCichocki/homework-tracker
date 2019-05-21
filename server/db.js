const { Pool } = require('pg')

const conf = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
}

let pool

const onError = (err, client) => {
  console.log(err)
  client.release()
}

const dbConnect = async () => {
  // console.dir(conf)
  pool = new Pool(conf)
  pool.on('error', onError)
  return pool
}

const dbDisconnect = async () => {
  if (pool) await pool.end()
}

const query = async (text, params) => {
  if (!pool) await dbConnect()
  const { rows } = await pool.query(text, params)
  return rows
}

const queryOne = async (text, params) => {
  if (!pool) await dbConnect()
  const { rows = [] } = await pool.query(text, params)
  return rows[0]
}

module.exports = {
  dbConnect,
  dbDisconnect,
  query,
  queryOne
}