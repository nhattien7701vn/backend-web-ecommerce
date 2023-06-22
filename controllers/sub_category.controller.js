const postgre = require('../connection')
const sub_categoryController = {
  //GET ALL CATEGORY
  getAllSubCategory: (req, res) => {
    postgre.query(`select * from sub_category`, (err, result) => {
      if (!err) {
        res.send(result.rows)
      } else if (err) {
        res.send(err.message)
      };
    })
    console.log("GET request for the homepage");
  },

  //GET CATEGORY BY ID
  getSubCategoryById: (req, res) => {
    postgre.query(`Select * from sub_category where id = '${req.params.id}'`, (err, result) => {
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
    const subCategory = req.body;
    let insertQuery = `insert into sub_category (id, name, uri, description, category_id, created_at, modified_at)
                       values
                       ('${subCategory.id}', '${subCategory.name}', '${subCategory.uri}', '${subCategory.description}', '${subCategory.category_id}', ${subCategory.created_at}, ${subCategory.modified_at});`
    postgre.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Insertion was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  },

  //UPDATE CATEGORY BY ID
  put: (req, res) => {
    let subCategory = req.body;
    let updateQuery = `update sub_category
                       set name = '${subCategory.name}',
                       uri = '${subCategory.uri}',
                       description = '${subCategory.description}',
                       category_id = '${subCategory.category_id}',
                       modified_at = ${subCategory.modified_at}
                       where id = '${subCategory.id}'`

    postgre.query(updateQuery, (err, result) => {
      if (!err) {
        res.send('Update was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  },

  //DELETE CATEGORY BY ID
  delete: (req, res) => {
    let insertQuery = `delete from sub_category where id = '${req.params.id}'`
    postgre.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Deletion was successful')
      }
      else { console.log(err.message) }
    })
    postgre.end;
  }
}
module.exports = sub_categoryController