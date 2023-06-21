// const client = require('./connection.js')
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
app.use(cors());
app.use(express.json());

const categoryRouter = require('./routes/category.router')
app.use("/api/v1/categories", categoryRouter)
const productRouter = require('./routes/product.router')
app.use("/api/v1/products", productRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))

// //HOME
// app.get('/', function (req, res) {
//   res.send("Hello world !!!")
// })

// //GET ALL CATEGORY

// app.get('/categories', function (req, res) {
//   client.query(`select * from category`, (err, result) => {
//     if (!err) {
//       res.send(result.rows)
//     } else if (err) {
//       res.send(err.message)
//     };
//   })
//   console.log("GET request for the homepage");
// })

// //GET CATEGORY BY ID

// app.get('/categories/:id', function (req, res) {
//   client.query(`Select * from category where id = '${req.params.id}'`, (err, result) => {
//     if (!err) {
//       res.send(result.rows)
//     } else if (err) {
//       res.send(err.message)
//     };
//   })
//   console.log("GET request for the homepage");
// })

// //CREATE NEW CATEGORY

// app.post('/categories', (req, res) => {
//   const category = req.body;
//   let insertQuery = `insert into category (id, name, uri, description, created_at, modified_at)
//                      values
//                      ('${category.id}', '${category.name}', '${category.uri}', '${category.description}', ${category.created_at}, ${category.modified_at});`
//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send('Insertion was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// //UPDATE CATEGORY BY ID

// app.put('/categories/:id', (req, res) => {
//   let category = req.body;
//   let updateQuery = `update category
//                      set name = '${category.name}',
//                      uri = '${category.uri}',
//                      description = '${category.description}',
//                      modified_at = ${category.modified_at}
//                      where id = '${category.id}'`

//   client.query(updateQuery, (err, result) => {
//     if (!err) {
//       res.send('Update was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// //DELETE CATEGORY BY ID

// app.delete('/categories/:id', (req, res) => {
//   let insertQuery = `delete from category where id = '${req.params.id}'`
//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send('Deletion was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// //PRODUCT 

// //GET ALL PRODUCT

// app.get('/products', function (req, res) {
//   client.query(`select * from product`, (err, result) => {
//     if (!err) {
//       res.send(result.rows)
//     } else if (err) {
//       res.send(err.message)
//     };
//   })
//   console.log("GET request for the homepage");
// })

// //GET PRODUCT BY ID

// app.get('/products/:id', function (req, res) {
//   client.query(`Select * from product where id = '${req.params.id}'`, (err, result) => {
//     if (!err) {
//       res.send(result.rows)
//     } else if (err) {
//       res.send(err.message)
//     };
//   })
//   console.log("GET request for the homepage");
// })

// //CREATE NEW PRODUCT
// app.post('/products', (req, res) => {
//   const product = req.body;
//   let insertQuery = `insert into product (id, name, uri, description, image_source, category_id, price, created_at, modified_at)
//                      values
//                      ('${product.id}', '${product.name}', '${product.uri}', '${product.description}', '${product.image_source}', '${product.category_id}', '${product.price}', ${product.created_at}, ${product.modified_at});`
//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send('Insertion was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// //UPDATE PRODUCT BY ID //

// app.put('/products/:id', (req, res) => {
//   let product = req.body;
//   let updateQuery = `update product
//                      set name = '${product.name}',
//                      category_id = '${product.category_id}',
//                      uri = '${product.uri}',
//                      description = '${product.description}',
//                      image_source = '${product.image_source}',
//                      price = '${product.price}',
//                      modified_at = ${product.modified_at}
//                      where id = '${product.id}'`

//   client.query(updateQuery, (err, result) => {
//     if (!err) {
//       res.send('Update was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })

// //DELETE PRODUCT BY ID

// app.delete('/products/:id', (req, res) => {
//   let insertQuery = `delete from product where id = '${req.params.id}'`
//   client.query(insertQuery, (err, result) => {
//     if (!err) {
//       res.send('Deletion was successful')
//     }
//     else { console.log(err.message) }
//   })
//   client.end;
// })