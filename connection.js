const { Client } = require('pg')
const client = new Client({
  // host: 'localhost',
  // port: 5432,
  // user: 'postgres',
  // password: '1234',
  // database: 'test',
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
client.connect((err) => {
  if (err) throw err
  console.log("Connect to PostgreSQL successfully!")
})
module.exports = client;