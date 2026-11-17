const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/", productController.getAllProducts);
router.post("/", verifyToken, productController.createProduct);
router.put("/", verifyToken, productController.updateProduct);
router.put("/:sku", verifyToken, productController.updateProduct);
router.delete("/", verifyToken, productController.deleteProduct);
router.delete("/:sku", verifyToken, productController.deleteProduct);

module.exports = router;