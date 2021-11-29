const FavouriteModel = require("../models/favourite");

class FavouriteController{

    async getFavourite(req, res){
        try {
            const {id_user} = req.query;

            const favourite = await FavouriteModel.find({id_user: id_user});
            return res.json(favourite);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get favourite' });
        }
    }

    // async createFavourite(req, res){        }

    // async deleteFavourite(req, res){        }
}

module.exports = new FavouriteController();