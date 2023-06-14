const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '1234',
  database: 'test',
})
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

client.query(`Select * from category`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log("Error occured: ", err.message);
  }
  client.end;
})