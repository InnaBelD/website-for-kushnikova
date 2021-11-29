const Router = require('express');
const router = new Router();

const FavouriteController = require("../controller/favouriteController");


router.get("/getFavourite", FavouriteController.getFavourite);
// router.post("/createFavourite", FavouriteController.createFavourite);
// router.post("/deleteFavourite", FavouriteController.deleteFavourite);

module.exports = router;