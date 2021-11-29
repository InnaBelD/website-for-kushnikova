const Router = require('express');
const router = new Router();

const ProductController = require("../controller/productController");

router.get("/getOneProduct", ProductController.getOneProduct);
router.get("/getProducts", ProductController.getProducts);
// router.post("/createProduct", ProductController.createProduct);
// router.post("/deleteProduct", ProductController.deleteProduct);
// router.post("/updateProduct", ProductController.updateProduct);

module.exports = router;