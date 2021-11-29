const Router = require('express');
const router = new Router();

const OrderController = require("../controller/orderController");

router.get("/getUserOrder", OrderController.getUserOrder);
router.get("/getAllOrder", OrderController.getAllOrder);
// router.post("/createOrder", OrderController.createOrder);
// router.post("/deleteOrder", OrderController.deleteOrder);

module.exports = router;