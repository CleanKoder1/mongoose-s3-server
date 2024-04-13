const router = require("express").Router();
const { productController } = require("../controllers");
const multer = require("../lib/multer");
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post(
  "/",
  multer.upload.single("imageKey"),
  productController.postProduct
);
router.patch(
  "/:id",
  multer.upload.single("imageKey"),
  productController.patchProductById
);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
