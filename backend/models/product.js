const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    title: String,
    price: Number,
    images: [{ type: String}],
    category: String,
    fandom: String,
    description: String,
    items:[{ type: Schema.Types.ObjectId}]
},
{ collection: 'product' });

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;