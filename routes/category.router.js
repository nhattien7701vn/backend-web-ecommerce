const express = require("express")
const router = express.Router()
const categoryController = require('../controllers/category.controller.js')

router.get("/categories", categoryController.get)
router.get("/categories/:id", categoryController.get)
router.post("/categories", categoryController.post)
router.put("/categories/:id", categoryController.put)
router.delete("/categories/:id", categoryController.delete)

module.exports = router