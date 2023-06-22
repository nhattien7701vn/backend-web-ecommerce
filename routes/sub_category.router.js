const express = require("express")
const router = express.Router()
const subCategoryController = require('../controllers/sub_category.controller.js')

router.get("/", subCategoryController.getAllSubCategory)
router.get("/:id", subCategoryController.getSubCategoryById)
router.post("/", subCategoryController.post)
router.put("/:id", subCategoryController.put)
router.delete("/:id", subCategoryController.delete)

module.exports = router