const postgre = require('../connection')
const productController = {
  //PRODUCT 

  //GET ALL PRODUCT
  get: (req, res) => {
    postgre.query(`select * from product`, (err, result) => {
      if (!err) {
        res.send(result.rows)
      } else if (err) {
        res.send(err.message)
      };
    })
    console.log("GET request for the homepage");
  },

  //GET PRODUCT BY ID
  get: (req, res) => {
    postgre.query(`Select * from product where id = '${req.params.id}'`, (err, result) => {
      if (!err) {
        res.send(result.rows)
      } else if (err) {
        res.send(err.message)
      };
    })
    console.log("GET request for the homepage");
  },

  //CREATE NEW PRODUCT
  post: (req, res) => {
    const product = req.body;
    let insertQuery = `insert into product (id, name, uri, description, image_source, category_id, price, created_at, modified_at)
                       values
                       ('${product.id}', '${product.name}', '${product.uri}', '${product.description}', '${product.image_source}', '${product.category_id}', '${product.price}', ${product.created_at}, ${product.modified_at});`
    postgre.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Insertion was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  },

  //UPDATE PRODUCT BY ID //
  put: (req, res) => {
    let product = req.body;
    let updateQuery = `update product
                       set name = '${product.name}',
                       category_id = '${product.category_id}',
                       uri = '${product.uri}',
                       description = '${product.description}',
                       image_source = '${product.image_source}',
                       price = '${product.price}',
                       modified_at = ${product.modified_at}
                       where id = '${product.id}'`

    postgre.query(updateQuery, (err, result) => {
      if (!err) {
        res.send('Update was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  },

  //DELETE PRODUCT BY ID
  delete: (req, res) => {
    let insertQuery = `delete from product where id = '${req.params.id}'`
    postgre.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Deletion was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  }
}
module.exports = productController