const mongoose = require('mongoose');
const { Schema } = mongoose;


const favouriteSchema = new Schema({
    id_user: { type: Schema.Types.ObjectId, ref: 'User' },
    id_product: {type: Schema.Types.ObjectId, ref: 'Product'}
    
},
{ collection: 'favourite' });

const FavouriteModel = mongoose.model('Favourite', favouriteSchema);

module.exports = FavouriteModel;