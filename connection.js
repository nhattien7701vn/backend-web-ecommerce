const { Pool } = require('pg')
const pool = new Pool({
  // host: 'localhost',
  // port: 5432,
  // user: 'postgres',
  // password: '1234',
  // database: 'test',
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
pool.connect((err) => {
  if (err) throw err
  console.log("Connect to PostgreSQL successfully!")
})
module.exports = pool;