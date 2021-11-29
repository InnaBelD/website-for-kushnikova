const ProductModel = require("../models/product");

class ProductController{
    async getOneProduct(req, res){
        try {
            const { id_product } = req.query;
            const product = await ProductModel.findOne({ _id: id_product });
            return res.json(product);
        } catch (e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get product' });
        }
    }

    async getProducts(req, res){
        try {
            const products = await ProductModel.find();
            return res.json(products);
        } catch(e) {
            console.log(e);
            return res.status(5000).json({ message: 'Connot get products' });
        }
    }

    // async createProduct(req, res){        }

    // async deleteProduct(req, res){        }

    // async updatetProduct(req, res){        }
}

module.exports = new ProductController();