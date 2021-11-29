const mongoose = require('mongoose');
const { Schema } = mongoose;


const orderSchema = new Schema({
    id_user: {type: Schema.Types.ObjectId, ref: 'User'},
    products: [{id_product: {type: Schema.Types.ObjectId, ref: 'Product'}, count: Number}],    
    delivery_price: Number,
    sum: Number,
    sum_delivery: Number,
    date: Date,
    status: String,
    country: String,
    city: String,
    adress: String,
    index: String
},
{ collection: 'order' });

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;