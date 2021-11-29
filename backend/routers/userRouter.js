const Router = require('express');
const router = new Router();

const UserController = require("../controller/userController");

router.get("/getOneUser", UserController.getOneUser);
router.get("/getUsers", UserController.getUsers);
// router.post("/createUser", UserController.createUser);
// router.post("/deleteUser", UserController.deleteUser);
// router.post("/updateUser", UserController.updateUser);

module.exports = router;