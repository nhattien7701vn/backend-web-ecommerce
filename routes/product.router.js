const express = require("express")
const router = express.Router()
const productController = require('../controllers/product.controller.js')

router.get("/products", productController.get)
router.get("/products/:id", productController.get)
router.post("/products", productController.post)
router.put("/products/:id", productController.put)
router.delete("/products/:id", productController.delete)

module.exports = router