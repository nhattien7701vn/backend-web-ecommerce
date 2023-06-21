const client = require('../connection.js')
const categoryController = {

  //GET ALL CATEGORY
  get: (req, res) => {
    client.query(`select * from category`, (err, result) => {
      if (!err) {
        res.send(result.rows)
      } else if (err) {
        res.send(err.message)
      };
    })
    console.log("GET request for the homepage");
  },

  //GET CATEGORY BY ID
  get: (req, res) => {
    client.query(`Select * from category where id = '${req.params.id}'`, (err, result) => {
      if (!err) {
        res.send(result.rows)
      } else if (err) {
        res.send(err.message)
      };
    })
    console.log("GET request for the homepage");
  },

  //CREATE NEW CATEGORY
  post: (req, res) => {
    const category = req.body;
    let insertQuery = `insert into category (id, name, uri, description, created_at, modified_at)
                       values
                       ('${category.id}', '${category.name}', '${category.uri}', '${category.description}', ${category.created_at}, ${category.modified_at});`
    client.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Insertion was successful')
      }
      else { console.log(err.message) }
    })
    client.end;
  },

  //UPDATE CATEGORY BY ID
  put: (req, res) => {
    let category = req.body;
    let updateQuery = `update category
                       set name = '${category.name}',
                       uri = '${category.uri}',
                       description = '${category.description}',
                       modified_at = ${category.modified_at}
                       where id = '${category.id}'`

    client.query(updateQuery, (err, result) => {
      if (!err) {
        res.send('Update was successful')
      }
      else { console.log(err.message) }
    })
    client.end;
  },

  //DELETE CATEGORY BY ID
  delete: (req, res) => {
    let insertQuery = `delete from category where id = '${req.params.id}'`
    client.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Deletion was successful')
      }
      else { console.log(err.message) }
    })
    client.end;
  }
}
module.exports = categoryController