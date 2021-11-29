const OrderModel = require("../models/order");

class OrderController{
    async getUserOrder(req, res){
        try {
            const {id_user} = req.query;

            const orders = await OrderModel.find({id_user: id_user});
            return res.json(orders);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get orders' });
        }
    }

    async getAllOrder(req, res){
        try {
            const orders = await OrderModel.find();
            return res.json(orders);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get orders' });
        }
    }

    // async createOrder(req, res){        }

    // async updateOrder(req, res){        }
}

module.exports = new OrderController();