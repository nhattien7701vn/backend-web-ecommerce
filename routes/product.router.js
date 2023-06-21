const express = require("express")
const router = express.Router()
const productController = require('../controllers/product.controller.js')

router.get("/", productController.getAllProduct)
router.get("/:id", productController.getProductById)
router.post("/", productController.post)
router.put("/:id", productController.put)
router.delete("/:id", productController.delete)

module.exports = router