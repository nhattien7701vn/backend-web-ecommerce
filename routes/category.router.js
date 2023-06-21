const express = require("express")
const router = express.Router()
const categoryController = require('../controllers/category.controller.js')

router.get("/", categoryController.getAllCategory)
router.get("/:id", categoryController.getCategoryById)
router.post("/", categoryController.post)
router.put("/:id", categoryController.put)
router.delete("/:id", categoryController.delete)

module.exports = router